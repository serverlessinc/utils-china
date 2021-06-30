'use strict';

const got = require('got');
const assert = require('assert');
const { Capi } = require('@tencent-sdk/capi');

const TencentCloudSDKHttpException = require('../http-error');

class Serverless {
  constructor({ appid, secret_id: secretId, secret_key: secretKey, options }) {
    assert(options, 'Options should not is empty');

    this.appid = appid;
    this.secretKey = secretKey;
    this.secretId = secretId;
    this.token = options.token;
    this.region = options.region || 'ap-guangzhou';
    this.options = options;

    this._slsClient = new Capi({
      debug: false,
      host: 'sls.tencentcloudapi.com',
      Version: '2020-02-05',
      Region: this.region,
      SecretId: secretId,
      SecretKey: secretKey,
      Token: options.token,
      ServiceType: 'sls',
      RequestClient: options.sdkAgent || 'ServerlessFramework',
    });
  }

  static async doRequest(action, params, options = {}) {
    const proxyOrigin =
      params.Region === 'ap-shanghai'
        ? 'https://service-k6qwj4qx-1300862921.sh.apigw.tencentcs.com/release/listcompversion-dev'
        : 'https://service-cqwfbiyw-1300862921.gz.apigw.tencentcs.com/release/listcompversion';

    params.Action = action;

    const headers = options.Headers || {};

    try {
      const response = await got(proxyOrigin, {
        searchParams: params,
        timeout: 30 * 1000,
        headers,
      });

      if (response.statusCode !== 200) {
        const tcError = new TencentCloudSDKHttpException(response.statusMessage);
        tcError.httpCode = response.statusCode;
        throw tcError;
      }

      const { Response } = JSON.parse(response.body);

      if (Response && Response.Error) {
        const tcError = new TencentCloudSDKHttpException(
          Response.Error.Message,
          Response.RequestId
        );
        tcError.code = Response.Error.Code;
        throw tcError;
      }

      return Response;
    } catch (e) {
      throw new TencentCloudSDKHttpException(e.message);
    }
  }

  static async getComponentAndVersions(name, options = {}) {
    assert(name, 'The request is missing a required parameter name');
    const compVersion = {
      ComponentName: name,
      Region: options.region || 'ap-guangzhou',
    };
    return Serverless.doRequest('GetComponentAndVersions', compVersion);
  }

  static async getComponentVersion(name, version, options = {}) {
    assert(name, 'The request is missing a required parameter name');
    // assert(version, 'The request is missing a required parameter version')
    const componentVersion = {
      ComponentName: name,
      ComponentVersion: version || '',
      Region: options.region || 'ap-guangzhou',
    };

    return Serverless.doRequest('GetComponentVersion', componentVersion);
  }

  static async listComponents(queryParams, options = {}) {
    const params = {
      Body: JSON.stringify(queryParams),
      Region: options.region || 'ap-guangzhou',
    };

    return Serverless.doRequest('ListComponents', params);
  }

  static async listPackages(body, options = {}) {
    assert(body, 'The request is missing a required parameter');
    const params = {
      Body: JSON.stringify(body),
      Region: options.region || 'ap-guangzhou',
      TraceId: options.traceId ? options.traceId : null,
    };

    return Serverless.doRequest('ListPackages', params);
  }

  static async getPackage(name, version, options = {}) {
    assert(name, 'The request is missing a required parameter name');
    const params = {
      PackageName: name,
      PackageVersion: version || '',
      Region: options.region || 'ap-guangzhou',
      TraceId: options.traceId ? options.traceId : null,
    };

    const opts = {
      Headers: options.headers || {},
    };

    return Serverless.doRequest('GetPackage', params, opts);
  }

  async _call(api, params) {
    const { Response } = await this._slsClient.request({
      Action: api,
      ...params,
    });
    if (Response.Error) {
      const tcError = new TencentCloudSDKHttpException(Response.Error.Message, Response.RequestId);
      tcError.code = Response.Error.Code;
      throw tcError;
    }
    return Response;
  }

  async prePublishComponent(body = {}) {
    if (!body.component || !body.component.componentName || !body.component.version) {
      throw new Error('componentName and version are required.');
    }

    const req = {};
    req.ComponentVersion = body.component.version;
    req.ComponentName = body.component.componentName;
    req.Body = JSON.stringify(body);
    return await this._call('PrePublishComponent', req);
  }

  async postPublishComponent(body = {}) {
    if (!body.componentName || !body.componentVersion) {
      throw new Error('componentName and componentVersion are required.');
    }

    const req = {};
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

    const req = {};
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

    const req = {};
    req.AppName = instance.appName;
    req.StageName = instance.stageName;
    req.InstanceName = instance.instanceName;
    req.Body = JSON.stringify(instanceData);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('SaveInstance', req);
  }

  async listInstances(data) {
    const req = {};
    req.Body = JSON.stringify(data);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('ListInstances', req);
  }

  async getUploadUrls(data) {
    const { orgName, orgUid } = data;
    assert(orgName, 'The request is missing a required parameter orgName');
    assert(orgUid, 'The request is missing a required parameter orgUid');

    const req = {};
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

    const req = {};
    req.Body = JSON.stringify(data);
    req.OrgUid = orgUid;
    req.AppName = appName;
    req.StageName = stageName;
    req.InstanceName = instanceName;
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('GetCacheFileUrls', req);
  }

  async pushEvents(data) {
    const req = {};
    req.Body = JSON.stringify(data);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('PushEvents', req);
  }

  async invokeInstance(data) {
    const { orgName, appName, stageName, instanceName } = data;
    assert(orgName, 'The request is missing a required parameter orgName');
    assert(appName, 'The request is missing a required parameter appName');
    assert(stageName, 'The request is missing a required parameter stageName');
    assert(instanceName, 'The request is missing a required parameter instanceName');

    const req = {};
    req.Body = JSON.stringify(data);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('InvokeInstance', req);
  }

  async getInstanceLogs(data) {
    const { orgName, appName, stageName, instanceName } = data;
    assert(orgName, 'The request is missing a required parameter orgName');
    assert(appName, 'The request is missing a required parameter appName');
    assert(stageName, 'The request is missing a required parameter stageName');
    assert(instanceName, 'The request is missing a required parameter instanceName');

    const req = {};
    req.Body = JSON.stringify(data);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return this._call('GetInstanceLogs', req);
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

    const req = {};
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

    const req = {};
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
    const req = {};
    req.Type = types;
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('SendCoupon', req);
  }

  async preparePublishPackage(body) {
    assert(body, 'The request is missing a required parameter');
    const req = {};
    req.Body = JSON.stringify(body);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('PreparePublishPackage', req);
  }

  async postPublishPackage(body) {
    assert(body, 'The request is missing a required parameter');
    const req = {};
    req.Body = JSON.stringify(body);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('PostPublishPackage', req);
  }

  async paramSet(body) {
    const { instance } = body;
    assert(instance, 'The request is missing a required parameter instance');
    assert(instance.appName, 'The request is missing a required parameter instance.appName');
    assert(instance.stageName, 'The request is missing a required parameter instance.stageName');

    const req = {};
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

    const req = {};
    req.AppName = instance.appName;
    req.StageName = instance.stageName;
    req.Body = JSON.stringify(body);
    req.TraceId = 'traceId' in this.options ? this.options.traceId : null;
    return await this._call('ListParameters', req);
  }

  async getApplicationStatus(body) {
    const req = {};
    req.Body = body;
    return await this._call('GetApplicationStatus', req);
  }

  async getDeploymentStatus(id, body) {
    const req = {};
    req.Body = body;
    req.JobBuildId = id;
    return await this._call('GetDeploymentStatus', req);
  }

  async deployApplication(body) {
    const req = {};
    req.Body = body;
    return await this._call('DeployApplication', req);
  }
}

module.exports = Serverless;
