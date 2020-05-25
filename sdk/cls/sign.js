'use strict';

const util = require('util');
const querystring = require('querystring');
const crypto = require('crypto');

class ClsSign {
  constructor(secretId, secretKey) {
    this.secretId = secretId;
    this.secretKey = secretKey;
  }

  sign(method, path, params = {}, headers = {}) {
    const encrypt = (algorithm, content) => {
      const hash = crypto.createHash(algorithm);
      hash.update(content);
      return hash.digest('hex');
    };

    const hmacSha1 = (text, key) => {
      return crypto.createHmac('sha1', key).update(text).digest('hex');
    };

    const headerKeys = Object.keys(headers).sort();
    const orderHeaders = [];
    for (const key of headerKeys) {
      orderHeaders.push(
        util.format('%s=%s', key.toLocaleLowerCase(), querystring.escape(headers[key]))
      );
    }

    const paramKeys = Object.keys(params).sort();
    const orderParams = [];
    for (const key of paramKeys) {
      orderParams.push(
        util.format('%s=%s', key.toLocaleLowerCase(), querystring.escape(params[key]))
      );
    }
    const signRawString = util.format(
      '%s\n%s\n%s\n%s\n',
      method.toLocaleLowerCase(),
      path,
      orderParams.join('&'),
      orderHeaders.join('&')
    );

    const timestamp = Math.round(new Date().getTime() / 1000);
    const signTime = util.format('%s;%s', timestamp - 10, timestamp + 30 * 60);

    const signString = util.format('sha1\n%s\n%s\n', signTime, encrypt('sha1', signRawString));

    const signValue = hmacSha1(signString, hmacSha1(signTime, this.secretKey));

    const tmpHeaderKeys = headerKeys.map((item) => {
      return item.toLocaleLowerCase();
    });
    const tmpParamKeys = paramKeys.map((item) => {
      return item.toLocaleLowerCase();
    });

    return util.format(
      'q-sign-algorithm=sha1&q-ak=%s&q-sign-time=%s&q-key-time=%s&q-header-list=%s&q-url-param-list=%s&q-signature=%s',
      this.secretId,
      signTime,
      signTime,
      tmpHeaderKeys.join(';'),
      tmpParamKeys.join(';'),
      signValue
    );
  }
}

module.exports = ClsSign;
