const { CamV2Client, CamClient } = require('../../library/tencent-cloud/client')
const { GetUserInformation } = require('./userInformation')
const http = require('http')

class BindRole {
  constructor(credentials = {}) {
    this.credentials = credentials
  }

  throwError(response) {
    if (JSON.stringify(response).includes('Error') || (response.code && response.code != 0)) {
      throw new Error(JSON.stringify(response))
    }
  }

  async sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

  async getOrUpdateBindRoleState(user, action) {
    const data = {
      user: user
    }
    const requestData = JSON.stringify(data)

    const options = {
      host: 'service-ocnymoks-1258344699.gz.apigw.tencentcs.com',
      port: '80',
      path: `/release/serverless/v2/role/bind/${action}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return new Promise(function(resolve, reject) {
      const req = http.request(options, function(res) {
        res.setEncoding('utf8')
        res.on('data', function(chunk) {
          resolve(JSON.parse(chunk))
        })
      })

      req.on('error', function(e) {
        reject(e.message)
      })

      // write data to request body
      req.write(requestData)

      req.end()
    })
  }

  async bindQCSRole() {
    try {
      // 获取appid
      const userInformation = new GetUserInformation()
      const { AppId } = await userInformation.getUserInformation(this.credentials)

      const haveRole = await this.getOrUpdateBindRoleState(AppId, 'search')
      // 请求后台，看用户是否绑定role
      if (!haveRole.error && !haveRole.message) {
        // 如果标记没有绑定role，则进行绑定
        // 此处将原有的同步改成异步
        await this.bindTCBQcsRole()
        await this.bindSCFQcsRole()
        await this.bindSLSQcsRole()
        // 完成之后进行进行回写
        await this.getOrUpdateBindRoleState(AppId, 'report')
      }
    } catch (e) {}
  }

  async bindSLSQcsRole() {
    await this.sleep(1000)
    if (this.credentials.Token || this.credentials.token) {
      await this.bindSLSQcsRoleV3()
    } else {
      await this.bindSLSQcsRoleV2()
    }
  }

  async bindSLSQcsRoleV2() {
    const roleName = 'SLS_QcsRole'
    const camClient = new CamV2Client(this.credentials)

    await camClient.request({
      Action: 'CreateRole',
      roleName: roleName,
      policyDocument: JSON.stringify({
        version: '2.0',
        statement: [
          {
            effect: 'allow',
            principal: {
              service: 'sls.cloud.tencent.com'
            },
            action: 'sts:AssumeRole'
          }
        ]
      })
    })

    this.throwError(
      await camClient.request({
        Action: 'AttachRolePolicies',
        roleName: roleName,
        'policyId.0': '219188',
        'policyId.1': '534122',
        'policyId.2': '4917788',
        'policyId.3': '29828213',
        'policyId.4': '16026171',
        'policyId.5': '219185',
        'policyId.6': '534788',
        'policyId.7': '186451',
        'policyId.8': '2851631',
        'policyId.9': '276210',
        'policyId.10': '32475945'
      })
    )
  }

  async bindSLSQcsRoleV3() {
    const roleName = 'SLS_QcsRole'
    const policyList = [
      '219188',
      '534122',
      '4917788',
      '29828213',
      '16026171',
      '219185',
      '534788',
      '186451',
      '2851631',
      '276210',
      '32475945'
    ]
    const camClient = new CamClient(this.credentials)

    await camClient.request({
      Action: 'CreateRole',
      Version: '2019-01-16',
      RoleName: roleName,
      PolicyDocument: JSON.stringify({
        version: '2.0',
        statement: [
          {
            effect: 'allow',
            principal: {
              service: 'sls.cloud.tencent.com'
            },
            action: 'sts:AssumeRole'
          }
        ]
      })
    })

    const timeList = []
    for (let i = 0; i < policyList.length; i++) {
      timeList.push(Date.now())
      if (timeList.length >= 3) {
        const diffTime = 1000 - (Date.now() - timeList[i - 2])
        if (diffTime > 0) {
          await this.sleep(diffTime + 50)
        }
      }

      this.throwError(
        await camClient.request({
          Action: 'AttachRolePolicy',
          Version: '2019-01-16',
          AttachRoleName: roleName,
          PolicyId: policyList[i]
        })
      )
    }
  }

  async bindSCFQcsRole() {
    const roleName = 'SCF_QcsRole'
    const camClient = new CamClient(this.credentials)

    await camClient.request({
      Action: 'CreateRole',
      Version: '2019-01-16',
      RoleName: roleName,
      PolicyDocument: JSON.stringify({
        version: '2.0',
        statement: [
          {
            effect: 'allow',
            principal: {
              service: 'scf.qcloud.com'
            },
            action: 'sts:AssumeRole'
          }
        ]
      })
    })

    this.throwError(
      await camClient.request({
        Action: 'AttachRolePolicy',
        Version: '2019-01-16',
        AttachRoleName: roleName,
        PolicyId: '28341895'
      })
    )
  }

  async bindTCBQcsRole() {
    const roleName = 'TCB_QcsRole'
    const camClient = new CamClient(this.credentials)

    await camClient.request({
      Action: 'CreateRole',
      Version: '2019-01-16',
      RoleName: roleName,
      PolicyDocument: JSON.stringify({
        version: '2.0',
        statement: [
          {
            effect: 'allow',
            principal: {
              service: ['tcb.cloud.tencent.com', 'scf.qcloud.com', 'sls.cloud.tencent.com']
            },
            action: 'sts:AssumeRole'
          }
        ]
      })
    })

    this.throwError(
      await camClient.request({
        Action: 'AttachRolePolicy',
        Version: '2019-01-16',
        AttachRoleName: roleName,
        PolicyId: '8825032'
      })
    )
  }
}

module.exports = {
  BindRole
}
