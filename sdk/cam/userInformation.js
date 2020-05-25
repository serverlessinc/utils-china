'use strict';

const util = require('util');

const { common } = require('../../library');
const AbstractModel = require('../../library/common/abstract_model');
const AbstractClient = require('../../library/common/abstract_client');

const CamCredential = common.Credential;
const { ClientProfile, HttpProfile } = common;

class GetUserInformationResponse extends AbstractModel {
  constructor() {
    super();

    this.RequestId = null;
  }

  deserialize(params) {
    if (!params) {
      return;
    }
    this.OwnerUin = 'OwnerUin' in params ? params.OwnerUin : null;
    this.Uin = 'Uin' in params ? params.Uin : null;
    this.AppId = 'AppId' in params ? params.AppId : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

class UserInformationClient extends AbstractClient {
  constructor(credential, region, profile) {
    super('cam.tencentcloudapi.com', '2019-01-16', credential, region, profile);
  }

  GetUserAppId(req, cb) {
    const resp = new GetUserInformationResponse();
    this.request('GetUserAppId', req, resp, cb);
  }
}

class GetUserInformation {
  async getUserInformation(credentials) {
    const secretId = credentials.SecretId;
    const secretKey = credentials.SecretKey;
    const cred = credentials.token
      ? new CamCredential(secretId, secretKey, credentials.token)
      : new CamCredential(secretId, secretKey);
    const httpProfile = new HttpProfile();
    httpProfile.reqTimeout = 30;
    const clientProfile = new ClientProfile('HmacSHA256', httpProfile);
    const cam = new UserInformationClient(cred, 'ap-guangzhou', clientProfile);
    const req = new GetUserInformationResponse();
    const body = {};
    req.fromJsonString(JSON.stringify(body));
    const handler = util.promisify(cam.GetUserAppId.bind(cam));
    try {
      return handler(req);
    } catch (e) {
      throw new Error('Get Appid failed!');
    }
  }
}

module.exports = {
  GetUserInformationResponse,
  UserInformationClient,
  GetUserInformation,
};
