'use strict';

const mergeObj = (baseObj, targetObj) => {
  Object.entries(targetObj).forEach(([key, val]) => {
    if (val) {
      baseObj[key] = val;
    }
  });
  return baseObj;
};

const formatOptions = (baseOptions, options) => {
  const merged = Object.assign({}, baseOptions, options);
  const newObj = [];
  Object.entries(merged).forEach(([key, val]) => {
    const newKey = key[0].toLocaleUpperCase().concat(key.slice(1));
    if (newKey === 'ComponentName' || newKey === 'ComponentVersion') {
      newObj.ComponentInfo = newObj.ComponentInfo || {};
      newObj.ComponentInfo[newKey] = val;
    } else if (newKey === 'OrgId' || newKey === 'AppId' || newKey === 'InstanceId') {
      newObj.InstanceInfo = newObj.InstanceInfo || {};
      newObj.InstanceInfo[newKey] = val;
    } else {
      newObj[newKey] = typeof val === 'object' ? JSON.stringify(val) : val;
    }
  });
  return newObj;
};

const LOG_LEVELS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  FATAL: 'FATAL',
  TRACE: 'TRACE',
};

const createLog = (baseOptions, options) => {
  const defaultLog = {
    'LogLevel': 'DEBUG',
    '@Timestamp': new Date().toISOString(),
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
  return mergeObj(defaultLog, formatOptions(baseOptions, options));
};

module.exports = {
  LOG_LEVELS,
  createLog,
};
