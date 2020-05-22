'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const HttpsProxyAgent = require('https-proxy-agent');

function createProxyAgent() {
    const _a = process.env; const http_proxy = _a.http_proxy; const HTTP_PROXY = _a.HTTP_PROXY; const https_proxy = _a.https_proxy; const HTTPS_PROXY = _a.HTTPS_PROXY;
    const proxy = http_proxy || HTTP_PROXY || https_proxy || HTTPS_PROXY;
    if (!proxy) {
        return false;
    }
    return new HttpsProxyAgent(proxy);
}
exports.default = createProxyAgent;
