const { CamV2Client, CamClient } = require('../../library/tencent-cloud/client')

class BindRole {
  constructor(credentials = {}) {
    this.credentials = credentials
  }

  async sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

  async bindSLSQcsRole() {
    if (this.credentials.Token || this.credentials.token) {
      await this.bindSLSQcsRoleV3()
    } else {
      await this.bindSLSQcsRoleV2()
    }
  }

  async bindSCFQcsRole() {
    if (this.credentials.Token || this.credentials.token) {
      await this.bindSCFQcsRoleV3()
    } else {
      await this.bindSCFQcsRoleV2()
    }
  }

  async bindSLSQcsRoleV2() {
    const roleName = 'SLS_QcsRole'
    const camClient = new CamV2Client(this.credentials)
    try {
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
    } catch (e) {}

    try {
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
    } catch (e) {}
  }

  async bindSCFQcsRoleV2() {
    const roleName = 'SCF_QcsRole'
    const camClient = new CamV2Client(this.credentials)
    try {
      await camClient.request({
        Action: 'CreateRole',
        roleName: roleName,
        policyDocument: JSON.stringify({
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
    } catch (e) {}

    try {
      await camClient.request({
        Action: 'AttachRolePolicies',
        roleName: roleName,
        'policyId.0': '28341895'
      })
    } catch (e) {}
  }

  async bindSLSQcsRoleV3() {
    const roleName = 'SLS_QcsRole'
    const camClient = new CamClient(this.credentials)
    try {
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
    } catch (e) {}

    const time = Date.now()
    const handlers = []
    try {
      handlers.push(
        camClient.request({
          Action: 'AttachRolePolicy',
          Version: '2019-01-16',
          AttachRoleName: roleName,
          PolicyName: 'QcloudAPIGWFullAccess'
        })
      )
      handlers.push(
        camClient.request({
          Action: 'AttachRolePolicy',
          Version: '2019-01-16',
          AttachRoleName: roleName,
          PolicyName: 'QcloudSCFFullAccess'
        })
      )
      await Promise.all(handlers)
    } catch (e) {}

    while (true) {
      if (Date.now() - time >= 1100) {
        break
      }
      await this.sleep(50)
    }

    try {
      await camClient.request({
        Action: 'AttachRolePolicy',
        Version: '2019-01-16',
        AttachRoleName: roleName,
        PolicyName: 'QcloudCOSFullAccess'
      })
    } catch (e) {}
  }

  async bindSCFQcsRoleV3() {
    const roleName = 'SCF_QcsRole'
    const camClient = new CamClient(this.credentials)
    try {
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
    } catch (e) {}

    try {
      await camClient.request({
        Action: 'AttachRolePolicy',
        Version: '2019-01-16',
        AttachRoleName: roleName,
        PolicyId: '28341895'
      })
    } catch (e) {}
  }
}

module.exports = {
  BindRole
}
