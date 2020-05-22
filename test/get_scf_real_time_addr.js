'use strict'

const tencentCloudTools = require('../../serverless-tencent-tools')

const scfRealTimeLogs = tencentCloudTools.Logs.ScfRealTimeLogs
const region = 'ap-guangzhou'
const auth = {
  SecretId: '****',
  SecretKey: '****'
}
const func = {
  functionName: 'course'
}
console.log(scfRealTimeLogs.getAddr(auth, func, region))
