'use strict';

const got = require('got');
const os = require('os');
const { checkEnvUrl } = require('../utils');

const apiBaseUrl = 'service-ocnymoks-1258344699.gz.apigw.tencentcs.com';
const devApiBaseUrl = 'service-ed5xtaob-1258344699.sh.apigw.tencentcs.com';

class GetUserAuthInfo {
  async isAuth(ownerUin, inputs = {}) {
    const data = {
      uin: ownerUin,
      os_platform: os.platform(),
      os_release: os.release(),
      os_type: os.type(),
      client: inputs.client,
      remark: inputs.remark,
      pid: process.pid,
      project: inputs.project,
    };

    const url = `https://${checkEnvUrl(apiBaseUrl, devApiBaseUrl)}/release/getUserAuthInfo`;
    const { body } = await got.post(url, {
      json: data,
      responseType: 'json',
    });

    return body;
  }
}

module.exports = {
  GetUserAuthInfo,
};
