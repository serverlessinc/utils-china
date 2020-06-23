'use strict';

const { Capi } = require('@tencent-sdk/capi');

const ApiRequest = function (auth, func, Region, debugOptions) {
  const { SecretId, SecretKey } = auth;
  const Token = auth.Token || auth.token;
  const body = {
    FunctionName: func.functionName || func.FunctionName,
    Namespace: func.namespace || func.Namespace || 'default',
    Qualifier: func.qualifier || func.Qualifier || '$LATEST',
  };
  if (!SecretId || !SecretKey) {
    throw Error('The SecretId or SecretKey does not exist.');
  }
  if (!body.FunctionName) {
    throw Error('The FunctionName does not exist.');
  }

  this.client = new Capi({
    Region,
    SecretId,
    SecretKey,
    Token,
    ServiceType: 'scf',
    baseHost: 'tencentcloudapi.com',
  });
  this.commonParams = {
    Version: '2018-04-16',
    ...body,
  };
  this.debugOptions = debugOptions;
};

ApiRequest.prototype.request = async function (action, params) {
  const result = await this.client.request(
    {
      Action: action,
      ...this.commonParams,
      ...params,
    },
    this.debugOptions,
    true
  );
  if (result.Response && result.Response.Error) {
    throw Error(result.Response.Error.Message);
  }
  return result;
};

ApiRequest.prototype.startDebugging = async function (params) {
  return this.request('StartDebugging', params);
};

ApiRequest.prototype.stopDebugging = async function (params) {
  return this.request('StopDebugging', params);
};

ApiRequest.prototype.getDebuggingInfo = async function (params) {
  const { Response = {} } = (await this.request('GetDebuggingInfo', params)) || {};
  return Response;
};

ApiRequest.prototype.ensureFunctionState = async function (params) {
  const queryFunctionState = async () => {
    const { Response = {} } = (await this.request('GetFunction', params)) || {};
    return Response.Status;
  };
  const functionStatePollingStartTime = new Date().getTime();
  let status = await queryFunctionState();
  while (status !== 'Active') {
    status = await queryFunctionState();
    if (Date.now() - functionStatePollingStartTime > 60000) {
      break;
    }
  }
  return;
};

ApiRequest.prototype.ensureDebuggingState = async function (params) {
  const queryDebuggingState = async () => {
    const { Response = {} } = (await this.request('GetDebuggingInfo', params)) || {};
    return Response.Status;
  };
  const debugStatePollingStartTime = new Date().getTime();
  let status = await queryDebuggingState();
  while (status !== 'Active') {
    status = await queryDebuggingState();
    if (Date.now() - debugStatePollingStartTime > 60000) {
      break;
    }
  }
  return;
};

module.exports = ApiRequest;
