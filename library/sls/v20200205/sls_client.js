'use strict';

/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require('./models');
const AbstractClient = require('../../common/abstract_client');

const ListInstancesResponse = models.ListInstancesResponse;
const GetUploadUrlsResponse = models.GetUploadUrlsResponse;
const PostPublishComponentResponse = models.PostPublishComponentResponse;
const RunComponentResponse = models.RunComponentResponse;
const GetComponentAndVersionsResponse = models.GetComponentAndVersionsResponse;
const SaveInstanceResponse = models.SaveInstanceResponse;
const GetInstanceResponse = models.GetInstanceResponse;
const GetComponentVersionResponse = models.GetComponentVersionResponse;
const RunFinishComponentResponse = models.RunFinishComponentResponse;
const PrePublishComponentResponse = models.PrePublishComponentResponse;
const SendCouponResponse = models.SendCouponResponse;
const ListPackagesResponse = models.ListPackagesResponse;
const GetPackageResponse = models.GetPackageResponse;
const PreparePublishPackageResponse = models.PreparePublishPackageResponse;
const PostPublishPackageResponse = models.PostPublishPackageResponse;
const SetParameterResponse = models.SetParameterResponse;
const ListParametersResponse = models.ListParametersResponse;
const DeployApplicationResponse = models.DeployApplicationResponse;
const GetApplicationStatusResponse = models.GetApplicationStatusResponse;
const GetDeploymentStatusResponse = models.GetDeploymentStatusResponse;
const GetCacheFileUrlsResponse = models.GetCacheFileUrlsResponse;
const PushEventsResponse = models.PushEventsResponse;
const InvokeInstanceResponse = models.InvokeInstanceResponse;
const GetInstanceLogsResponse = models.GetInstanceLogsResponse;

/**
 * sls client
 * @class
 */
class SlsClient extends AbstractClient {
  constructor(credential, region, profile) {
    super('sls.tencentcloudapi.com', '2020-02-05', credential, region, profile);
  }

  /**
   * 预发布一个指定name和version的Component
   * @param {PrePublishComponentRequest} req
   * @param {function(string, PrePublishComponentResponse):void} cb
   * @public
   */
  PrePublishComponent(req, cb) {
    const resp = new PrePublishComponentResponse();
    this.request('PrePublishComponent', req, resp, cb);
  }

  /**
   * 获取指定name和版本的Component信息
   * @param {GetComponentVersionRequest} req
   * @param {function(string, GetComponentVersionResponse):void} cb
   * @public
   */
  GetComponentVersion(req, cb) {
    const resp = new GetComponentVersionResponse();
    this.request('GetComponentVersion', req, resp, cb);
  }

  /**
     *  用户获取一个已部署Component的Instance

     * @param {GetInstanceRequest} req
     * @param {function(string, GetInstanceResponse):void} cb
     * @public
     */
  GetInstance(req, cb) {
    const resp = new GetInstanceResponse();
    this.request('GetInstance', req, resp, cb);
  }

  /**
   * 用户获取Component Instance的预签名URL链接
   * @param {GetUploadUrlsRequest} req
   * @param {function(string, GetUploadUrlsResponse):void} cb
   * @public
   */
  GetUploadUrls(req, cb) {
    const resp = new GetUploadUrlsResponse();
    this.request('GetUploadUrls', req, resp, cb);
  }

  /**
   * 用户获取文件缓存URL链接
   * @param {GetCacheFileUrlsRequest} req
   * @param {function(string, GetCacheFileUrlsResponse):void} cb
   * @public
   */
  GetCacheFileUrls(req, cb) {
    const resp = new GetCacheFileUrlsResponse();
    this.request('GetCacheFileUrls', req, resp, cb);
  }

  /**
   * 推送用户操作事件
   * @param {PushEventsRequest} req
   * @param {function(string, PushEventsResponse):void} cb
   * @public
   */
  PushEvents(req, cb) {
    const resp = new PushEventsResponse();
    this.request('PushEvents', req, resp, cb);
  }

  /**
   * 调用实例
   * @param {InvokeInstanceRequest} req
   * @param {function(string, InvokeInstanceResponse):void} cb
   * @public
   */
  InvokeInstance(req, cb) {
    const resp = new InvokeInstanceResponse();
    this.request('InvokeInstance', req, resp, cb);
  }

  /**
   * 获取日志
   * @param {GetInstanceLogsRequest} req
   * @param {function(string, GetInstanceLogsResponse):void} cb
   * @public
   */
  GetInstanceLogs(req, cb) {
    const resp = new GetInstanceLogsResponse();
    this.request('GetInstanceLogs', req, resp, cb);
  }

  /**
   *  用户保存一个已部署Component的Instance
   * @param {SaveInstanceRequest} req
   * @param {function(string, SaveInstanceResponse):void} cb
   * @public
   */
  SaveInstance(req, cb) {
    const resp = new SaveInstanceResponse();
    this.request('SaveInstance', req, resp, cb);
  }

  /**
   * 运行一个Component
   * @param {RunComponentRequest} req
   * @param {function(string, RunComponentResponse):void} cb
   * @public
   */
  RunComponent(req, cb) {
    const resp = new RunComponentResponse();
    this.request('RunComponent', req, resp, cb);
  }

  /**
   * 用户获取一个已部署Component的Instance列表
   * @param {ListInstancesRequest} req
   * @param {function(string, ListInstancesResponse):void} cb
   * @public
   */
  ListInstances(req, cb) {
    const resp = new ListInstancesResponse();
    this.request('ListInstances', req, resp, cb);
  }

  /**
   * 发布一个指定name和version的Component
   * @param {PostPublishComponentRequest} req
   * @param {function(string, PostPublishComponentResponse):void} cb
   * @public
   */
  PostPublishComponent(req, cb) {
    const resp = new PostPublishComponentResponse();
    this.request('PostPublishComponent', req, resp, cb);
  }

  /**
   * 运行完成Component，更新Component Instance信息
   * @param {RunFinishComponentRequest} req
   * @param {function(string, RunFinishComponentResponse):void} cb
   * @public
   */
  RunFinishComponent(req, cb) {
    const resp = new RunFinishComponentResponse();
    this.request('RunFinishComponent', req, resp, cb);
  }

  /**
   * 该接口获取指定Component的所有版本信息
   * @param {GetComponentAndVersionsRequest} req
   * @param {function(string, GetComponentAndVersionsResponse):void} cb
   * @public
   */
  GetComponentAndVersions(req, cb) {
    const resp = new GetComponentAndVersionsResponse();
    this.request('GetComponentAndVersions', req, resp, cb);
  }

  /**
   * 发送代金券
   * @param {SendCouponRequest} req
   * @param {function(string, SendCouponResponse):void} cb
   * @public
   */
  SendCoupon(req, cb) {
    const resp = new SendCouponResponse();
    this.request('SendCoupon', req, resp, cb);
  }

  /**
   * 获取Package的列表信息
   * @param {ListPackagesRequest} req
   * @param {function(string, ListPackagesResponse):void} cb
   * @public
   */
  ListPackages(req, cb) {
    const resp = new ListPackagesResponse();
    this.request('ListPackages', req, resp, cb);
  }

  /**
   * 获取Package的详细信息
   * @param {GetPackageRequest} req
   * @param {function(string, GetPackageResponse):void} cb
   * @public
   */
  GetPackage(req, cb) {
    const resp = new GetPackageResponse();
    this.request('GetPackage', req, resp, cb);
  }

  /**
   * 预发布一个指定name和version的Package
   * @param {PreparePublishPackageRequest} req
   * @param {function(string, PreparePublishPackageResponse):void} cb
   * @public
   */
  PreparePublishPackage(req, cb) {
    const resp = new PreparePublishPackageResponse();
    this.request('PreparePublishPackage', req, resp, cb);
  }

  /**
   * 发布一个指定name和version的Package
   * @param {PostPublishPackageRequest} req
   * @param {function(string, PostPublishPackageResponse):void} cb
   * @public
   */
  PostPublishPackage(req, cb) {
    const resp = new PostPublishPackageResponse();
    this.request('PostPublishPackage', req, resp, cb);
  }
  /**
   * 获取parameter列表
   * @param {ListParametersRequest} req
   * @param {function(string, ListParametersResponse):void} cb
   * @public
   */
  ListParameters(req, cb) {
    const resp = new ListParametersResponse();
    this.request('ListParameters', req, resp, cb);
  }
  /**
   * 设置Parameter
   * @param {SetParameterRequest} req
   * @param {function(string, SetParameterResponse):void} cb
   * @public
   */
  SetParameter(req, cb) {
    const resp = new SetParameterResponse();
    this.request('SetParameter', req, resp, cb);
  }
  /**
   * 获取应用状态
   * @param {GetApplicationStatusRequest} req
   * @param {function(string, GetApplicationStatusResponse):void} cb
   * @public
   */
  GetApplicationStatus(req, cb) {
    const resp = new GetApplicationStatusResponse();
    this.request('GetApplicationStatus', req, resp, cb);
  }

  /**
   * 获取应用部署状态
   * @param {GetDeploymentStatusRequest} req
   * @param {function(string, GetDeploymentStatusResponse):void} cb
   * @public
   */
  GetDeploymentStatus(req, cb) {
    const resp = new GetDeploymentStatusResponse();
    this.request('GetDeploymentStatus', req, resp, cb);
  }

  /**
   * 部署应用
   * @param {DeployApplicationRequest} req
   * @param {function(string, DeployApplicationResponse):void} cb
   * @public
   */
  DeployApplication(req, cb) {
    const resp = new DeployApplicationResponse();
    this.request('DeployApplication', req, resp, cb);
  }
}
module.exports = SlsClient;
