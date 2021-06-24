'use strict';

const Serverless = require('../sdk/serverless');
const { getType } = require('../sdk/utils');

describe('serverless', () => {
  const appId = process.env.TENCENT_APP_ID;
  const sls = new Serverless({
    appid: appId,
    secret_id: process.env.TENCENT_SECRET_ID,
    secret_key: process.env.TENCENT_SECRET_KEY,
    options: {
      region: 'ap-guangzhou',
      traceId: '1234567890',
    },
  });

  test('listComponents', async () => {
    const res = await Serverless.listComponents({ isFeatured: true });
    expect(getType(res.Body)).toBe('String');
    expect(getType(res.RequestId)).toBe('String');
    expect(JSON.parse(res.Body).body).toBeDefined();
  });

  test('getComponentAndVersions', async () => {
    const res = await Serverless.getComponentAndVersions('asw');
    expect(getType(res.Body)).toBe('String');
    expect(getType(res.RequestId)).toBe('String');
    expect(JSON.parse(res.Body).body).toBeDefined();
  });

  test('[ap-shanghai] getComponentAndVersions', async () => {
    const res = await Serverless.getComponentAndVersions('asw', {
      region: 'ap-shanghai',
    });
    expect(getType(res.Body)).toBe('String');
    expect(getType(res.RequestId)).toBe('String');
    expect(JSON.parse(res.Body).body).toBeDefined();
  });

  test('listInstances', async () => {
    const res = await sls.listInstances({
      orgUid: appId,
      orgName: appId,
    });
    expect(getType(res.Body)).toBe('String');
    expect(getType(res.RequestId)).toBe('String');
    expect(JSON.parse(res.Body).body).toBeDefined();
  });

  test('getInstance', async () => {
    const res = await sls.getInstance({
      appName: 'appDemo',
      stageName: 'dev',
      instanceName: 'wordpressDemo',
    });
    expect(getType(res.Body)).toBe('String');
    expect(getType(res.RequestId)).toBe('String');
    expect(JSON.parse(res.Body).body).toBeDefined();
  });

  test('getUploadUrls', async () => {
    const res = await sls.getUploadUrls({
      orgUid: appId,
      orgName: appId,
    });
    expect(getType(res.Body)).toBe('String');
    expect(getType(res.RequestId)).toBe('String');
    expect(JSON.parse(res.Body).body).toBeDefined();
  });

  test('getCacheFileUrls', async () => {
    const res = await sls.getCacheFileUrls({
      orgUid: appId,
      appName: 'appDemo',
      stageName: 'dev',
      instanceName: 'wordpressDemo',
    });
    expect(getType(res.Body)).toBe('String');
    expect(getType(res.RequestId)).toBe('String');
    expect(JSON.parse(res.Body).body).toBeDefined();
  });

  test('pushEvents', async () => {
    const res = await sls.pushEvents({
      event: 'action.fail',
    });
    expect(getType(res.Body)).toBe('String');
    expect(getType(res.RequestId)).toBe('String');
    expect(JSON.parse(res.Body).body).toBeDefined();
  });
});
