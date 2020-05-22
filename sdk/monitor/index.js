const assert = require('assert')
const util = require('util')
const { monitor, common } = require('../../library')
const ClientProfile = common.ClientProfile
const HttpProfile = common.HttpProfile
const Credential = common.Credential
const Client = monitor.v20180724.Client
const Models = monitor.v20180724.Models

class SlsMonitor {
  constructor({ appid, secret_id, secret_key, options }) {
    this.appid = appid
    this.secretKey = secret_key
    this.secretId = secret_id
    this.options = options
    assert(options, 'Options should not is empty')
    this._Client = SlsMonitor.createClient(secret_id, secret_key, options)
  }

  static getCredential(secret_id, secret_key, options) {
    const cred = options.token
      ? new Credential(secret_id, secret_key, options.token)
      : new Credential(secret_id, secret_key)
    const httpProfile = new HttpProfile()
    httpProfile.reqTimeout = 30
    const clientProfile = new ClientProfile('HmacSHA256', httpProfile)
    assert(options.region, 'Region should not is empty')
    return {
      cred: cred,
      region: options.region,
      clientProfile: clientProfile
    }
  }

  static createClient(secret_id, secret_key, options) {
    const info = SlsMonitor.getCredential(secret_id, secret_key, options)
    const scfCli = new Client(info.cred, info.region, info.clientProfile)
    scfCli.sdkVersion = 'ServerlessFramework'
    return scfCli
  }

  async _call(api, params) {
    const handler = util.promisify(this._Client[api].bind(this._Client))
    return handler(params)
  }

  async getScfMetrics(region, rangeTime, period, funcName, ns, version) {
    const metrics = [
      'Duration',
      'Invocation',
      'Error',
      'ConcurrentExecutions',
      'ConfigMem',
      'FunctionErrorPercentage',
      'Http2xx',
      'Http432',
      'Http433',
      'Http434',
      'Http4xx',
      'Mem',
      'MemDuration'
    ]

    const result = {
      rangeStart: rangeTime.rangeStart,
      rangeEnd: rangeTime.rangeEnd,
      metrics: []
    }

    const requestHandlers = []
    for (var i = 0; i < metrics.length; i++) {
      const req = new Models.GetMonitorDataRequest()
      req.Namespace = 'qce/scf_v2'
      req.MetricName = metrics[i]
      req.Period = period
      req.StartTime = rangeTime.rangeStart
      req.EndTime = rangeTime.rangeEnd
      req.Instances = [
        {
          Dimensions: [
            {
              Name: 'functionName',
              Value: funcName
            },
            {
              Name: 'version',
              Value: version || '$latest'
            },
            {
              Name: 'namespace',
              Value: ns
            }
          ]
        }
      ]
      requestHandlers.push(this._call('GetMonitorData', req))
    }
    return new Promise((resolve, reject) => {
      Promise.all(requestHandlers)
        .then((results) => {
          for (var i = 0; i < results.length; i++) {
            const response = results[i]
            const metric = {
              type: response.MetricName,
              title: response.MetricName,
              values: [],
              total: 0
            }

            response.DataPoints[0].Timestamps.forEach((val, i) => {
              if (!metric.values[i]) {
                metric.values[i] = {
                  timestamp: val
                }
              } else {
                metric.values[i].timestamp = val
              }

              if (response.DataPoints[0].Values[i] != undefined) {
                metric.values[i].value = response.DataPoints[0].Values[i]
                metric.total = Math.round(metric.total + metric.values[i].value)
              }
            })
            result.metrics.push(metric)
          }
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

module.exports = SlsMonitor
