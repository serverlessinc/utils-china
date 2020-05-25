'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const winston1 = require('winston');

const myFormat = winston1.format.printf((_a) => {
  const level = _a.level;
  const message = _a.message;
  const timestamp = _a.timestamp;
  return `${timestamp} ${level}: ${message}`;
});
function default1(level) {
  if (level === undefined) {
    level = 'info';
  }
  return winston1.createLogger({
    format: winston1.format.combine(
      winston1.format.colorize(),
      winston1.format.timestamp(),
      myFormat
    ),
    transports: [new winston1.transports.Console({ level })],
  });
}
exports.default = default1;
