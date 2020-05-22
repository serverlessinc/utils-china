'use strict'

const Login = require('../sdk/login')

class doLogin {
  async login() {
    const login = new Login()
    const tencent_credentials = await login.login()
    console.log(tencent_credentials)
  }
}

const tencentLogin = new doLogin()
tencentLogin.login()
