'use strict';

const Login = require('../sdk/login');

class DoLogin {
  async flush() {
    const login = new Login();
    const uuid = '*********';
    const expired = 1576744591;
    const signature = '*********';
    const appid = 1253970226;
    const tencentCredentials = await login.flush(uuid, expired, signature, appid);
    console.log(tencentCredentials);
  }
}

const tencentLogin = new DoLogin();
tencentLogin.flush();
