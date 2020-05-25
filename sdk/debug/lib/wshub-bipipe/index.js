'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const eos = require('end-of-stream');

function pipe(stream1, stream2, cb) {
  stream1.pipe(stream2);
  stream2.pipe(stream1);
  let closed = false;
  const cleanup = function () {
    if (closed) {
      return;
    }
    if (!stream1.writableEnded) {
      stream1.end();
    }
    if (!stream2.writableEnded) {
      stream2.end();
    }
    closed = true;
    cb();
  };
  eos(stream1, cleanup);
  eos(stream2, cleanup);
}
exports.default = pipe;
