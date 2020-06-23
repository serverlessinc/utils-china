'use strict';

const TencentCloudSDKHttpException = require('./exception/tencent_cloud_sdk_exception');
const crypto = require('crypto');
const assert = require('assert');

const objhasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * @inner
 */
class Sign {
  static sign(secretKey, signStr, signMethod) {
    const signMethodMap = {
      HmacSHA1: 'sha1',
      HmacSHA256: 'sha256',
    };

    if (!objhasOwnProperty.call(signMethodMap, signMethod)) {
      throw new TencentCloudSDKHttpException(
        'signMethod invalid, signMethod only support (HmacSHA1, HmacSHA256)'
      );
    }
    assert(secretKey, 'secretKey is required');
    const hmac = crypto.createHmac(signMethodMap[signMethod], secretKey);
    return hmac.update(Buffer.from(signStr, 'utf8')).digest('base64');
  }
}
module.exports = Sign;
