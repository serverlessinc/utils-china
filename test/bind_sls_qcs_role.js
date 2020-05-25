'use strict';

const { BindRole } = require('../sdk/cam/index').BindRole;

class Role {
  async bindSLSQCSRole() {
    await new BindRole({
      SecretId: '',
      SecretKey: '',
    }).bindSLSQcsRole();
  }
}

const role = new Role();
role.bindSLSQCSRole();
