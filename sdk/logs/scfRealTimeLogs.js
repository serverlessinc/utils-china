'use strict';

const { GetUserInformationResponse, UserInformationClient } = require('../cam/index');
const { scf, common } = require('../../library');

const ScfModels = scf.v20180416.Models;
const ScfClient = scf.v20180416.Client;
const { Credential, ClientProfile, HttpProfile } = common;

class ScfRealTimeLogs {
  static createScfClient(secretId, secretKey, token, region) {
    const info = this.getClientInfo(secretId, secretKey, token, region);
    const scfCli = new ScfClient(info.cred, info.region, info.clientProfile);
    scfCli.sdkVersion = 'ServerlessFramework';
    return scfCli;
  }

  static getClientInfo(secretId, secretKey, token, region) {
    const cred = token
      ? new Credential(secretId, secretKey, token)
      : new Credential(secretId, secretKey);
    const httpProfile = new HttpProfile();
    httpProfile.reqTimeout = 60;
    const clientProfile = new ClientProfile('HmacSHA256', httpProfile);
    return {
      cred,
      region: region || 'ap-guangzhou',
      clientProfile,
    };
  }

  static getAppid(auth) {
    const secretId = auth.SecretId;
    const secretKey = auth.SecretKey;
    const cred = auth.token
      ? new Credential(secretId, secretKey, auth.token)
      : new Credential(secretId, secretKey);
    const httpProfile = new HttpProfile();
    httpProfile.reqTimeout = 30;
    const clientProfile = new ClientProfile('HmacSHA256', httpProfile);
    const cam = new UserInformationClient(cred, 'ap-guangzhou', clientProfile);
    const req = new GetUserInformationResponse();
    const body = {};
    req.fromJsonString(JSON.stringify(body));
    const params = cam.formatRequestData('GetUserAppId', cam.mergeData(req));
    let strParam = '';
    const keys = Object.keys(params);
    keys.sort();
    for (const key of Object.values(keys)) {
      const tempStr = key === 'Signature' ? encodeURIComponent(params[key]) : params[key];
      strParam += `&${key}=${tempStr}`;
    }
    return strParam;
  }

  static getAddr(auth, func, region = 'ap-guangzhou', timeout = 600) {
    const localScf = this.createScfClient(auth.SecretId, auth.SecretKey, auth.token, region);
    const req = new ScfModels.GetFunctionLogsRequest();
    const body = {
      FunctionName: func.functionName,
      Namespace: func.namespace || 'default',
      Qualifier: func.qualifier || '$LATEST',
    };
    req.fromJsonString(JSON.stringify(body));
    const baseUrl = 'ws://service-qwh371t8-1258344699.gz.apigw.tencentcs.com/release/websocket';
    const params = localScf.formatRequestData('GetFunctionLogs', localScf.mergeData(req));
    let strParam = '';
    const keys = Object.keys(params);
    keys.sort();
    for (const key of Object.values(keys)) {
      const tempStr = key === 'Signature' ? encodeURIComponent(params[key]) : params[key];
      strParam += `&${key}=${tempStr}`;
    }

    return `${baseUrl}?${strParam.slice(1)}&Timeout=${timeout}&AppidSignature=${encodeURIComponent(
      this.getAppid(auth)
    )}`;
  }
}

module.exports = ScfRealTimeLogs;
