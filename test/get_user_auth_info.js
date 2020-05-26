'use strict';

const { GetUserAuthInfo } = require('../sdk/account/index');

class UserAuthInfo {
  async getUserAuth() {
    const getUserAuthInfo = new GetUserAuthInfo();
    const uin = 123456787890;
    console.log(await getUserAuthInfo.isAuth(uin));
  }
}

const userAuthInfo = new UserAuthInfo();
userAuthInfo.getUserAuth();
