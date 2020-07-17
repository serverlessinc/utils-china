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

  async getOrUpdateBindRoleState(user, action, role, error) {
    const data = {
      user,
      role,
      error,
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

      let changeFlag = false;
      if (haveRole && !haveRole.error && haveRole.message) {
        // 创建role，可以失败
        const camClient = new CamClient(this.credentials);

        const errorMsg = {};
        for (const item of Object.keys(haveRole.message)) {
          const roleName = item;
          const rolePolicy = haveRole.message[roleName];
          if (rolePolicy.policy && rolePolicy.policy.length > 0) {
            const tempList = [];
            changeFlag = true;

            try {
              const response = await camClient.request({
                Action: 'CreateRole',
                Version: '2019-01-16',
                RoleName: roleName,
                PolicyDocument: rolePolicy.policyDocument,
              });
              if (response.Response.Error) {
                errorMsg[roleName] = {
                  msg: `${response.Response.Error.Code}:${response.Response.Error.Message}`,
                };
              }
            } catch (e) {
              errorMsg[roleName] = {
                msg: e.toString(),
              };
            }

            // 绑定策略
            for (let i = 0; i < rolePolicy.policy.length; i++) {
              try {
                const result = await camClient.request({
                  Action: 'AttachRolePolicy',
                  Version: '2019-01-16',
                  AttachRoleName: roleName,
                  PolicyId: rolePolicy.policy[i],
                });
                if (result.Response.Error) {
                  if (!errorMsg[roleName]) {
                    errorMsg[roleName] = {};
                  }
                  errorMsg[roleName][rolePolicy.policy[i]] = {
                    msg: `${result.Response.Error.Code}:${result.Response.Error.Message}`,
                  };
                }
                if (!JSON.stringify(result).includes('Error')) {
                  tempList.push(rolePolicy.policy[i]);
                }
                await this.sleep(450);
              } catch (e) {
                if (!errorMsg[roleName]) {
                  errorMsg[roleName] = {};
                }
                errorMsg[roleName][rolePolicy.policy[i]] = {
                  msg: e.toString(),
                };
              }
            }
            attachRole[roleName] = tempList;
          }
        }
        if (Object.keys(errorMsg).length) {
          await this.getOrUpdateBindRoleState(
            AppId,
            'report',
            JSON.stringify(attachRole),
            JSON.stringify(errorMsg)
          );
        } else {
          await this.getOrUpdateBindRoleState(AppId, 'report', JSON.stringify(attachRole));
        }
        // wait for cam server take effect
        if (changeFlag) {
          await this.sleep(3000);
        }
      }
    } catch (e) {
      // Ignore
    }
  }
}

module.exports = {
  BindRole,
};
