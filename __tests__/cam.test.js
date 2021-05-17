'use strict';

const cam = require('../sdk/cam');

describe('cam', () => {
  test('GetUserInformation', async () => {
    const client = new cam.GetUserInformation();
    const res = await client.getUserInformation({
      SecretId: process.env.TENCENT_SECRET_ID,
      SecretKey: process.env.TENCENT_SECRET_KEY,
    });

    expect(res).toEqual({
      RequestId: expect.any(String),
      OwnerUin: process.env.TENCENT_UIN,
      Uin: process.env.TENCENT_UIN,
      AppId: +process.env.TENCENT_APP_ID,
    });
  });

  test('BindRole', async () => {
    const client = new cam.BindRole.BindRole({
      SecretId: process.env.TENCENT_SECRET_ID,
      SecretKey: process.env.TENCENT_SECRET_KEY,
    });
    const resp = await client.bindQCSRole();
    expect(resp).toBeNull();
  });
});
