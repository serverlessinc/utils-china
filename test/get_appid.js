'use strict';

const { GetUserInformation } = require('../sdk/cam/index');

class UserInformation {
  async getUserInformation() {
    const userInformation = new GetUserInformation();
    const auth = {
      SecretId: '',
      SecretKey: '',
    };
    console.log(await userInformation.getUserInformation(auth));
  }
}

const getUserInformation = new UserInformation();
getUserInformation.getUserInformation();
