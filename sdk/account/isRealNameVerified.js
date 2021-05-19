'use strict';

const { Capi } = require('@tencent-sdk/capi');

async function isRealNameVerified({ secretId, secretKey, token }) {
  const client = new Capi({
    debug: false,
    host: 'account.tencentcloudapi.com',
    Version: '2018-12-25',
    Region: 'ap-guangzhou',
    SecretId: secretId,
    SecretKey: secretKey,
    Token: token,
    ServiceType: 'account',
  });
  try {
    const { Response } = await client.request({
      Action: 'GetAuthStatus',
    });
    return Number(Response.Status) === 3;
  } catch (e) {
    console.log(e);
    // no op
  }
  return false;
}

module.exports = isRealNameVerified;
