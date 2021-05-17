const querystring = require('querystring');
const Login = require('../sdk/login');

describe('login', () => {
  const client = new Login();
  let loginInfo = null;

  test.skip('login', async () => {
    const login = new Login();
    const res = await login.login();

    expect(res).toEqual({
      secret_id: expect.any(String),
      secret_key: expect.any(String),
      token: expect.any(String),
      appid: process.env.TENCENT_APP_ID,
      signature: expect.any(String),
      expired: expect.any(String),
      uuid: expect.any(String),
    });
  });

  test('loginUrl', async () => {
    const res = await client.loginUrl();

    expect(res).toEqual({
      login_status_url: expect.stringContaining('/login/status?'),
      uuid: expect.any(String),
      url: expect.stringContaining('https://cloud.tencent.com/open/authorize?'),
      short_url: expect.stringContaining('https://slslogin.qcloud.com/'),
    });

    loginInfo = res;
  });

  test('flush', async () => {
    const loginStatusInfo = querystring.parse(
      loginInfo.login_status_url.replace('/login/status?', '')
    );
    const loginUrlInfo = querystring.parse(loginInfo.url);
    const res = await client.flush(
      loginInfo.uuid,
      loginStatusInfo.expired,
      loginStatusInfo.signature,
      loginUrlInfo.app_id
    );

    expect(res).toEqual(false);
  });
});
