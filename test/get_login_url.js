'use strict';

const Login = require('../sdk/login');

class DoLogin {
  async getUrl() {
    const login = new Login();
    console.log(await login.loginUrl());
  }

  async getResult() {
    const login = new Login();
    const uuid = 'a8e6e567-d86b-41e4-bbbe-27eaf6dba8d5';
    const loginStatusUrl =
      '/login/status?uuid=a8e6e567-d86b-41e4-bbbe-27eaf6dba8d5&os=Darwin&expired=1576752024&signature=93addc910b5d998d75a76f8ac9d772e9';
    console.log(await login.checkStatus(uuid, loginStatusUrl));
  }
}

const tencentLogin = new DoLogin();
tencentLogin.getUrl();
// tencentLogin.getResult()
