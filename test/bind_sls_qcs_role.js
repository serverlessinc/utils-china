'use strict';

const { BindRole } = require('../sdk/cam/index').BindRole;

class Role {
  async bindSLSQCSRole() {
    try {
      const resp = await new BindRole({
        SecretId: '',
        SecretKey: '',
      }).bindQCSRole();
      console.log(resp);
    } catch (e) {
      console.log(e.toString());
    }
  }
}

const role = new Role();
role.bindSLSQCSRole();
