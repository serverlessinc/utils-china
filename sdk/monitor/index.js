'use strict';

const assert = require('assert');
const util = require('util');
const { monitor, common } = require('../../library');

const ClientProfile = common.ClientProfile;
const HttpProfile = common.HttpProfile;
const Credential = common.Credential;
const Client = monitor.v20180724.Client;
const Models = monitor.v20180724.Models;

class SlsMonitor {
  constructor({ appid, secret_id: secretId, secret_key: secretKey, options }) {
    this.appid = appid;
    this.secretKey = secretKey;
    this.secretId = secretId;
    this.options = options;
    assert(options, 'Options should not is empty');
    this._Client = SlsMonitor.createClient(secretId, secretKey, options);
  }

  static getCredential(secretId, secretKey, options) {
    const cred = options.token
      ? new Credential(secretId, secretKey, options.token)
      : new Credential(secretId, secretKey);
    const httpProfile = new HttpProfile();
    httpProfile.reqTimeout = 30;
    const clientProfile = new ClientProfile('HmacSHA256', httpProfile);
    assert(options.region, 'Region should not is empty');
    return {
      cred,
      region: options.region,
      clientProfile,
    };
  }

  static createClient(secretId, secretKey, options) {
    const info = SlsMonitor.getCredential(secretId, secretKey, options);
    const scfCli = new Client(info.cred, info.region, info.clientProfile);
    scfCli.sdkVersion = 'ServerlessFramework';
    return scfCli;
  }

  async _call(api, params) {
    const handler = util.promisify(this._Client[api].bind(this._Client));
    return handler(params);
  }

  async putMonitorData(metrics, instance, announceIp, timestamp) {
    assert(instance, 'instance should not is empty');

    const req = new Models.PutMonitorDataRequest();
    req.Metrics = metrics;
    req.AnnounceInstance = instance;
    if (announceIp) {
      req.AnnounceIp = announceIp;
    }
    if (timestamp) {
      req.AnnounceTimestamp = timestamp;
    }

    return this._call('PutMonitorData', req);
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
      'MemDuration',
    ];

    const result = {
      rangeStart: rangeTime.rangeStart,
      rangeEnd: rangeTime.rangeEnd,
      metrics: [],
    };

    const requestHandlers = [];
    for (let i = 0; i < metrics.length; i++) {
      const req = new Models.GetMonitorDataRequest();
      req.Namespace = 'qce/scf_v2';
      req.MetricName = metrics[i];
      req.Period = period;
      req.StartTime = rangeTime.rangeStart;
      req.EndTime = rangeTime.rangeEnd;
      req.Instances = [
        {
          Dimensions: [
            {
              Name: 'functionName',
              Value: funcName,
            },
            {
              Name: 'version',
              Value: version || '$latest',
            },
            {
              Name: 'namespace',
              Value: ns,
            },
          ],
        },
      ];
      requestHandlers.push(this._call('GetMonitorData', req));
    }
    return new Promise((resolve, reject) => {
      Promise.all(requestHandlers)
        .then((results) => {
          for (let i = 0; i < results.length; i++) {
            const response = results[i];
            const metric = {
              type: response.MetricName,
              title: response.MetricName,
              values: [],
              total: 0,
            };

            response.DataPoints[0].Timestamps.forEach((val, j) => {
              if (!metric.values[j]) {
                metric.values[j] = {
                  timestamp: val,
                };
              } else {
                metric.values[j].timestamp = val;
              }

              if (response.DataPoints[0].Values[j] != null) {
                metric.values[j].value = response.DataPoints[0].Values[j];
                metric.total = Math.round(metric.total + metric.values[j].value);
              }
            });
            result.metrics.push(metric);
          }
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = SlsMonitor;
