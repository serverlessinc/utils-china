'use strict';

const ApiRequest = require('./lib/apiRequest');
const WshubClient = require('./lib/client');

const RemoteDebug = function (auth, func, Region = 'ap-guangzhou') {
  this.auth = auth;
  this.func = func;
  this.Region = Region;
  this.request = new ApiRequest(auth, func, Region);
};

RemoteDebug.prototype.remoteDebug = async function (cliCallback) {
  try {
    await this.request.ensureFunctionState();
    await this.request.startDebugging();
    await this.request.ensureDebuggingMode();
    await this.request.ensureFunctionState();
    await this.request.buildDebugConnection();
    const debuggingInfo = await this.request.ensureDebuggingState();
    const {
      DebuggingInfo: { Url, Token },
    } = debuggingInfo;
    if (!Url || !Token) {
      throw Error('调试开启失败：接口未正常返回远程连接信息。请尝试重新开启');
    }
    this.client = new WshubClient({ Url, Token });
    try {
      await this.client.forwardDebug();
      cliCallback('远程调试链接：ws://127.0.0.1:9222');
      cliCallback('更多信息请参考：https://nodejs.org/en/docs/inspector');
      cliCallback(
        '请打开 Chrome 浏览器，地址栏访问 chrome://inspect, 点击 [Open dedicated DevTools for Node] 开始调试代码'
      );
    } catch (e) {
      cliCallback(`调试开启失败: ${e.message || JSON.stringify(e)}`, {
        type: 'error',
      });
    }
    cliCallback('--------------------- 实时日志 ---------------------');
    await this.client.forwardLog(cliCallback.stdout);
  } catch (e) {
    cliCallback(e.message, { type: 'error' });
  }
};

/**
 * @param option
 * @param option.stdout {object} writable stream for output log
 * @param option.logger {function} logger function if you need, console.log would be good
 */
RemoteDebug.prototype.standardRemoteDebug = async function (option) {
  let { logger } = option || {};
  const { stdout } = option || {};
  logger = logger || function () {};
  await this.request.ensureFunctionState();
  await this.request.startDebugging();
  await this.request.ensureDebuggingMode();
  await this.request.ensureFunctionState();
  await this.request.buildDebugConnection();
  const debuggingInfo = await this.request.ensureDebuggingState();
  const {
    DebuggingInfo: { Url, Token },
  } = debuggingInfo;
  if (!Url || !Token) {
    throw Error('调试开启失败：接口未正常返回远程连接信息。请尝试重新开启');
  }
  this.client = new WshubClient({ Url, Token });
  try {
    const ret = await this.client.forwardDebug();
    logger('远程调试链接：ws://127.0.0.1:9222');
    logger('更多信息请参考：https://nodejs.org/en/docs/inspector');
    logger(
      '请打开 Chrome 浏览器，地址栏访问 chrome://inspect, 点击 [Open dedicated DevTools for Node] 开始调试代码'
    );
    if (stdout) {
      logger('--------------------- 实时日志 ---------------------');
      await this.client.forwardLog(stdout);
    }
    return ret;
  } catch (e) {
    logger('调试开启失败：请确认本地的9222端口是否被占用。');
    throw e;
  }
};

RemoteDebug.prototype.stop = async function (cliCallback) {
  try {
    if (this.client) {
      this.client.close();
    }
    const { Status } = await this.request.getDebuggingInfo();
    if (Status === 'Active') {
      await this.request.ensureFunctionState();
      await this.request.stopDebugging();
    }
  } catch (e) {
    cliCallback(e.message, { type: 'error' });
  }
};

module.exports = RemoteDebug;
