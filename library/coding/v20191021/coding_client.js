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

const DescribeProjectDepotBranchesResponse = models.DescribeProjectDepotBranchesResponse;
const CreateEnterpriseResponse = models.CreateEnterpriseResponse;
const ModifyJobResponse = models.ModifyJobResponse;
const DescribeCodingCIBuildLogRawResponse = models.DescribeCodingCIBuildLogRawResponse;
const DescribeCodingCIBuildResponse = models.DescribeCodingCIBuildResponse;
const CreateProjectMemberResponse = models.CreateProjectMemberResponse;
const CreateCompaniesResponse = models.CreateCompaniesResponse;
const DescribeCodingCIJobResponse = models.DescribeCodingCIJobResponse;
const DescribeCodingCIBuildStageResponse = models.DescribeCodingCIBuildStageResponse;
const DescribeProjectCredentialsResponse = models.DescribeProjectCredentialsResponse;
const DescribeCodingCIJobsResponse = models.DescribeCodingCIJobsResponse;
const DescribeListBuildResponse = models.DescribeListBuildResponse;
const StopBuildResponse = models.StopBuildResponse;
const DescribeVersionListResponse = models.DescribeVersionListResponse;
const DeleteBuildResponse = models.DeleteBuildResponse;
const DescribeProjectDepotsResponse = models.DescribeProjectDepotsResponse;
const DescribeProjectResponse = models.DescribeProjectResponse;
const DescribeCodingCIBuildLogResponse = models.DescribeCodingCIBuildLogResponse;
const CreateJobResponse = models.CreateJobResponse;
const DescribeBuildResponse = models.DescribeBuildResponse;
const TriggerCodingCIBuildResponse = models.TriggerCodingCIBuildResponse;
const DescribeProjectDepotTagsResponse = models.DescribeProjectDepotTagsResponse;
const DeleteCodingCIJobResponse = models.DeleteCodingCIJobResponse;
const ModifyCodingCIJobResponse = models.ModifyCodingCIJobResponse;
const DescribePersonalExternalDepotsResponse = models.DescribePersonalExternalDepotsResponse;
const DescribeCodingCIBuildStepResponse = models.DescribeCodingCIBuildStepResponse;
const CreateProjectResponse = models.CreateProjectResponse;
const CreateCodingCIJobResponse = models.CreateCodingCIJobResponse;
const DescribeProjectLabelsResponse = models.DescribeProjectLabelsResponse;
const DeleteOneProjectResponse = models.DeleteOneProjectResponse;
const DescribeEnterpriseStatusResponse = models.DescribeEnterpriseStatusResponse;
const ModifyProjectPermissionResponse = models.ModifyProjectPermissionResponse;
const DeleteJobResponse = models.DeleteJobResponse;
const CreateProjectTokenResponse = models.CreateProjectTokenResponse;
const DescribeOneProjectResponse = models.DescribeOneProjectResponse;
const DescribeTestJobResponse = models.DescribeTestJobResponse;
const DescribeRepositoryListResponse = models.DescribeRepositoryListResponse;
const CreateCodingCIJobByTemplateResponse = models.CreateCodingCIJobByTemplateResponse;
const BoundExternalDepotResponse = models.BoundExternalDepotResponse;
const CreateEnterpriseMemberResponse = models.CreateEnterpriseMemberResponse;
const TriggerBuildResponse = models.TriggerBuildResponse;
const ListProjectResponse = models.ListProjectResponse;
const CreateProjectCredentialResponse = models.CreateProjectCredentialResponse;
const DescribePackageListResponse = models.DescribePackageListResponse;
const DescribeOneJobResponse = models.DescribeOneJobResponse;
const DeleteCodingCIBuildResponse = models.DeleteCodingCIBuildResponse;
const DescribeCodingCIBuildStatisticsResponse = models.DescribeCodingCIBuildStatisticsResponse;
const DescribeCurrentUserResponse = models.DescribeCurrentUserResponse;
const CreateGitMergeRequestResponse = models.CreateGitMergeRequestResponse;
const StopCodingCIBuildResponse = models.StopCodingCIBuildResponse;
const DescribeProjectDepotCommitsResponse = models.DescribeProjectDepotCommitsResponse;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const DescribeCodingCIBuildStepLogResponse = models.DescribeCodingCIBuildStepLogResponse;
const CreatePersonalTokenResponse = models.CreatePersonalTokenResponse;
const DescribeTeamDepotsResponse = models.DescribeTeamDepotsResponse;
const CreateProjectWithTemplateResponse = models.CreateProjectWithTemplateResponse;
const DescribeJobsResponse = models.DescribeJobsResponse;
const ModifyEnterprisePermissionsResponse = models.ModifyEnterprisePermissionsResponse;
const DescribeArtifactDownloadUrlResponse = models.DescribeArtifactDownloadUrlResponse;
const TestResponse = models.TestResponse;
const DescribeTeamResponse = models.DescribeTeamResponse;
const CreateArtifactRepositoryResponse = models.CreateArtifactRepositoryResponse;
const DescribeCodingCIBuildsResponse = models.DescribeCodingCIBuildsResponse;

/**
 * coding client
 * @class
 */
class CodingClient extends AbstractClient {
  constructor(credential, region, profile) {
    super('coding.tencentcloudapi.com', '2019-10-21', credential, region, profile);
  }

  /**
   * 获取构建任务指定阶段的步骤
   * @param {DescribeCodingCIBuildStepRequest} req
   * @param {function(string, DescribeCodingCIBuildStepResponse):void} cb
   * @public
   */
  DescribeCodingCIBuildStep(req, cb) {
    const resp = new DescribeCodingCIBuildStepResponse();
    this.request('DescribeCodingCIBuildStep', req, resp, cb);
  }

  /**
   * 查询项目信息
   * @param {ListProjectRequest} req
   * @param {function(string, ListProjectResponse):void} cb
   * @public
   */
  ListProject(req, cb) {
    const resp = new ListProjectResponse();
    this.request('ListProject', req, resp, cb);
  }

  /**
   * 删除单个项目
   * @param {DeleteOneProjectRequest} req
   * @param {function(string, DeleteOneProjectResponse):void} cb
   * @public
   */
  DeleteOneProject(req, cb) {
    const resp = new DeleteOneProjectResponse();
    this.request('DeleteOneProject', req, resp, cb);
  }

  /**
   * 查询包列表。
   * @param {DescribePackageListRequest} req
   * @param {function(string, DescribePackageListResponse):void} cb
   * @public
   */
  DescribePackageList(req, cb) {
    const resp = new DescribePackageListResponse();
    this.request('DescribePackageList', req, resp, cb);
  }

  /**
   * 查询制品版本列表。
   * @param {DescribeVersionListRequest} req
   * @param {function(string, DescribeVersionListResponse):void} cb
   * @public
   */
  DescribeVersionList(req, cb) {
    const resp = new DescribeVersionListResponse();
    this.request('DescribeVersionList', req, resp, cb);
  }

  /**
   * 构建任务统计
   * @param {DescribeCodingCIBuildStatisticsRequest} req
   * @param {function(string, DescribeCodingCIBuildStatisticsResponse):void} cb
   * @public
   */
  DescribeCodingCIBuildStatistics(req, cb) {
    const resp = new DescribeCodingCIBuildStatisticsResponse();
    this.request('DescribeCodingCIBuildStatistics', req, resp, cb);
  }

  /**
   * 查询构建列表。
   * @param {DescribeListBuildRequest} req
   * @param {function(string, DescribeListBuildResponse):void} cb
   * @public
   */
  DescribeListBuild(req, cb) {
    const resp = new DescribeListBuildResponse();
    this.request('DescribeListBuild', req, resp, cb);
  }

  /**
   * 创建项目令牌
   * @param {CreateProjectTokenRequest} req
   * @param {function(string, CreateProjectTokenResponse):void} cb
   * @public
   */
  CreateProjectToken(req, cb) {
    const resp = new CreateProjectTokenResponse();
    this.request('CreateProjectToken', req, resp, cb);
  }

  /**
   * 查询单个项目
   * @param {DescribeOneProjectRequest} req
   * @param {function(string, DescribeOneProjectResponse):void} cb
   * @public
   */
  DescribeOneProject(req, cb) {
    const resp = new DescribeOneProjectResponse();
    this.request('DescribeOneProject', req, resp, cb);
  }

  /**
   * 触发构建
   * @param {TriggerCodingCIBuildRequest} req
   * @param {function(string, TriggerCodingCIBuildResponse):void} cb
   * @public
   */
  TriggerCodingCIBuild(req, cb) {
    const resp = new TriggerCodingCIBuildResponse();
    this.request('TriggerCodingCIBuild', req, resp, cb);
  }

  /**
   * 删除构建
   * @param {DeleteCodingCIBuildRequest} req
   * @param {function(string, DeleteCodingCIBuildResponse):void} cb
   * @public
   */
  DeleteCodingCIBuild(req, cb) {
    const resp = new DeleteCodingCIBuildResponse();
    this.request('DeleteCodingCIBuild', req, resp, cb);
  }

  /**
   * 配置项目成员权限
   * @param {ModifyProjectPermissionRequest} req
   * @param {function(string, ModifyProjectPermissionResponse):void} cb
   * @public
   */
  ModifyProjectPermission(req, cb) {
    const resp = new ModifyProjectPermissionResponse();
    this.request('ModifyProjectPermission', req, resp, cb);
  }

  /**
   * 创建模版项目
   * @param {CreateProjectWithTemplateRequest} req
   * @param {function(string, CreateProjectWithTemplateResponse):void} cb
   * @public
   */
  CreateProjectWithTemplate(req, cb) {
    const resp = new CreateProjectWithTemplateResponse();
    this.request('CreateProjectWithTemplate', req, resp, cb);
  }

  /**
   * 配置团队成员权限
   * @param {ModifyEnterprisePermissionsRequest} req
   * @param {function(string, ModifyEnterprisePermissionsResponse):void} cb
   * @public
   */
  ModifyEnterprisePermissions(req, cb) {
    const resp = new ModifyEnterprisePermissionsResponse();
    this.request('ModifyEnterprisePermissions', req, resp, cb);
  }

  /**
   * 查询单个项目下的所有CI 任务。
   * @param {
   * } req
   * @param {function(string, DescribeJobsResponse):void} cb
   * @public
   */
  DescribeJobs(req, cb) {
    const resp = new DescribeJobsResponse();
    this.request('DescribeJobs', req, resp, cb);
  }

  /**
   * 修改构建计划
   * @param {ModifyCodingCIJobRequest} req
   * @param {function(string, ModifyCodingCIJobResponse):void} cb
   * @public
   */
  ModifyCodingCIJob(req, cb) {
    const resp = new ModifyCodingCIJobResponse();
    this.request('ModifyCodingCIJob', req, resp, cb);
  }

  /**
   * 创建 Git 合并请求
   * @param {CreateGitMergeRequestRequest} req
   * @param {function(string, CreateGitMergeRequestResponse):void} cb
   * @public
   */
  CreateGitMergeRequest(req, cb) {
    const resp = new CreateGitMergeRequestResponse();
    this.request('CreateGitMergeRequest', req, resp, cb);
  }

  /**
   * 删除单个构建。
   * @param {DeleteBuildRequest} req
   * @param {function(string, DeleteBuildResponse):void} cb
   * @public
   */
  DeleteBuild(req, cb) {
    const resp = new DeleteBuildResponse();
    this.request('DeleteBuild', req, resp, cb);
  }

  /**
   * 停止构建。
   * @param {StopBuildRequest} req
   * @param {function(string, StopBuildResponse):void} cb
   * @public
   */
  StopBuild(req, cb) {
    const resp = new StopBuildResponse();
    this.request('StopBuild', req, resp, cb);
  }

  /**
   * 创建项目凭据
   * @param {CreateProjectCredentialRequest} req
   * @param {function(string, CreateProjectCredentialResponse):void} cb
   * @public
   */
  CreateProjectCredential(req, cb) {
    const resp = new CreateProjectCredentialResponse();
    this.request('CreateProjectCredential', req, resp, cb);
  }

  /**
     * 查询团队信息。

通过团队唯一标示或团队 ID 查询团队信息。
如果二者都填默认使用团队 ID 查询。
     * @param {DescribeTeamRequest} req
     * @param {function(string, DescribeTeamResponse):void} cb
     * @public
     */
  DescribeTeam(req, cb) {
    const resp = new DescribeTeamResponse();
    this.request('DescribeTeam', req, resp, cb);
  }

  /**
   * 关联外部仓库
   * @param {BoundExternalDepotRequest} req
   * @param {function(string, BoundExternalDepotResponse):void} cb
   * @public
   */
  BoundExternalDepot(req, cb) {
    const resp = new BoundExternalDepotResponse();
    this.request('BoundExternalDepot', req, resp, cb);
  }

  /**
   * 查询单个项目下的所有构建计划
   * @param {DescribeCodingCIJobsRequest} req
   * @param {function(string, DescribeCodingCIJobsResponse):void} cb
   * @public
   */
  DescribeCodingCIJobs(req, cb) {
    const resp = new DescribeCodingCIJobsResponse();
    this.request('DescribeCodingCIJobs', req, resp, cb);
  }

  /**
   * 查询项目列表
   * @param {DescribeProjectLabelsRequest} req
   * @param {function(string, DescribeProjectLabelsResponse):void} cb
   * @public
   */
  DescribeProjectLabels(req, cb) {
    const resp = new DescribeProjectLabelsResponse();
    this.request('DescribeProjectLabels', req, resp, cb);
  }

  /**
   * 获取构建日志
   * @param {DescribeCodingCIBuildLogRequest} req
   * @param {function(string, DescribeCodingCIBuildLogResponse):void} cb
   * @public
   */
  DescribeCodingCIBuildLog(req, cb) {
    const resp = new DescribeCodingCIBuildLogResponse();
    this.request('DescribeCodingCIBuildLog', req, resp, cb);
  }

  /**
   * 获取构建任务阶段
   * @param {DescribeCodingCIBuildStageRequest} req
   * @param {function(string, DescribeCodingCIBuildStageResponse):void} cb
   * @public
   */
  DescribeCodingCIBuildStage(req, cb) {
    const resp = new DescribeCodingCIBuildStageResponse();
    this.request('DescribeCodingCIBuildStage', req, resp, cb);
  }

  /**
   * 获取团队下的自己可访问的所有仓库
   * @param {DescribeTeamDepotsRequest} req
   * @param {function(string, DescribeTeamDepotsResponse):void} cb
   * @public
   */
  DescribeTeamDepots(req, cb) {
    const resp = new DescribeTeamDepotsResponse();
    this.request('DescribeTeamDepots', req, resp, cb);
  }

  /**
   * 测试
   * @param {TestRequest} req
   * @param {function(string, TestResponse):void} cb
   * @public
   */
  Test(req, cb) {
    const resp = new TestResponse();
    this.request('Test', req, resp, cb);
  }

  /**
   * 获取个人外部仓库
   * @param {DescribePersonalExternalDepotsRequest} req
   * @param {function(string, DescribePersonalExternalDepotsResponse):void} cb
   * @public
   */
  DescribePersonalExternalDepots(req, cb) {
    const resp = new DescribePersonalExternalDepotsResponse();
    this.request('DescribePersonalExternalDepots', req, resp, cb);
  }

  /**
   * 获取制品临时下载地址，目前仅支持 Generic 及 Helm 仓库
   * @param {DescribeArtifactDownloadUrlRequest} req
   * @param {function(string, DescribeArtifactDownloadUrlResponse):void} cb
   * @public
   */
  DescribeArtifactDownloadUrl(req, cb) {
    const resp = new DescribeArtifactDownloadUrlResponse();
    this.request('DescribeArtifactDownloadUrl', req, resp, cb);
  }

  /**
   * 查询单个CI 任务。
   * @param {DescribeOneJobRequest} req
   * @param {function(string, DescribeOneJobResponse):void} cb
   * @public
   */
  DescribeOneJob(req, cb) {
    const resp = new DescribeOneJobResponse();
    this.request('DescribeOneJob', req, resp, cb);
  }

  /**
   * 查询当前用户信息
   * @param {DescribeCurrentUserRequest} req
   * @param {function(string, DescribeCurrentUserResponse):void} cb
   * @public
   */
  DescribeCurrentUser(req, cb) {
    const resp = new DescribeCurrentUserResponse();
    this.request('DescribeCurrentUser', req, resp, cb);
  }

  /**
   * 创建制品仓库
   * @param {CreateArtifactRepositoryRequest} req
   * @param {function(string, CreateArtifactRepositoryResponse):void} cb
   * @public
   */
  CreateArtifactRepository(req, cb) {
    const resp = new CreateArtifactRepositoryResponse();
    this.request('CreateArtifactRepository', req, resp, cb);
  }

  /**
   * 创建指定项目的 CI 任务
   * @param {CreateJobRequest} req
   * @param {function(string, CreateJobResponse):void} cb
   * @public
   */
  CreateJob(req, cb) {
    const resp = new CreateJobResponse();
    this.request('CreateJob', req, resp, cb);
  }

  /**
   * 查询构建记录详情
   * @param {DescribeCodingCIBuildRequest} req
   * @param {function(string, DescribeCodingCIBuildResponse):void} cb
   * @public
   */
  DescribeCodingCIBuild(req, cb) {
    const resp = new DescribeCodingCIBuildResponse();
    this.request('DescribeCodingCIBuild', req, resp, cb);
  }

  /**
   * 触发指定项目指定 CI 构建。
   * @param {TriggerBuildRequest} req
   * @param {function(string, TriggerBuildResponse):void} cb
   * @public
   */
  TriggerBuild(req, cb) {
    const resp = new TriggerBuildResponse();
    this.request('TriggerBuild', req, resp, cb);
  }

  /**
   * 删除构建计划
   * @param {DeleteCodingCIJobRequest} req
   * @param {function(string, DeleteCodingCIJobResponse):void} cb
   * @public
   */
  DeleteCodingCIJob(req, cb) {
    const resp = new DeleteCodingCIJobResponse();
    this.request('DeleteCodingCIJob', req, resp, cb);
  }

  /**
   * 获取项目凭据列表
   * @param {DescribeProjectCredentialsRequest} req
   * @param {function(string, DescribeProjectCredentialsResponse):void} cb
   * @public
   */
  DescribeProjectCredentials(req, cb) {
    const resp = new DescribeProjectCredentialsResponse();
    this.request('DescribeProjectCredentials', req, resp, cb);
  }

  /**
   * 增加企业成员
   * @param {CreateEnterpriseMemberRequest} req
   * @param {function(string, CreateEnterpriseMemberResponse):void} cb
   * @public
   */
  CreateEnterpriseMember(req, cb) {
    const resp = new CreateEnterpriseMemberResponse();
    this.request('CreateEnterpriseMember', req, resp, cb);
  }

  /**
   * 增加项目成员
   * @param {CreateProjectMemberRequest} req
   * @param {function(string, CreateProjectMemberResponse):void} cb
   * @public
   */
  CreateProjectMember(req, cb) {
    const resp = new CreateProjectMemberResponse();
    this.request('CreateProjectMember', req, resp, cb);
  }

  /**
   * 获取仓库的标签列表
   * @param {DescribeProjectDepotTagsRequest} req
   * @param {function(string, DescribeProjectDepotTagsResponse):void} cb
   * @public
   */
  DescribeProjectDepotTags(req, cb) {
    const resp = new DescribeProjectDepotTagsResponse();
    this.request('DescribeProjectDepotTags', req, resp, cb);
  }

  /**
   * 是否开通CODING DevOps
   * @param {DescribeEnterpriseStatusRequest} req
   * @param {function(string, DescribeEnterpriseStatusResponse):void} cb
   * @public
   */
  DescribeEnterpriseStatus(req, cb) {
    const resp = new DescribeEnterpriseStatusResponse();
    this.request('DescribeEnterpriseStatus', req, resp, cb);
  }

  /**
   * 通过模板创建构建计划
   * @param {CreateCodingCIJobByTemplateRequest} req
   * @param {function(string, CreateCodingCIJobByTemplateResponse):void} cb
   * @public
   */
  CreateCodingCIJobByTemplate(req, cb) {
    const resp = new CreateCodingCIJobByTemplateResponse();
    this.request('CreateCodingCIJobByTemplate', req, resp, cb);
  }

  /**
   * 创建构建计划
   * @param {CreateCodingCIJobRequest} req
   * @param {function(string, CreateCodingCIJobResponse):void} cb
   * @public
   */
  CreateCodingCIJob(req, cb) {
    const resp = new CreateCodingCIJobResponse();
    this.request('CreateCodingCIJob', req, resp, cb);
  }

  /**
   * 停止构建
   * @param {StopCodingCIBuildRequest} req
   * @param {function(string, StopCodingCIBuildResponse):void} cb
   * @public
   */
  StopCodingCIBuild(req, cb) {
    const resp = new StopCodingCIBuildResponse();
    this.request('StopCodingCIBuild', req, resp, cb);
  }

  /**
   * 获取构建计划的构建列表
   * @param {DescribeCodingCIBuildsRequest} req
   * @param {function(string, DescribeCodingCIBuildsResponse):void} cb
   * @public
   */
  DescribeCodingCIBuilds(req, cb) {
    const resp = new DescribeCodingCIBuildsResponse();
    this.request('DescribeCodingCIBuilds', req, resp, cb);
  }

  /**
   * 查询构建完整日志（原始日志 Raw）
   * @param {DescribeCodingCIBuildLogRawRequest} req
   * @param {function(string, DescribeCodingCIBuildLogRawResponse):void} cb
   * @public
   */
  DescribeCodingCIBuildLogRaw(req, cb) {
    const resp = new DescribeCodingCIBuildLogRawResponse();
    this.request('DescribeCodingCIBuildLogRaw', req, resp, cb);
  }

  /**
   * 获取分支下的提交列表
   * @param {DescribeProjectDepotCommitsRequest} req
   * @param {function(string, DescribeProjectDepotCommitsResponse):void} cb
   * @public
   */
  DescribeProjectDepotCommits(req, cb) {
    const resp = new DescribeProjectDepotCommitsResponse();
    this.request('DescribeProjectDepotCommits', req, resp, cb);
  }

  /**
   * 本接口 (DescribeProjects) 查询项目列表。
   * @param {DescribeProjectsRequest} req
   * @param {function(string, DescribeProjectsResponse):void} cb
   * @public
   */
  DescribeProjects(req, cb) {
    const resp = new DescribeProjectsResponse();
    this.request('DescribeProjects', req, resp, cb);
  }

  /**
     * 查询项目信息。

可使用项目 ID 或项目名称来获取单个项目信息。
如果二者都填默认使用项目 ID 查询。
     * @param {DescribeProjectRequest} req
     * @param {function(string, DescribeProjectResponse):void} cb
     * @public
     */
  DescribeProject(req, cb) {
    const resp = new DescribeProjectResponse();
    this.request('DescribeProject', req, resp, cb);
  }

  /**
   * 获取仓库分支列表
   * @param {DescribeProjectDepotBranchesRequest} req
   * @param {function(string, DescribeProjectDepotBranchesResponse):void} cb
   * @public
   */
  DescribeProjectDepotBranches(req, cb) {
    const resp = new DescribeProjectDepotBranchesResponse();
    this.request('DescribeProjectDepotBranches', req, resp, cb);
  }

  /**
   * 创建项目。
   * @param {CreateProjectRequest} req
   * @param {function(string, CreateProjectResponse):void} cb
   * @public
   */
  CreateProject(req, cb) {
    const resp = new CreateProjectResponse();
    this.request('CreateProject', req, resp, cb);
  }

  /**
   * 删除单个CI 任务。
   * @param {DeleteJobRequest} req
   * @param {function(string, DeleteJobResponse):void} cb
   * @public
   */
  DeleteJob(req, cb) {
    const resp = new DeleteJobResponse();
    this.request('DeleteJob', req, resp, cb);
  }

  /**
   * 查询单个构建。
   * @param {DescribeBuildRequest} req
   * @param {function(string, DescribeBuildResponse):void} cb
   * @public
   */
  DescribeBuild(req, cb) {
    const resp = new DescribeBuildResponse();
    this.request('DescribeBuild', req, resp, cb);
  }

  /**
   * 创建企业。
   * @param {CreateEnterpriseRequest} req
   * @param {function(string, CreateEnterpriseResponse):void} cb
   * @public
   */
  CreateEnterprise(req, cb) {
    const resp = new CreateEnterpriseResponse();
    this.request('CreateEnterprise', req, resp, cb);
  }

  /**
   * 修改任务。
   * @param {ModifyJobRequest} req
   * @param {function(string, ModifyJobResponse):void} cb
   * @public
   */
  ModifyJob(req, cb) {
    const resp = new ModifyJobResponse();
    this.request('ModifyJob', req, resp, cb);
  }

  /**
   * 查询仓库列表。
   * @param {DescribeRepositoryListRequest} req
   * @param {function(string, DescribeRepositoryListResponse):void} cb
   * @public
   */
  DescribeRepositoryList(req, cb) {
    const resp = new DescribeRepositoryListResponse();
    this.request('DescribeRepositoryList', req, resp, cb);
  }

  /**
   * 开通企业
   * @param {CreateCompaniesRequest} req
   * @param {function(string, CreateCompaniesResponse):void} cb
   * @public
   */
  CreateCompanies(req, cb) {
    const resp = new CreateCompaniesResponse();
    this.request('CreateCompanies', req, resp, cb);
  }

  /**
   * 测试用 - 获取一个 Job 信息， 不可公开
   * @param {DescribeTestJobRequest} req
   * @param {function(string, DescribeTestJobResponse):void} cb
   * @public
   */
  DescribeTestJob(req, cb) {
    const resp = new DescribeTestJobResponse();
    this.request('DescribeTestJob', req, resp, cb);
  }

  /**
   * 创建个人令牌
   * @param {CreatePersonalTokenRequest} req
   * @param {function(string, CreatePersonalTokenResponse):void} cb
   * @public
   */
  CreatePersonalToken(req, cb) {
    const resp = new CreatePersonalTokenResponse();
    this.request('CreatePersonalToken', req, resp, cb);
  }

  /**
   * 获取项目仓库列表
   * @param {DescribeProjectDepotsRequest} req
   * @param {function(string, DescribeProjectDepotsResponse):void} cb
   * @public
   */
  DescribeProjectDepots(req, cb) {
    const resp = new DescribeProjectDepotsResponse();
    this.request('DescribeProjectDepots', req, resp, cb);
  }

  /**
   * 获取构建计划详情
   * @param {DescribeCodingCIJobRequest} req
   * @param {function(string, DescribeCodingCIJobResponse):void} cb
   * @public
   */
  DescribeCodingCIJob(req, cb) {
    const resp = new DescribeCodingCIJobResponse();
    this.request('DescribeCodingCIJob', req, resp, cb);
  }

  /**
   * 获取构建步骤日志
   * @param {DescribeCodingCIBuildStepLogRequest} req
   * @param {function(string, DescribeCodingCIBuildStepLogResponse):void} cb
   * @public
   */
  DescribeCodingCIBuildStepLog(req, cb) {
    const resp = new DescribeCodingCIBuildStepLogResponse();
    this.request('DescribeCodingCIBuildStepLog', req, resp, cb);
  }
}
module.exports = CodingClient;
