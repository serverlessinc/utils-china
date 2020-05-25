'use strict';

const { CamClient } = require('../../library/tencent-cloud/client');
const { GetUserInformation } = require('./userInformation');
const http = require('http');

class BindRole {
  constructor(credentials = {}) {
    this.credentials = {
      SecretId: credentials.SecretId,
      SecretKey: credentials.SecretKey,
    };
    if (credentials.token || credentials.Token) {
      this.credentials.token = credentials.token ? credentials.token : credentials.Token;
    }
  }

  async sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async getOrUpdateBindRoleState(user, action, role) {
    const data = {
      user,
      role,
    };
    const requestData = JSON.stringify(data);

    const options = {
      host: 'service-ocnymoks-1258344699.gz.apigw.tencentcs.com',
      port: '80',
      path: `/release/serverless/v2/role/bindv2/${action}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': requestData.length,
      },
    };

    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => {
          rawData += chunk;
        });
        res.on('end', () => {
          resolve(JSON.parse(rawData));
        });
      });

      req.on('error', (e) => {
        reject(e.message);
      });

      // write data to request body
      req.write(requestData);

      req.end();
    });
  }

  async bindQCSRole() {
    try {
      // 获取appid
      const userInformation = new GetUserInformation();
      const { AppId } = await userInformation.getUserInformation(this.credentials);

      const haveRole = await this.getOrUpdateBindRoleState(AppId, 'search');

      const attachRole = {};

      if (haveRole && !haveRole.error && haveRole.message) {
        for (const item of Object.keys(haveRole.message)) {
          const roleName = item;
          const rolePolicy = haveRole.message[roleName];
          if (rolePolicy.policy && rolePolicy.policy.length > 0) {
            const tempList = [];

            // 创建role，可以失败
            const camClient = new CamClient(this.credentials);

            await camClient.request({
              Action: 'CreateRole',
              Version: '2019-01-16',
              RoleName: roleName,
              PolicyDocument: rolePolicy.policyDocument,
            });

            // 绑定策略
            for (let i = 0; i < rolePolicy.policy.length; i++) {
              const result = await camClient.request({
                Action: 'AttachRolePolicy',
                Version: '2019-01-16',
                AttachRoleName: roleName,
                PolicyId: rolePolicy.policy[i],
              });
              if (!JSON.stringify(result).includes('Error')) {
                tempList.push(rolePolicy.policy[i]);
              }
              await this.sleep(450);
            }
            attachRole[roleName] = tempList;
          }
        }
        await this.getOrUpdateBindRoleState(AppId, 'report', JSON.stringify(attachRole));
      }
    } catch (e) {
      // Ignore
    }
  }
}

module.exports = {
  BindRole,
};
