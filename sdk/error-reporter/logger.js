'use strict';

const uuidv4 = require('uuid').v4;
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
    '@Timestamp': formatTime(Date.now(), 'YYYY-MM-DD HH:mm:ss'),
    'LogLevel': 'DEBUG',
    'TraceId': uuidv4(),
    'Module': '',
    'LogContent': '',
    'CodeLine': '',
    'Env': 'dev',
    'Region': '',
    'Action': '',
    'InstanceId': '',
    'Caller': '',
    'Callee': '',
    'CalleeEndpoint': '',
    'CalleeAction': '',
    'ErrorCode': 'InternalError',
    'SubErrorCode': '',
    'CostTime': 0.0,
    'UserId': '',
  };
  return mergeObj(defaultLog, options);
};

module.exports = {
  LOG_LEVELS,
  createLog,
};
