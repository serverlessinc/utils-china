'use strict';

const protobuf = require('protobufjs');
const Sign = require('./sign');
const assert = require('assert');
const querystring = require('querystring');
// const util = require('util')
const http = require('http');

class Cls {
  constructor({ appid, secret_id: secretId, secret_key: secretKey, options }) {
    this.appid = appid;
    this.secretKey = secretKey;
    this.secretId = secretId;
    this.options = options;
    assert(secretKey, 'secret_key should not is empty');
    assert(secretId, 'secret_id should not is empty');
    assert(options, 'Options should not is empty');
    assert(options.region, 'Options region should not is empty');
    this.auth = new Sign(this.secretId, this.secretKey);
    this.host = `${options.region}.cls.myqcloud.com`;
  }

  doRequest(method, path, headers = {}, params = {}, data, cb) {
    method = method.toLocaleLowerCase();

    const sign = this.auth.sign(method, path, params, headers);
    headers.host = this.host;
    headers.Authorization = sign;

    if (this.options.token) {
      headers['x-cls-Token'] = this.options.token;
    }
    if (Object.keys(params).length) {
      path = `${path}?${querystring.stringify(params)}`;
    }

    const opt = {
      method,
      headers,
      hostname: this.host,
      path,
    };

    const clientObject = http.request(opt, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        cb(null, res, body);
      });
    });

    clientObject.on('error', (e) => {
      cb(e, null, null);
    });

    if (data) {
      clientObject.write(data);
    }

    clientObject.end();
  }

  structuredLog(topicId, logs, timestamp, filename, source) {
    const message = {
      logGroupList: [
        {
          logs: [
            {
              time: timestamp || Math.round(new Date().getTime() / 1000),
              contents: logs,
            },
          ],
          filename: filename || 'default',
          source: source || '',
        },
      ],
    };
    const self = this;
    return new Promise((resolve, reject) => {
      protobuf.load(`${__dirname}/logs.proto`, (err, root) => {
        if (err) {
          reject(err);
        }
        const pbLogGroup = root.lookupType('cls.LogGroupList');
        const errMsg = pbLogGroup.verify(message);
        if (errMsg) {
          reject(errMsg);
        }

        const log = pbLogGroup.create(message);
        const buffer = pbLogGroup.encode(log).finish();
        const params = {
          topic_id: topicId,
        };
        const headers = {
          'Content-Type': 'application/x-protobuf',
        };
        self.doRequest('post', '/structuredlog', headers, params, buffer, (error, res, body) => {
          if (error) {
            reject(error);
          }

          let response;
          if (
            body &&
            res.headers['content-type'] &&
            res.headers['content-type'].toLocaleLowerCase() === 'application/json'
          ) {
            response = JSON.parse(body);
          } else {
            response = body;
          }

          if (res.statusCode !== 200) {
            if (response && response.errorcode) {
              reject(response.errormessage);
            } else {
              reject(response);
            }
          }
          resolve(response);
        });
      });
    });
  }
}

module.exports = Cls;
