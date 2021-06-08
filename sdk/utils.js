'use strict';

const checkEnvUrl = (apiBaseUrl, devApiBaseUrl) => {
  const envInfo = process.env.SERVERLESS_PLATFORM_STAGE || 'prod';
  if (envInfo === 'prod') {
    return apiBaseUrl;
  }
  return devApiBaseUrl;
};

const getType = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

module.exports = {
  checkEnvUrl,
  getType,
};
