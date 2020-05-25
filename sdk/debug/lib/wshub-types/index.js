'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const stream1 = require('stream');

function isDuplex(obj) {
  return obj instanceof stream1.Duplex;
}
exports.isDuplex = isDuplex;
function isPort(port) {
  return typeof port === 'string' || typeof port === 'number';
}
exports.isPort = isPort;
function isArrayOfString(array) {
  return (
    Array.isArray(array) &&
    array.every((v) => {
      return typeof v === 'string';
    })
  );
}
function isPtyOptions(pty) {
  return (
    typeof pty === 'object' &&
    Object.keys(pty).length === 6 &&
    pty.kind === 'pty' &&
    typeof pty.command === 'string' &&
    isArrayOfString(pty.args) &&
    typeof pty.cols === 'number' &&
    typeof pty.rows === 'number' &&
    isDuplex(pty.controlStream)
  );
}
exports.isPtyOptions = isPtyOptions;
function isFunction(fn) {
  return typeof fn === 'function';
}
exports.isFunction = isFunction;
