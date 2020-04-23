"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled (value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected (value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb (n) { return function (v) { return step([n, v]); }; }
    function step (op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var socketIo = require("socket.io-client");
var socketIoStream = require("../wshub-socket.io-stream");
var net_1 = require("net");
var wshub_bipipe_1 = require("../wshub-bipipe");
var wshub_proxy_1 = require("../wshub-proxy");
var wshub_types_1 = require("../wshub-types");
function normalizeListenArgs (portOrPath) {
    var port = Number(portOrPath);
    return port >= 0 ? [port, '127.0.0.1'] : [portOrPath];
}
var Client = /** @class */ (function () {
    function Client (socket, streamSocket, logger) {
        this.socket = socket;
        this.streamSocket = streamSocket;
        this.logger = logger;
    }
    Client.prototype.forward = function (clientPort, serverPort) {
        return __awaiter(this, void 0, void 0, function () {
            var sendStream, targetName, tcpServer;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sendStream = function (local, streamName) {
                            var stream = socketIoStream.createStream();
                            wshub_bipipe_1.default(local, stream, function () {
                                _this.logger.verbose(streamName + " closed");
                            });
                            _this.logger.verbose(streamName + " sending to wshub");
                            return new Promise(function (resolve) {
                                _this.streamSocket.emit('forward', stream, serverPort, function (err) {
                                    if (err) {
                                        _this.logger.error(streamName + " sending failed for '" + err + "'");
                                    }
                                    else {
                                        _this.logger.verbose(streamName + " sent to wshub successfully");
                                    }
                                    resolve();
                                });
                            });
                        };
                        targetName = wshub_types_1.isPort(serverPort) ? serverPort : serverPort.command;
                        if (!wshub_types_1.isPort(serverPort)) {
                            if (typeof clientPort !== 'object') {
                                throw new Error('only streams can be forwarded to PTY process');
                            }
                            serverPort.controlStream = socketIoStream.createStream({ objectMode: true });
                        }
                        if (!(typeof clientPort === 'object')) return [3 /*break*/, 2];
                        return [4 /*yield*/, sendStream(clientPort, "stream -> :" + targetName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, serverPort];
                    case 2:
                        tcpServer = net_1.createServer(function (local) {
                            local.unref();
                            sendStream(local, ":" + clientPort + " -> :" + targetName);
                        });
                        this.socket.on('disconnect', function () { return tcpServer.close(); });
                        tcpServer.unref();
                        tcpServer.on('error', function (e) { return _this.logger.error("tcp server error " + e); });
                        return [2 /*return*/, new Promise(function (resolve) {
                            tcpServer.listen.apply(tcpServer, __spreadArrays(normalizeListenArgs(clientPort), [function () {
                                resolve(tcpServer.address());
                            }]));
                        })];
                }
            });
        });
    };
    Client.prototype.backward = function (clientPort, serverPort) {
        var _this = this;
        var streamName = ":" + clientPort + " <- :" + serverPort;
        this.streamSocket.emit('backward', clientPort, serverPort, function (err) {
            if (err) {
                _this.logger.error("sending " + streamName + " request failed for '" + err + "'");
            }
            else {
                _this.logger.verbose(streamName + " request sent to wshub successfully");
            }
        });
    };
    Client.prototype.close = function () {
        this.socket.disconnect();
    };
    Client.prototype.onError = function (fn) {
        this.streamSocket.on('error', fn);
        return this;
    };
    Client.prototype.onDisconnect = function (fn) {
        this.socket.on('disconnect', fn);
        return this;
    };
    return Client;
}());
function connect (options) {
    var url = options.url, token = options.token, logger = options.logger, _a = options.timeout, timeout = _a === void 0 ? -1 : _a;
    var agent = wshub_proxy_1.default();
    var socket = socketIo.connect(url, { query: { token: token }, agent: agent });
    var streamSocket = socketIoStream(socket);
    streamSocket
        .on('forward', function (remote, clientPort, serverPort) {
            var streamName = ":" + clientPort + " <- :" + serverPort;
            var target = net_1.createConnection(clientPort).unref();
            target
                .once('connect', function () {
                    logger.verbose(streamName + " connected");
                    wshub_bipipe_1.default(remote, target, function () {
                        logger.verbose(streamName + " closed");
                    });
                })
                .on('error', function (err) {
                    logger.error(streamName + " error '" + err + "'");
                    remote.end();
                });
        })
        .on('error', function () { return socket.disconnect(); });
    socket
        .on('disconnect', function (reason) {
            logger.info("disconnected for " + reason);
            socket.disconnect();
        });
    return new Promise(function (resolve, reject0) {
        var reject = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            socket.disconnect();
            reject0.apply(void 0, args);
        };
        var handle;
        if (timeout > 0) {
            handle = setTimeout(function () {
                reject(new Error('connection timeout'));
            }, timeout);
        }
        socket.on('connect', function () {
            logger.info('client connected');
        });
        socket.on('ready', function () {
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
