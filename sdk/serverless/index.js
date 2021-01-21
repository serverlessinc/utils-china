'use strict';

const util = require('util');
const assert = require('assert');
const { sls, common } = require('../../library');

const ClientProfile = common.ClientProfile;
const HttpProfile = common.HttpProfile;
const Credential = common.Credential;
const SlsClient = sls.v20200205.Client;
const SlsModels = sls.v20200205.Models;
const HttpConnection = common.HttpConnection;
const TencentCloudSDKHttpException = require('../../library/common/exception/tencent_cloud_sdk_exception');

class Serverless {
  constructor({ appid, secret_id: secretId, secret_key: secretKey, options }) {
    this.appid = appid;
    this.secretKey = secretKey;
    this.secretId = secretId;
    this.options = options;
    assert(options, 'Options should not is empty');
    this._slsClient = Serverless.createClient(secretId, secretKey, options);
  }

  static getCredential(secretId, secretKey, options) {
    const cred = options.token
      ? new Credential(secretId, secretKey, options.token)
      : new Credential(secretId, secretKey);
    const httpProfile = new HttpProfile();
    httpProfile.reqTimeout = 30;
    const clientProfile = new ClientProfile('HmacSHA256', httpProfile);
    assert(options.region, 'Region should not is empty');
    return {
      cred,
      region: options.region,
      clientProfile,
    };
  }

  static createClient(secretId, secretKey, options) {
    const info = Serverless.getCredential(secretId, secretKey, options);
    const scfCli = new SlsClient(info.cred, info.region, info.clientProfile);
    scfCli.sdkVersion = options.sdkAgent || 'ServerlessFramework';
    return scfCli;
  }

  static async getComponentAndVersions(name, options) {
    assert(name, 'The request is missing a required parameter name');
    const compVersion = {
      ComponentName: name,
      Region: (options ? options.region : 'ap-guangzhou') || 'ap-guangzhou',
    };
    return Serverless.doRequest('GetComponentAndVersions', compVersion);
  }

  async _call(api, params) {
    const handler = util.promisify(this._slsClient[api].bind(this._slsClient));
    return await handler(params);
  }

  static async doRequest(action, params, options = {}) {
    const proxyOrigin =
      params.Region === 'ap-shanghai'
        ? 'https://service-k6qwj4qx-1300862921.sh.apigw.tencentcs.com/release/listcompversion-dev'
        : 'https://service-cqwfbiyw-1300862921.gz.apigw.tencentcs.com/release/listcompversion';

    const optional = {
      timeout: 30 * 1000,
      headers: options.Headers || {},
    };

    params.Action = action;

    return new Promise((resolve, reject) => {
      HttpConnection.doRequest(
        'GET',
        proxyOrigin,
        params,
        (error, response, data) => {
          if (error) {
            reject(new TencentCloudSDKHttpException(error.message));
          } else if (response.statusCode !== 200) {
            const tcError = new TencentCloudSDKHttpException(response.statusMessage);
            tcError.httpCode = response.statusCode;
            reject(tcError);
          } else {
            data = JSON.parse(data);
            if (data.Response && data.Response.Error) {
              const tcError = new TencentCloudSDKHttpException(
                data.Response.Error.Message,
                data.Response.RequestId
              );
              tcError.code = data.Response.Error.Code;
              reject(tcError);
            } else {
              resolve(data.Response);
            }
          }
        },
        optional
      );
    });
  }

  static async getComponentVersion(name, version, options) {
    assert(name, 'The request is missing a required parameter name');
    // assert(version, 'The request is missing a required parameter version')
    const componentVersion = {
      ComponentName: name,
      ComponentVersion: version || '',
      Region: (options ? options.region : 'ap-guangzhou') || 'ap-guangzhou',
    };

    return Serverless.doRequest('GetComponentVersion', componentVersion);
  }

  static async listComponents(queryParams, options) {
    const params = {
      Body: JSON.stringify(queryParams),
      Region: (options ? options.region : 'ap-guangzhou') || 'ap-guangzhou',
    };

    return Serverless.doRequest('ListComponents', params);
  }

  async prePublishComponent(body = {}) {
    if (!body.component || !body.component.componentName || !body.component.version) {
      throw new Error('componentName and version are required.');
    }

    const req = new SlsModels.PrePublishComponentRequest();
    req.ComponentVersion = body.component.version;
    req.ComponentName = body.component.componentName;
    req.Body = JSON.stringify(body);
    return await this._call('PrePublishComponent', req);
  }

  async postPublishComponent(body = {}) {
    if (!body.componentName || !body.componentVersion) {
      throw new Error('componentName and componentVersion are required.');
    }

    const req = new SlsModels.PostPublishComponentRequest();
    req.ComponentVersion = body.componentVersion;
    req.ComponentName = body.componentName;
    req.Body = JSON.stringify(body);
    return await this._call('PostPublishComponent', req);
  }

  async getInstance(instance) {
    const { appName, stageName, instanceName } = instance;
    assert(appName, 'The request is missing a required parameter appName');
    assert(stageName, 'The request is missing a required parameter stageName');
    assert(instanceName, 'The request is missing a required parameter instanceName');

    const req = new SlsModels.GetInstanceRequest();
    req.AppName = appName;
    req.StageName = stageName;
    req.InstanceName = instanceName;
    req.Body = JSON.stringify(instance);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('GetInstance', req);
  }

  async saveInstance(instanceData) {
    const { instance } = instanceData;
    assert(instance, 'The request is missing a required parameter instance');
    assert(instance.appName, 'The request is missing a required parameter instance.appName');
    assert(instance.stageName, 'The request is missing a required parameter instance.stageName');
    assert(
      instance.instanceName,
      'The request is missing a required parameter instance.instanceName'
    );

    const req = new SlsModels.SaveInstanceRequest();
    req.AppName = instance.appName;
    req.StageName = instance.stageName;
    req.InstanceName = instance.instanceName;
    req.Body = JSON.stringify(instanceData);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('SaveInstance', req);
  }

  async listInstances(data) {
    const req = new SlsModels.ListInstancesRequest();
    req.Body = JSON.stringify(data);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('ListInstances', req);
  }

  async getUploadUrls(data) {
    const { orgName, orgUid } = data;
    assert(orgName, 'The request is missing a required parameter orgName');
    assert(orgUid, 'The request is missing a required parameter orgUid');

    const req = new SlsModels.GetUploadUrlsRequest();
    req.Body = JSON.stringify(data);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('GetUploadUrls', req);
  }

  async getCacheFileUrls(data) {
    const { orgUid, appName, stageName, instanceName } = data;
    assert(orgUid, 'The request is missing a required parameter orgUid');
    assert(appName, 'The request is missing a required parameter appName');
    assert(stageName, 'The request is missing a required parameter stageName');
    assert(instanceName, 'The request is missing a required parameter instanceName');

    const req = new SlsModels.GetCacheFileUrlsRequest();
    req.Body = JSON.stringify(data);
    req.OrgUid = orgUid;
    req.AppName = appName;
    req.StageName = stageName;
    req.InstanceName = instanceName;
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('GetCacheFileUrls', req);
  }

  async runComponent(data) {
    const { instance, method } = data;
    assert(instance, 'The request is missing a required parameter instance');
    assert(method, 'The request is missing a required parameter method');
    assert(instance.appName, 'The request is missing a required parameter instance.appName');
    assert(instance.stageName, 'The request is missing a required parameter instance.stageName');
    assert(
      instance.instanceName,
      'The request is missing a required parameter instance.instanceName'
    );

    // const regexp = new RegExp(/^(deploy|remove|run)$/, 'g');
    // assert(regexp.exec(method), 'The request is missing a required parameter method value "deploy|remove|run"')

    const req = new SlsModels.RunComponentRequest();
    req.AppName = instance.appName;
    req.StageName = instance.stageName;
    req.InstanceName = instance.instanceName;
    if (instance.channel) {
      req.Channel = instance.channel;
    }
    if (instance.roleName) {
      req.RoleName = instance.roleName;
    }
    req.Body = JSON.stringify(data);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('RunComponent', req);
  }

  async runFinishComponent(data) {
    const { instance, method } = data;
    assert(instance, 'The request is missing a required parameter instance');
    assert(method, 'The request is missing a required parameter method');
    assert(instance.appName, 'The request is missing a required parameter instance.appName');
    assert(instance.stageName, 'The request is missing a required parameter instance.stageName');
    assert(
      instance.instanceName,
      'The request is missing a required parameter instance.instanceName'
    );

    // const regexp = new RegExp(/^(deploy|remove|run)$/, 'g');
    // assert(regexp.exec(method), 'The request is missing a required parameter method value "deploy|remove|run"')

    const req = new SlsModels.RunFinishComponentRequest();
    req.AppName = instance.appName;
    req.StageName = instance.stageName;
    req.InstanceName = instance.instanceName;
    req.Body = JSON.stringify(data);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('RunFinishComponent', req);
  }

  async sendCoupon(types) {
    assert(types, 'The request is missing a required parameter types');
    assert(Array.isArray(types), 'The request is parameter types must is array');
    const req = new SlsModels.SendCouponRequest();
    req.Type = types;
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('SendCoupon', req);
  }

  static async listPackages(body, options = {}) {
    assert(body, 'The request is missing a required parameter');
    const params = {
      Body: JSON.stringify(body),
      Region: options.region ? options.region : 'ap-guangzhou',
      TraceId: options.traceId ? options.traceId : null,
    };

    return Serverless.doRequest('ListPackages', params);
  }

  static async getPackage(name, version, options = {}) {
    assert(name, 'The request is missing a required parameter name');
    const params = {
      PackageName: name,
      PackageVersion: version || '',
      Region: options.region ? options.region : 'ap-guangzhou',
      TraceId: options.traceId ? options.traceId : null,
    };

    const opts = {
      Headers: options.headers || {},
    };

    return Serverless.doRequest('GetPackage', params, opts);
  }

  async preparePublishPackage(body) {
    assert(body, 'The request is missing a required parameter');
    const req = new SlsModels.PreparePublishPackageRequest();
    req.Body = JSON.stringify(body);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('PreparePublishPackage', req);
  }

  async postPublishPackage(body) {
    assert(body, 'The request is missing a required parameter');
    const req = new SlsModels.PostPublishPackageRequest();
    req.Body = JSON.stringify(body);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('PostPublishPackage', req);
  }

  async paramSet(body) {
    const { instance } = body;
    assert(instance, 'The request is missing a required parameter instance');
    assert(instance.appName, 'The request is missing a required parameter instance.appName');
    assert(instance.stageName, 'The request is missing a required parameter instance.stageName');

    const req = new SlsModels.SetParameterRequest();
    req.AppName = instance.appName;
    req.StageName = instance.stageName;
    req.Body = JSON.stringify(body);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('SetParameter', req);
  }

  async paramList(body) {
    const { instance } = body;
    assert(instance, 'The request is missing a required parameter instance');
    assert(instance.appName, 'The request is missing a required parameter instance.appName');
    assert(instance.stageName, 'The request is missing a required parameter instance.stageName');

    const req = new SlsModels.ListParametersRequest();
    req.AppName = instance.appName;
    req.StageName = instance.stageName;
    req.Body = JSON.stringify(body);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('ListParameters', req);
  }

  async getApplicationStatus(body) {
    const req = new SlsModels.GetApplicationStatusRequest();
    req.Body = body;
    return await this._call('GetApplicationStatus', req);
  }

  async getDeploymentStatus(id, body) {
    const req = new SlsModels.GetDeploymentStatusRequest();
    req.Body = body;
    req.JobBuildId = id;
    return await this._call('GetDeploymentStatus', req);
  }

  async deployApplication(body) {
    const req = new SlsModels.DeployApplicationRequest();
    req.Body = body;
    return await this._call('DeployApplication', req);
  }

  // async unpublishComponentVersion(name, version) {
  //     const componentVersion = {
  //         Name: name,
  //         ComponentVersion: version
  //     }
  //     const req = new SlsModels.UnpublishComponentVersionRequest();
  //     req.fromJsonString(JSON.stringify(componentVersion));
  //     return await this._call('UnpublishComponentVersion', req);
  // }

  // async publishComponentVersion({name, componentVersion, org, author, description, keywords, license}) {

  //     const camRole = new BindRole.BindRole({
  //         SecretId: this.secret_id,
  //         SecretKey: this.secret_key,
  //         token: this.options.token
  //     });

  //     camRole.bindSLSQcsRole();

  //     const pubComVersionRequest = {
  //         Name: name,
  //         ComponentVersion: componentVersion,
  //         Org: org,
  //         Author: author,
  //         Description: description,
  //         Keywords: keywords,
  //         License: license
  //     }

  //     const req = new SlsModels.PublishComponentVersionRequest()
  //     req.fromJsonString(JSON.stringify(pubComVersionRequest));
  //     return await this._call('PublishComponentVersion', req);
  // }

  // async fetchComponentMetadata(name, version) {
  //     const componentVersion = {
  //         Name: name,
  //         ComponentVersion: version
  //     }
  //     const req = new SlsModels.FetchComponentMetadataRequest();
  //     req.fromJsonString(JSON.stringify(componentVersion));
  //     return await this._call('FetchComponentMetadata', req);
  // }
}

module.exports = Serverless;
