'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const HttpsProxyAgent = require('https-proxy-agent');

function createProxyAgent() {
  const _a = process.env;
  const httpProxy = _a.http_proxy;
  const HTTP_PROXY = _a.HTTP_PROXY;
  const httpsProxy = _a.https_proxy;
  const HTTPS_PROXY = _a.HTTPS_PROXY;
  const proxy = httpProxy || HTTP_PROXY || httpsProxy || HTTPS_PROXY;
  if (!proxy) {
    return false;
  }
  return new HttpsProxyAgent(proxy);
}
exports.default = createProxyAgent;
