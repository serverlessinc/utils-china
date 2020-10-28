'use strict';

const checkEnvUrl = (apiBaseUrl, devApiBaseUrl) => {
  const envInfo = process.env.SERVERLESS_PLATFORM_STAGE || 'prod';
  if (envInfo === 'prod') {
    return apiBaseUrl;
  }
  return devApiBaseUrl;
};

module.exports = {
  checkEnvUrl,
};
