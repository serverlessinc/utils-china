'use strict';

const { CamClient } = require('../../library/tencent-cloud/client');
const { GetUserInformation } = require('./userInformation');
const http = require('http');
const { checkEnvUrl } = require('../utils');

const apiBaseUrl = 'service-ocnymoks-1258344699.gz.apigw.tencentcs.com';
const devApiBaseUrl = 'service-ed5xtaob-1258344699.sh.apigw.tencentcs.com';

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

  async getOrUpdateBindRoleState(user, action, roleoptions = {}) {
    const data = {
      user,
      role: roleoptions.role,
      error: roleoptions.error,
      Force: roleoptions.forceBind,
    };
    const requestData = JSON.stringify(data);

    const options = {
      host: checkEnvUrl(apiBaseUrl, devApiBaseUrl),
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

  async report(AppId, attachRole, errorMsg) {
    if (Object.keys(errorMsg).length) {
      await this.getOrUpdateBindRoleState(AppId, 'report', {
        role: JSON.stringify(attachRole),
        error: JSON.stringify(errorMsg),
      });
    } else {
      await this.getOrUpdateBindRoleState(AppId, 'report', {
        role: JSON.stringify(attachRole),
      });
    }
  }

  async bindQCSRole(option = { forceBind: false }) {
    const force = option.forceBind;
    try {
      // 获取appid
      const userInformation = new GetUserInformation();
      const { AppId } = await userInformation.getUserInformation(this.credentials);

      const haveRole = await this.getOrUpdateBindRoleState(AppId, 'search', { forceBind: force });
      const attachRole = {};

      let changeFlag = false;
      if (haveRole && !haveRole.error && haveRole.message) {
        // 创建role，可以失败
        const camClient = new CamClient(this.credentials);
        const errorMsg = {};

        for (const item of Object.keys(haveRole.message)) {
          const roleName = item;
          const rolePolicy = haveRole.message[item];
          if (rolePolicy.policy && rolePolicy.policy.length > 0) {
            // 可重入的创建Role
            try {
              const response = await camClient.request({
                Action: 'CreateRole',
                Version: '2019-01-16',
                RoleName: roleName,
                PolicyDocument: rolePolicy.policyDocument,
              });
              if (response.Response.Error) {
                // 创建Role失败
                if (response.Response.Error.Code === 'InvalidParameter.RoleNameInUse') {
                  // 讲道理这里应该更新一下Role的信息，确保Role的载体是正确的
                  // Role已经存在，忽略这个错误
                } else {
                  // Role不存在
                  let msg = `${response.Response.Error.Code}:${response.Response.Error.Message} (${response.Response.RequestId})`;
                  errorMsg[roleName] = { msg };
                  if (force) {
                    // 如果是没有权限的话
                    if (response.Response.Error.Code === 'AuthFailure.UnauthorizedOperation') {
                      msg =
                        '角色创建失败，当前账号缺少创建角色权限，请联系主账号通过 `sls bind role` 指令完成角色创建与绑定';
                    } else {
                      msg = `角色创建失败，原因:(${response.Response.Error.Message})`;
                    }

                    // 如果是强制绑定的话，需要中断流程，上报错误，并且将错误信息返回
                    await this.report(AppId, attachRole, errorMsg);
                    return msg;
                  }
                }
              } else {
                // 没有错误的情况下，说明Role有变化
                changeFlag = true;
              }
            } catch (e) {
              const msg = e.toString();
              errorMsg[roleName] = { msg };
              if (force) {
                // 如果是强制绑定的话，需要中断流程，上报错误，并且将错误信息返回
                await this.report(AppId, attachRole, errorMsg);
                return msg;
              }
            }

            // 可重入批量绑定策略
            try {
              const response = await camClient.request({
                Action: 'AttachRolePolicies',
                Version: '2019-01-16',
                RoleName: roleName,
                PolicyId: rolePolicy.policy,
              });
              if (response.Response.Error) {
                let msg = `${response.Response.Error.Code}:${response.Response.Error.Message} (${response.Response.RequestId})`;
                if (!errorMsg[roleName]) {
                  errorMsg[roleName] = {};
                }
                errorMsg[roleName].policys = { msg };
                if (force) {
                  await this.report(AppId, attachRole, errorMsg);
                  // 如果是没有权限的话
                  if (response.Response.Error.Message.includes('has no permission')) {
                    msg =
                      '策略绑定失败，当前账号缺少策略绑定权限，请联系主账号通过 `sls bind role` 指令完成角色创建与绑定';
                  } else {
                    msg = `策略绑定失败，原因:(${response.Response.Error.Message})`;
                  }
                  return msg;
                }
              } else {
                // 没有错误的情况下，说明Role的策略有变化
                changeFlag = true;
                attachRole[roleName] = rolePolicy.policy;
              }
            } catch (e) {
              const msg = e.toString();
              if (!errorMsg[roleName]) {
                errorMsg[roleName] = {};
              }
              errorMsg[roleName].policys = { msg };
              if (force) {
                // 如果是强制绑定的话，需要中断流程，上报错误，并且将错误信息返回
                await this.report(AppId, attachRole, errorMsg);
                // todo
                return `服务处理出错，请稍后重试。若无法解决，请联系智能客服或提交工单(${msg})。`;
              }
            }

            // 由于腾讯云API qps限制，这里需要sleep一下不然会报错
            // RequestLimitExceeded:Your current request times equals to `3` in a second, which exceeds the frequency limit `2` for a second. Please reduce the frequency of calls
            await this.sleep(900);
          }
        }
        await this.report(AppId, attachRole, errorMsg);
        // wait for cam server take effect
        if (changeFlag) {
          await this.sleep(3000);
        }
      }
    } catch (e) {
      if (force) {
        return e.toString();
      }
    }
    return null;
  }

  async forceBindQCSRole() {
    const response = await this.bindQCSRole({ forceBind: true });
    if (response != null) {
      throw new Error(response);
    }
  }
}

module.exports = {
  BindRole,
};
