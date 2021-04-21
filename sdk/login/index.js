'use strict';

const util = require('util');
const http = require('http');
const os = require('os');
const uuidv4 = require('../../library/uuid');
const QRCode = require('qrcode-terminal');
const { checkEnvUrl } = require('../utils');

const apiBaseUrl = 'scfdev.tencentserverless.com';
const devApiBaseUrl = 'scfdevsh.tencentserverless.com';
const apiShortUrl = '/login/url';
const refreshTokenUrl = '/login/info';

class Login {
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async getShortUrl(uuid) {
    const options = {
      host: checkEnvUrl(apiBaseUrl, devApiBaseUrl),
      port: '80',
      path: util.format('%s?os=%s&uuid=%s', apiShortUrl, os.type(), uuid),
    };
    return new Promise((resolve, reject) => {
      const req = http.get(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          try {
            resolve(JSON.parse(chunk));
          } catch (e) {
            reject(e.message);
          }
        });
      });
      req.on('error', (e) => {
        reject(e.message);
      });
      req.end();
    });
  }

  async checkStatus(uuid, url) {
    return new Promise((done) => {
      const options = {
        host: checkEnvUrl(apiBaseUrl, devApiBaseUrl),
        port: '80',
        path: url,
      };
      const req = http.get(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          try {
            const responseData = JSON.parse(chunk);
            if (responseData.success) {
              done(responseData);
            } else {
              done(false);
            }
          } catch (e) {
            done(false);
            return;
          }
        });
      });
      req.on('error', () => {
        done(false);
        return;
      });
      req.end();
    });
  }

  async flush(uuid, expired, signature, appid) {
    return await new Promise((done) => {
      const options = {
        host: checkEnvUrl(apiBaseUrl, devApiBaseUrl),
        port: '80',
        path: `${refreshTokenUrl}?uuid=${uuid}&os=${os.type()}&expired=${expired}&signature=${signature}&appid=${appid}`,
      };
      const req = http.get(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          try {
            const responseData = JSON.parse(chunk);
            if (responseData.success) {
              done(responseData);
            } else {
              done(false);
            }
          } catch (e) {
            done(false);
            return;
          }
        });
      });
      req.on('error', () => {
        done(false);
        return;
      });
      req.end();
    });
  }

  async login() {
    try {
      const uuid = uuidv4();
      const apiUrl = await this.getShortUrl(uuid);

      QRCode.setErrorLevel('M');

      QRCode.generate(apiUrl.short_url, { small: true }, (qrcode) => {
        console.log(qrcode);
      });

      console.log('请使用微信扫描上方二维码或者点击下方链接登录');
      console.log(apiUrl.short_url);

      // wait 3s start check login status
      await this.sleep(3000);

      let loginFlag = false;
      let timeout = 600;
      let loginData;
      while (timeout > 0) {
        loginData = await this.checkStatus(uuid, apiUrl.login_status_url);
        if (loginData !== false) {
          loginFlag = true;
          break;
        }
        timeout--;
        await this.sleep(1000);
      }
      if (loginFlag === false && timeout === 0) {
        console.log('登录超时，请重试');
        process.exit(0);
      }
      const configure = {
        secret_id: loginData.secret_id,
        secret_key: loginData.secret_key,
        token: loginData.token,
        appid: loginData.appid,
        signature: loginData.signature,
        expired: loginData.expired,
        uuid,
      };
      console.log('腾讯云 登录成功');
      return configure;
    } catch (e) {
      console.log(e);
    }
    process.exit(0);
    return null;
  }

  async loginUrl() {
    try {
      const uuid = uuidv4();
      const apiUrl = await this.getShortUrl(uuid);
      return {
        login_status_url: apiUrl.login_status_url,
        uuid,
        url: apiUrl.long_url,
        short_url: apiUrl.short_url,
      };
    } catch (e) {
      console.log(e);
    }
    return null;
  }
}

module.exports = Login;
