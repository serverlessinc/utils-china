'use strict';

const account = require('../sdk/account');

describe('account', () => {
  test('GetUserAuthInfo', async () => {
    const getUserAuthInfo = new account.GetUserAuthInfo();
    const res = await getUserAuthInfo.isAuth(process.env.TENCENT_UIN);

    expect(res).toEqual({
      RequestId: expect.any(String),
      Error: false,
      Message: { Authentication: '1', Action: false },
    });
  });
  test('isRealNameVerified', async () => {
    const res = await account.isRealNameVerified({
      secretId: process.env.TENCENT_SECRET_ID,
      secretKey: process.env.TENCENT_SECRET_KEY,
    });
    expect(res).toBe(true);
  });
});
