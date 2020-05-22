'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const winston_1 = require('winston');

const myFormat = winston_1.format.printf((_a) => {
    const level = _a.level; const message = _a.message; const timestamp = _a.timestamp;
    return `${timestamp  } ${  level  }: ${  message}`;
});
function default_1(level) {
    if (level === void 0) { level = 'info'; }
    return winston_1.createLogger({
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), myFormat),
        transports: [
            new winston_1.transports.Console({ level }),
        ],
    });
}
exports.default = default_1;
