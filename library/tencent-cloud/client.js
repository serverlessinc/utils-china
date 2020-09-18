'use strict';

const assign = Object.assign;
const qs = require('querystring');
const dotQs = require('dot-qs');
const crypto = require('crypto');
const https = require('https');
const assert = require('assert');

const defaults = {
  signatureMethod: 'HmacSHA1',
  method: 'GET',
  Region: 'ap-guangzhou',
  protocol: 'https',
};

class TencentCloudClient {
  constructor(credentials = {}, service = {}) {
    this.credentials = {
      SecretId: credentials.SecretId,
      SecretKey: credentials.SecretKey,
    };
    if (credentials.token || credentials.Token) {
      this.credentials.Token = credentials.token ? credentials.token : credentials.Token;
    }
    this.service = service;
  }

  async cloudApiGenerateQueryString(data) {
    let param = assign(
      {
        Region: defaults.Region,
        SecretId: this.credentials.SecretId,
        Timestamp: Math.round(Date.now() / 1000),
        Nonce: Math.round(Math.random() * 65535),
        RequestClient: 'ServerlessFramework',
      },
      data
    );
    const token = this.credentials.token || this.credentials.Token;
    if (token) {
      param.Token = token;
    }
    if (this.credentials.token) {
      param.token = this.credentials.token;
    }
    param.SignatureMethod = defaults.signatureMethod;
    param = dotQs.flatten(param);
    const { host, path } = this.service;
    const keys = Object.keys(param);
    let qstr = '';
    keys.sort();
    keys.forEach((key) => {
      let val = param[key];
      if (key === '') {
        return;
      }
      if (val === undefined || val === null || (typeof val === 'number' && isNaN(val))) {
        val = '';
      }
      qstr += `&${key.indexOf('_') ? key.replace(/_/g, '.') : key}=${val}`;
    });

    qstr = qstr.slice(1);

    assert(this.credentials.SecretKey, 'SecretKey is required');
    const hmac = crypto.createHmac('sha1', this.credentials.SecretKey);
    param.Signature = hmac
      .update(Buffer.from(`${defaults.method.toUpperCase() + host + path}?${qstr}`, 'utf8'))
      .digest('base64');

    return qs.stringify(param);
  }

  async doCloudApiRequest(data) {
    const httpBody = await this.cloudApiGenerateQueryString(data);

    const options = {
      hostname: this.service.host,
      path: `${this.service.path}?${httpBody}`,
    };
    return new Promise((resolve, reject) => {
      const req = https.get(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          resolve(JSON.parse(chunk));
        });
      });
      req.on('error', (e) => {
        reject(e.message);
      });
      // req.write(httpBody)
      req.end();
    });

    // const url = `https://${this.service.host}${this.service.path}?${httpBody}`
    // return new Promise(function(resolve, rejecte) {
    // 	request(
    // 		{
    // 			url: url,
    // 			method: 'GET'
    // 		},
    // 		function(error, response, body) {
    // 			if (!error && response.statusCode == 200) {
    // 				resolve(JSON.parse(body))
    // 			}
    // 			rejecte(error)
    // 		}
    // 	)
    // })
  }
}

class ScfClient {
  constructor(credentials = {}) {
    this.credentials = credentials;
  }

  async request(data) {
    return await new TencentCloudClient(this.credentials, {
      host: 'scf.tencentcloudapi.com',
      path: '/',
    }).doCloudApiRequest(data);
  }
}

class TagClient {
  constructor(credentials = {}) {
    this.credentials = credentials;
  }

  async request(data) {
    return await new TencentCloudClient(this.credentials, {
      host: 'tag.tencentcloudapi.com',
      path: '/',
    }).doCloudApiRequest(data);
  }
}

class ApigwClient {
  constructor(credentials = {}) {
    this.credentials = credentials;
  }

  async request(data) {
    return await new TencentCloudClient(this.credentials, {
      host: 'apigateway.api.qcloud.com',
      path: '/v2/index.php',
    }).doCloudApiRequest(data);
  }
}

class CamClient {
  constructor(credentials = {}) {
    this.credentials = credentials;
  }

  async request(data) {
    return await new TencentCloudClient(this.credentials, {
      host: 'cam.tencentcloudapi.com',
      path: '/',
    }).doCloudApiRequest(data);
  }
}

class CamV2Client {
  constructor(credentials = {}) {
    this.credentials = credentials;
  }

  async request(data) {
    return await new TencentCloudClient(this.credentials, {
      host: 'cam.api.qcloud.com',
      path: '/v2/index.php',
    }).doCloudApiRequest(data);
  }
}

class CnsClient {
  constructor(credentials = {}) {
    this.credentials = credentials;
  }

  async request(data) {
    return await new TencentCloudClient(this.credentials, {
      host: 'cns.api.qcloud.com',
      path: '/v2/index.php',
    }).doCloudApiRequest(data);
  }
}

class DomainClient {
  constructor(credentials = {}) {
    this.credentials = credentials;
  }

  async request(data) {
    return await new TencentCloudClient(this.credentials, {
      host: 'domain.tencentcloudapi.com',
      path: '/',
    }).doCloudApiRequest(data);
  }
}

module.exports = {
  ScfClient,
  TagClient,
  CamClient,
  CamV2Client,
  CnsClient,
  ApigwClient,
  DomainClient,
};
