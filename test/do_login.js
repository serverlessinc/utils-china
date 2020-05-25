'use strict';

const Login = require('../sdk/login');

class DoLogin {
  async login() {
    const login = new Login();
    const tencentCredentials = await login.login();
    console.log(tencentCredentials);
  }
}

const tencentLogin = new DoLogin();
tencentLogin.login();
