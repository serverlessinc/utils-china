'use strict';

const { default: connect } = require('./wshub-client');
const { default: createLogger } = require('./wshub-logger');

const duplex = require('duplexify');

const Client = function (options) {
  const {
    Url,
    Token,
    logType = 'error',
    localPort = 9222,
    debugRemotePort = 9000,
    logRemotePort = 3332,
    timeout,
  } = options;
  // 日志类型，verbose或者info，测试阶段建议verbose
  this.logger = createLogger(logType);
  // 映射的本地端口，默认9222
  this.localPort = localPort;
  // 远端调试端口，默认9000
  this.debugRemotePort = debugRemotePort;
  // 远端日志端口，默认3222
  this.logRemotePort = logRemotePort;
  // 连接wshub的超时时间
  this.timeout = timeout;
  this.Url = Url;
  this.Token = Token;
};

/**
 * connect to ws-hub service
 * @returns the client promise
 */
Client.prototype._connect = async function () {
  return connect({ url: this.Url, token: this.Token, logger: this.logger, timeout: this.timeout });
};

/**
 * forward for debug
 * @returns the client local port
 */
Client.prototype.forwardDebug = async function () {
  if (!this.client) {
    this.client = await this._connect();
  }
  return this.client.forward(this.localPort, this.debugRemotePort);
};

/**
 * forward for real time log
 * @returns the client local port
 */
Client.prototype.forwardLog = async function (stdout) {
  if (!this.client) {
    this.client = await this._connect();
  }
  return this.client.forward(duplex(stdout, null, { end: false }), this.logRemotePort);
};

/**
 * close the client
 * @returns close result
 */
Client.prototype.close = async function () {
  if (this.client) {
    return this.client.close();
  }
  return null;
};

module.exports = Client;
