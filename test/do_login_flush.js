'use strict'

const Login = require('../sdk/login')

class doLogin {
  async flush() {
    const login = new Login()
    const uuid = '*********'
    const expired = 1576744591
    const signature = '*********'
    const appid = 1253970226
    const tencent_credentials = await login.flush(uuid, expired, signature, appid)
    console.log(tencent_credentials)
  }
}

const tencentLogin = new doLogin()
tencentLogin.flush()
