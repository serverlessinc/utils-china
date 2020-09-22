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

const createLog = (baseOptions, options) => {
  const defaultLog = {
    'LogLevel': 'DEBUG',
    '@Timestamp': formatTime(Date.now(), 'YYYY-MM-DD HH:mm:ss'),
    'TraceId': '',
    'Module': '',
    'Platform': 'tencent|serverless',
    'ErrorCode': 'InternalError',
    'SubErrorCode': '',
    'ErrorStackTrace': '',
    'CodeLine': '',
    'LogContent': '',
    'UserId': '',
    'ComponentInfo': {
      ComponentName: '',
      ComponentVersion: '',
    },
    'InstanceInfo': {
      OrgId: '',
      AppId: '',
      InstanceId: '',
    },
    'ActionName': '',
    'CostTime': 0.0,
    'Region': '',
    'Caller': '',
    'Callee': '',
    'CalleeEndpoint': '',
    'CalleeAction': '',
  };
  return mergeObj(defaultLog, mergeObj(baseOptions, options));
};

module.exports = {
  LOG_LEVELS,
  createLog,
};
