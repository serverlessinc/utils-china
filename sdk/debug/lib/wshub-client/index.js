'use strict';

const __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P((resolve) => {
            resolve(value);
          });
    }
    return new (P || (P = Promise))((resolve, reject) => {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        if (result.done) resolve(result.value);
        else adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    let _ = {
      label: 0,
      sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    };
    let f;
    let y;
    let t;
    let g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      const resolveT = () => {
        if (!y) return null;
        if (op[0] & 2) return y.return;
        if (op[0]) return y.throw || ((t = y.return) && t.call(y), 0);
        return y.next;
      };
      while (_) {
        try {
          f = 1;
          t = resolveT();
          if (y && t && !(t = t.call(y, op[1])).done) {
            return t;
          }

          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : undefined, done: true };
    }
  };
const __spreadArrays =
  (this && this.__spreadArrays) ||
  function (...args) {
    let s = 0;
    const il = args.length;
    for (let i = 0; i < il; i++) s += args[i].length;
    const r = Array(s);
    for (let k = 0, i = 0; i < il; i++) {
      for (let a = args[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }
    return r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
const socketIo = require('socket.io-client');
const socketIoStream = require('../wshub-socket.io-stream');
const net1 = require('net');
const wshubBipipe1 = require('../wshub-bipipe');
const wshubProxy1 = require('../wshub-proxy');
const wshubTypes1 = require('../wshub-types');

function normalizeListenArgs(portOrPath) {
  const port = Number(portOrPath);
  return port >= 0 ? [port, '127.0.0.1'] : [portOrPath];
}
const Client = /** @class */ (function () {
  function ClientInner(socket, streamSocket, logger) {
    this.socket = socket;
    this.streamSocket = streamSocket;
    this.logger = logger;
  }
  ClientInner.prototype.forward = function (clientPort, serverPort) {
    return __awaiter(this, undefined, undefined, function () {
      let sendStream;
      let targetName;
      let tcpServer;
      const _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            sendStream = function (local, streamName) {
              const stream = socketIoStream.createStream();
              wshubBipipe1.default(local, stream, () => {
                _this.logger.verbose(`${streamName} closed`);
              });
              _this.logger.verbose(`${streamName} sending to wshub`);
              return new Promise((resolve) => {
                _this.streamSocket.emit('forward', stream, serverPort, (err) => {
                  if (err) {
                    _this.logger.error(`${streamName} sending failed for '${err}'`);
                  } else {
                    _this.logger.verbose(`${streamName} sent to wshub successfully`);
                  }
                  resolve();
                });
              });
            };
            targetName = wshubTypes1.isPort(serverPort) ? serverPort : serverPort.command;
            if (!wshubTypes1.isPort(serverPort)) {
              if (typeof clientPort !== 'object') {
                throw new Error('only streams can be forwarded to PTY process');
              }
              serverPort.controlStream = socketIoStream.createStream({ objectMode: true });
            }
            if (!(typeof clientPort === 'object')) return [3 /* break*/, 2];
            return [4 /* yield*/, sendStream(clientPort, `stream -> :${targetName}`)];
          case 1:
            _a.sent();
            return [2 /* return*/, serverPort];
          case 2:
            tcpServer = net1.createServer((local) => {
              local.unref();
              sendStream(local, `:${clientPort} -> :${targetName}`);
            });
            this.socket.on('disconnect', () => {
              return tcpServer.close();
            });
            tcpServer.unref();
            tcpServer.on('error', (e) => {
              return _this.logger.error(`tcp server error ${e}`);
            });
            return [
              2 /* return*/,
              new Promise((resolve) => {
                tcpServer.listen(
                  ...__spreadArrays(normalizeListenArgs(clientPort), [
                    function () {
                      resolve(tcpServer.address());
                    },
                  ])
                );
              }),
            ];
          default:
            return null;
        }
      });
    });
  };
  ClientInner.prototype.backward = function (clientPort, serverPort) {
    const _this = this;
    const streamName = `:${clientPort} <- :${serverPort}`;
    this.streamSocket.emit('backward', clientPort, serverPort, (err) => {
      if (err) {
        _this.logger.error(`sending ${streamName} request failed for '${err}'`);
      } else {
        _this.logger.verbose(`${streamName} request sent to wshub successfully`);
      }
    });
  };
  ClientInner.prototype.close = function () {
    this.socket.disconnect();
  };
  ClientInner.prototype.onError = function (fn) {
    this.streamSocket.on('error', fn);
    return this;
  };
  ClientInner.prototype.onDisconnect = function (fn) {
    this.socket.on('disconnect', fn);
    return this;
  };
  return ClientInner;
})();
function connect(options) {
  const url = options.url;
  const token = options.token;
  const logger = options.logger;
  const _a = options.timeout;
  const timeout = _a === undefined ? -1 : _a;
  const agent = wshubProxy1.default();
  const socket = socketIo.connect(url, { query: { token }, agent });
  const streamSocket = socketIoStream(socket);
  streamSocket
    .on('forward', (remote, clientPort, serverPort) => {
      const streamName = `:${clientPort} <- :${serverPort}`;
      const target = net1.createConnection(clientPort).unref();
      target
        .once('connect', () => {
          logger.verbose(`${streamName} connected`);
          wshubBipipe1.default(remote, target, () => {
            logger.verbose(`${streamName} closed`);
          });
        })
        .on('error', (err) => {
          logger.error(`${streamName} error '${err}'`);
          remote.end();
        });
    })
    .on('error', () => {
      return socket.disconnect();
    });
  socket.on('disconnect', (reason) => {
    logger.info(`disconnected for ${reason}`);
    socket.disconnect();
  });
  return new Promise((resolve, reject0) => {
    const reject = function (...inputArgs) {
      const args = [];
      for (let _i = 0; _i < inputArgs.length; _i++) {
        args[_i] = inputArgs[_i];
      }
      socket.disconnect();
      reject0(...args);
    };
    let handle;
    if (timeout > 0) {
      handle = setTimeout(() => {
        reject(new Error('connection timeout'));
      }, timeout);
    }
    socket.on('connect', () => {
      logger.info('client connected');
    });
    socket.on('ready', () => {
      logger.info('server connected');
      if (handle) {
        clearTimeout(handle);
      }
      resolve(new Client(socket, streamSocket, logger));
    });
    socket.on('connect_error', reject);
    socket.on('error', reject);
    socket.on('disconnect', reject);
  });
}
exports.default = connect;
