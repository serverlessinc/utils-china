'use strict';

// const uuidv4 = require('uuid').v4;
const { formatTime } = require('./utils');

const mergeObj = (baseObj, targetObj) => {
  Object.entries(targetObj).forEach(([key, val]) => {
    if (val) {
      baseObj[key] = val;
    }
  });
  return baseObj;
};

const LOG_LEVELS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  FATAL: 'FATAL',
};

const createLog = (options) => {
  const defaultLog = {
    'LogLevel': 'DEBUG',
    '@Timestamp': formatTime(Date.now(), 'YYYY-MM-DD HH:mm:ss'),
    'RequestId': '',
    'Module': '',
    'Platform': 'tencent|serverless',
    'ErrorCode': 'InternalError',
    'SubErrorCode': '',
    'ErrorStackTrace': '',
    'CodeLine': '',
    'LogContent': '',
    'UserId': '',
    'InstanceInfo': {
      ComponentName: '',
      ComponentVersion: '',
    },
    'ActionName': '',
    'CostTime': 0.0,
    'Region': '',
    'Caller': '',
    'Callee': '',
    'CalleeEndpoint': '',
    'CalleeAction': '',
  };
  return mergeObj(defaultLog, options);
};

module.exports = {
  LOG_LEVELS,
  createLog,
};
