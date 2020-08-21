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
const AbstractModel = require('../../common/abstract_model');

/**
 * DescribeProjectDepotBranches返回参数结构体
 * @class
 */
class DescribeProjectDepotBranchesResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 返回 Branch 数据结构
     * @type {DepotDetailData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DepotDetailData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateEnterprise返回参数结构体
 * @class
 */
class CreateEnterpriseResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 环境变量配置
 * @class
 */
class CodingCIJobEnv extends AbstractModel {
  constructor() {
    super();

    /**
     * 环境变量名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 环境变量值
     * @type {string || null}
     */
    this.Value = null;

    /**
     * 是否保密
     * @type {boolean || null}
     */
    this.Sensitive = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Name = 'Name' in params ? params.Name : null;
    this.Value = 'Value' in params ? params.Value : null;
    this.Sensitive = 'Sensitive' in params ? params.Sensitive : null;
  }
}

/**
 * 获取构建计划的构建列表
 * @class
 */
class DescribeCodingCIBuildsData extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建列表
     * @type {Array.<CodingCIBuild> || null}
     */
    this.BuildList = null;

    /**
     * 页码
     * @type {number || null}
     */
    this.PageNumber = null;

    /**
     * 总条数
     * @type {number || null}
     */
    this.TotalCount = null;

    /**
     * 每页多少条
     * @type {number || null}
     */
    this.PageSize = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.BuildList) {
      this.BuildList = [];
      for (const z of Object.values(params.BuildList)) {
        const obj = new CodingCIBuild();
        obj.deserialize(z);
        this.BuildList.push(obj);
      }
    }
    this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
    this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
    this.PageSize = 'PageSize' in params ? params.PageSize : null;
  }
}

/**
 * DescribeCodingCIJobs请求参数结构体
 * @class
 */
class DescribeCodingCIJobsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 过滤参数
     * @type {Array.<Filter> || null}
     */
    this.Filter = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;

    if (params.Filter) {
      this.Filter = [];
      for (const z of Object.values(params.Filter)) {
        const obj = new Filter();
        obj.deserialize(z);
        this.Filter.push(obj);
      }
    }
  }
}

/**
 * ModifyJob返回参数结构体
 * @class
 */
class ModifyJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeCodingCIBuildLogRaw返回参数结构体
 * @class
 */
class DescribeCodingCIBuildLogRawResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建原始日志
     * @type {DescribeCodingCIBuildLogRawData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DescribeCodingCIBuildLogRawData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 凭据结构
 * @class
 */
class Credential extends AbstractModel {
  constructor() {
    super();

    /**
     * 凭据唯一 ID
     * @type {string || null}
     */
    this.CredentialId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.CredentialId = 'CredentialId' in params ? params.CredentialId : null;
  }
}

/**
 * 构建统计数据结构
 * @class
 */
class DescribeCodingCIBuildStatisticsResponseData extends AbstractModel {
  constructor() {
    super();

    /**
     * 区间数据数组
     * @type {Array.<number> || null}
     */
    this.PointList = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.PointList = 'PointList' in params ? params.PointList : null;
  }
}

/**
 * DescribeCodingCIBuild返回参数结构体
 * @class
 */
class DescribeCodingCIBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建详情
     * @type {CodingCIBuild || null}
     */
    this.Build = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Build) {
      const obj = new CodingCIBuild();
      obj.deserialize(params.Build);
      this.Build = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeCodingCIBuildStatistics请求参数结构体
 * @class
 */
class DescribeCodingCIBuildStatisticsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 统计维度 Project 还是 Job 目前只有 Project
     * @type {string || null}
     */
    this.MetricType = null;

    /**
     * 统计间隔单位秒
     * @type {number || null}
     */
    this.Period = null;

    /**
     * 开始时间
     * @type {string || null}
     */
    this.StartTime = null;

    /**
     * 结束时间
     * @type {string || null}
     */
    this.EndTime = null;

    /**
     * MetricType 为 PROJECT 的时候使用该值，此时 JobId 可不传
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * MetricType 为 JOB 的时候使用该值，此时 ProjectId 可不传
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.MetricType = 'MetricType' in params ? params.MetricType : null;
    this.Period = 'Period' in params ? params.Period : null;
    this.StartTime = 'StartTime' in params ? params.StartTime : null;
    this.EndTime = 'EndTime' in params ? params.EndTime : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * DescribeVersionList请求参数结构体
 * @class
 */
class DescribeVersionListRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.TeamId = null;

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 页码
     * @type {number || null}
     */
    this.Offset = null;

    /**
     * 每页展示数量
     * @type {number || null}
     */
    this.Limit = null;

    /**
     * 制品库名
     * @type {string || null}
     */
    this.RepositoryName = null;

    /**
     * 制品库包名
     * @type {string || null}
     */
    this.PackageName = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Offset = 'Offset' in params ? params.Offset : null;
    this.Limit = 'Limit' in params ? params.Limit : null;
    this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
    this.PackageName = 'PackageName' in params ? params.PackageName : null;
  }
}

/**
 * CreateProjectMember返回参数结构体
 * @class
 */
class CreateProjectMemberResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeOneJob请求参数结构体
 * @class
 */
class DescribeOneJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * CreateCompanies返回参数结构体
 * @class
 */
class CreateCompaniesResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 用户信息
     * @type {User || null}
     */
    this.User = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.User) {
      const obj = new User();
      obj.deserialize(params.User);
      this.User = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeProjectDepotCommits请求参数结构体
 * @class
 */
class DescribeProjectDepotCommitsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 Id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库 Id
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;

    /**
     * 分支名称
     * @type {string || null}
     */
    this.Branch = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Id = 'Id' in params ? params.Id : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
    this.Branch = 'Branch' in params ? params.Branch : null;
  }
}

/**
 * DescribeCodingCIJob返回参数结构体
 * @class
 */
class DescribeCodingCIJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建计划详情
     * @type {CodingCIJob || null}
     */
    this.Job = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Job) {
      const obj = new CodingCIJob();
      obj.deserialize(params.Job);
      this.Job = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeCodingCIBuildLog请求参数结构体
 * @class
 */
class DescribeCodingCIBuildLogRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.BuildId = null;

    /**
     * 日志的开始位置
     * @type {number || null}
     */
    this.Start = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.BuildId = 'BuildId' in params ? params.BuildId : null;
    this.Start = 'Start' in params ? params.Start : null;
  }
}

/**
 * DescribeCodingCIBuildStage返回参数结构体
 * @class
 */
class DescribeCodingCIBuildStageResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 包含步骤返回信息
     * @type {CodingCIBuildStageData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new CodingCIBuildStageData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * ModifyJob请求参数结构体
 * @class
 */
class ModifyJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 代码仓库名称
     * @type {string || null}
     */
    this.DepotName = null;

    /**
     * 任务名称
     * @type {string || null}
     */
    this.Name = null;

    /**
         * 执行方式
0; // standalone，已废弃
1; // cvm, 默认用这个
2; // used for private deploy
         * @type {number || null}
         */
    this.ExecuteIn = null;

    /**
         * 触发机制
0; // 代码更新触发
1; // 定时触发
2; // MR变动触发
         * @type {Array.<number> || null}
         */
    this.TriggerMethods = null;

    /**
         * 代码更新触发匹配规则
0; // 选择指定分支更新时触发
1; // 推送标签时触发
2; // 推送分支时触发
3; // 自定义触发条件正则表达式
         * @type {number || null}
         */
    this.HookType = null;

    /**
     * hookType 为 DEFAULT 时须指定
     * @type {string || null}
     */
    this.BranchSelector = null;

    /**
     * hookType 为 CUSTOME 时须指定
     * @type {string || null}
     */
    this.BranchRegex = null;

    /**
         * Jenkinsfile source 来源
0; // 来源仓库
1; // 静态输入的，需要指定字段
         * @type {number || null}
         */
    this.JenkinsFileFromType = null;

    /**
     * jenkinsFileFromType 为 SCM 时须指定
     * @type {string || null}
     */
    this.JenkinsFilePath = null;

    /**
     * jenkinsFileFromType 为 STATIC 时须指定
     * @type {string || null}
     */
    this.JenkinsFileStaticContent = null;

    /**
     * 自动取消相同版本
     * @type {boolean || null}
     */
    this.AutoCancelSameRevision = null;

    /**
     * 自动取消相同 MR
     * @type {boolean || null}
     */
    this.AutoCancelSameMergeRequest = null;

    /**
         * 构建结果通知触发者机制
0; // 总是通知
1; // 仅构建失败时通知
         * @type {number || null}
         */
    this.TriggerRemind = null;

    /**
     * 任务缓存目录配置
     * @type {Array.<CIJobCachePath> || null}
     */
    this.CachePaths = null;

    /**
     * 环境变量配置
     * @type {Array.<CIJobEnv> || null}
     */
    this.Envs = null;

    /**
     * 针对 CRON triggerMethod 的 schedule 规则配置, 暂只用于添加
     * @type {Array.<CIJobSchedule> || null}
     */
    this.Schedules = null;

    /**
     * 不管构建成功还是失败总是通知的用户
     * @type {Array.<number> || null}
     */
    this.AlwaysUserIds = null;

    /**
     * 仅构建失败时要通知的用户
     * @type {Array.<number> || null}
     */
    this.BuildFailIds = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.DepotName = 'DepotName' in params ? params.DepotName : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.ExecuteIn = 'ExecuteIn' in params ? params.ExecuteIn : null;
    this.TriggerMethods = 'TriggerMethods' in params ? params.TriggerMethods : null;
    this.HookType = 'HookType' in params ? params.HookType : null;
    this.BranchSelector = 'BranchSelector' in params ? params.BranchSelector : null;
    this.BranchRegex = 'BranchRegex' in params ? params.BranchRegex : null;
    this.JenkinsFileFromType = 'JenkinsFileFromType' in params ? params.JenkinsFileFromType : null;
    this.JenkinsFilePath = 'JenkinsFilePath' in params ? params.JenkinsFilePath : null;
    this.JenkinsFileStaticContent =
      'JenkinsFileStaticContent' in params ? params.JenkinsFileStaticContent : null;
    this.AutoCancelSameRevision =
      'AutoCancelSameRevision' in params ? params.AutoCancelSameRevision : null;
    this.AutoCancelSameMergeRequest =
      'AutoCancelSameMergeRequest' in params ? params.AutoCancelSameMergeRequest : null;
    this.TriggerRemind = 'TriggerRemind' in params ? params.TriggerRemind : null;

    if (params.CachePaths) {
      this.CachePaths = [];
      for (const z of Object.values(params.CachePaths)) {
        const obj = new CIJobCachePath();
        obj.deserialize(z);
        this.CachePaths.push(obj);
      }
    }

    if (params.Envs) {
      this.Envs = [];
      for (const z of Object.values(params.Envs)) {
        const obj = new CIJobEnv();
        obj.deserialize(z);
        this.Envs.push(obj);
      }
    }

    if (params.Schedules) {
      this.Schedules = [];
      for (const z of Object.values(params.Schedules)) {
        const obj = new CIJobSchedule();
        obj.deserialize(z);
        this.Schedules.push(obj);
      }
    }
    this.AlwaysUserIds = 'AlwaysUserIds' in params ? params.AlwaysUserIds : null;
    this.BuildFailIds = 'BuildFailIds' in params ? params.BuildFailIds : null;
  }
}

/**
 * 项目信息
 * @class
 */
class Project extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.CreatedAt = null;

    /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.UpdatedAt = null;

    /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.Status = null;

    /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.Type = null;

    /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Name = null;

    /**
         * 显示名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DisplayName = null;

    /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Description = null;

    /**
         * 图标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Icon = null;

    /**
         * 团队 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.TeamId = null;

    /**
         * 是否为模板项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.IsDemo = null;

    /**
         * 最大团员数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.MaxMember = null;

    /**
         * 个人所有者 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.UserOwnerId = null;

    /**
         * 是否压缩
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.Archived = null;

    /**
         * 项目开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.StartDate = null;

    /**
         * 团队所有者 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.TeamOwnerId = null;

    /**
         * 项目结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.EndDate = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.Type = 'Type' in params ? params.Type : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
    this.Description = 'Description' in params ? params.Description : null;
    this.Icon = 'Icon' in params ? params.Icon : null;
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.IsDemo = 'IsDemo' in params ? params.IsDemo : null;
    this.MaxMember = 'MaxMember' in params ? params.MaxMember : null;
    this.UserOwnerId = 'UserOwnerId' in params ? params.UserOwnerId : null;
    this.Archived = 'Archived' in params ? params.Archived : null;
    this.StartDate = 'StartDate' in params ? params.StartDate : null;
    this.TeamOwnerId = 'TeamOwnerId' in params ? params.TeamOwnerId : null;
    this.EndDate = 'EndDate' in params ? params.EndDate : null;
  }
}

/**
 * 构建完整的日志
 * @class
 */
class DescribeCodingCIBuildLogRawData extends AbstractModel {
  constructor() {
    super();

    /**
     * 日志
     * @type {string || null}
     */
    this.Raw = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Raw = 'Raw' in params ? params.Raw : null;
  }
}

/**
 * 版本
 * @class
 */
class ArtifactVersion extends AbstractModel {
  constructor() {
    super();

    /**
     * 版本 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 创建时间
     * @type {number || null}
     */
    this.CreatedAt = null;

    /**
     * 更新时间
     * @type {number || null}
     */
    this.UpdatedAt = null;

    /**
     * 制品包 ID
     * @type {number || null}
     */
    this.PkgId = null;

    /**
     * 版本号
     * @type {string || null}
     */
    this.Version = null;

    /**
     * 版本哈希
     * @type {string || null}
     */
    this.Hash = null;

    /**
     * 下载量
     * @type {number || null}
     */
    this.DownloadCount = null;

    /**
     * 上传者名称
     * @type {string || null}
     */
    this.Uploader = null;

    /**
     * 上传者 id
     * @type {number || null}
     */
    this.UploaderId = null;

    /**
     * 版本描述
     * @type {string || null}
     */
    this.Description = null;

    /**
     * 发布状态
     * @type {number || null}
     */
    this.ReleaseStatus = null;

    /**
         * 删除时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.DeletedAt = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.PkgId = 'PkgId' in params ? params.PkgId : null;
    this.Version = 'Version' in params ? params.Version : null;
    this.Hash = 'Hash' in params ? params.Hash : null;
    this.DownloadCount = 'DownloadCount' in params ? params.DownloadCount : null;
    this.Uploader = 'Uploader' in params ? params.Uploader : null;
    this.UploaderId = 'UploaderId' in params ? params.UploaderId : null;
    this.Description = 'Description' in params ? params.Description : null;
    this.ReleaseStatus = 'ReleaseStatus' in params ? params.ReleaseStatus : null;
    this.DeletedAt = 'DeletedAt' in params ? params.DeletedAt : null;
  }
}

/**
 * CreateCompanies请求参数结构体
 * @class
 */
class CreateCompaniesRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * team domain
     * @type {string || null}
     */
    this.Domain = null;

    /**
     * 公司名 company name
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 注册 ip
     * @type {string || null}
     */
    this.Ip = null;

    /**
     * 腾讯云用户信息
     * @type {RegistryUser || null}
     */
    this.RegistryUser = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Domain = 'Domain' in params ? params.Domain : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.Ip = 'Ip' in params ? params.Ip : null;

    if (params.RegistryUser) {
      const obj = new RegistryUser();
      obj.deserialize(params.RegistryUser);
      this.RegistryUser = obj;
    }
  }
}

/**
 * DescribeListBuild请求参数结构体
 * @class
 */
class DescribeListBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;

    /**
     * 请求页
     * @type {number || null}
     */
    this.Page = null;

    /**
     * 分页大小
     * @type {number || null}
     */
    this.PageSize = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
    this.Page = 'Page' in params ? params.Page : null;
    this.PageSize = 'PageSize' in params ? params.PageSize : null;
  }
}

/**
 * StopCodingCIBuild请求参数结构体
 * @class
 */
class StopCodingCIBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.BuildId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.BuildId = 'BuildId' in params ? params.BuildId : null;
  }
}

/**
 * DescribeProjectCredentials返回参数结构体
 * @class
 */
class DescribeProjectCredentialsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 获取凭据列表
     * @type {DescribeProjectCredentialsData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DescribeProjectCredentialsData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * Test请求参数结构体
 * @class
 */
class TestRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 无
     * @type {number || null}
     */
    this.Qq = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Qq = 'Qq' in params ? params.Qq : null;
  }
}

/**
 * DescribeCodingCIJobs返回参数结构体
 * @class
 */
class DescribeCodingCIJobsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * CI 任务列表
     * @type {Array.<CodingCIJob> || null}
     */
    this.JobList = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.JobList) {
      this.JobList = [];
      for (const z of Object.values(params.JobList)) {
        const obj = new CodingCIJob();
        obj.deserialize(z);
        this.JobList.push(obj);
      }
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeListBuild返回参数结构体
 * @class
 */
class DescribeListBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 请求页
     * @type {number || null}
     */
    this.Offset = null;

    /**
     * 分页大小
     * @type {number || null}
     */
    this.Size = null;

    /**
     * 总个数
     * @type {number || null}
     */
    this.TotalCount = null;

    /**
         * 构建列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CIBuild> || null}
         */
    this.InstanceSet = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Offset = 'Offset' in params ? params.Offset : null;
    this.Size = 'Size' in params ? params.Size : null;
    this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    if (params.InstanceSet) {
      this.InstanceSet = [];
      for (const z of Object.values(params.InstanceSet)) {
        const obj = new CIBuild();
        obj.deserialize(z);
        this.InstanceSet.push(obj);
      }
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 获取个人仓库返回结构
 * @class
 */
class CodingCIPersonalExternalDepotData extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库列表
     * @type {Array.<CodingCIPersonalExternalDepot> || null}
     */
    this.DepotList = null;

    /**
     * 仓库类型是否被授权，如 Github 是否被授权
     * @type {boolean || null}
     */
    this.IsBound = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.DepotList) {
      this.DepotList = [];
      for (const z of Object.values(params.DepotList)) {
        const obj = new CodingCIPersonalExternalDepot();
        obj.deserialize(z);
        this.DepotList.push(obj);
      }
    }
    this.IsBound = 'IsBound' in params ? params.IsBound : null;
  }
}

/**
 * StopBuild返回参数结构体
 * @class
 */
class StopBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreatePersonalToken请求参数结构体
 * @class
 */
class CreatePersonalTokenRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 令牌作用域
     * @type {Array.<string> || null}
     */
    this.ScopeList = null;

    /**
     * 项目 Id 该字段不用填
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 个人令牌描述，不可重复，不填会默认帮生成
     * @type {string || null}
     */
    this.Description = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ScopeList = 'ScopeList' in params ? params.ScopeList : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Description = 'Description' in params ? params.Description : null;
  }
}

/**
 * DeleteCodingCIBuild请求参数结构体
 * @class
 */
class DeleteCodingCIBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.BuildId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.BuildId = 'BuildId' in params ? params.BuildId : null;
  }
}

/**
 * DescribeVersionList返回参数结构体
 * @class
 */
class DescribeVersionListResponse extends AbstractModel {
  constructor() {
    super();

    /**
         * 版本列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ArtifactVersion> || null}
         */
    this.InstanceSet = null;

    /**
     * 请求页
     * @type {number || null}
     */
    this.Offset = null;

    /**
     * 分页大小
     * @type {number || null}
     */
    this.Size = null;

    /**
     * 数据总数
     * @type {number || null}
     */
    this.TotalCount = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.InstanceSet) {
      this.InstanceSet = [];
      for (const z of Object.values(params.InstanceSet)) {
        const obj = new ArtifactVersion();
        obj.deserialize(z);
        this.InstanceSet.push(obj);
      }
    }
    this.Offset = 'Offset' in params ? params.Offset : null;
    this.Size = 'Size' in params ? params.Size : null;
    this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DeleteBuild返回参数结构体
 * @class
 */
class DeleteBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateProject请求参数结构体
 * @class
 */
class CreateProjectRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * team gk
     * @type {string || null}
     */
    this.TeamGk = null;

    /**
     * user gk
     * @type {string || null}
     */
    this.UserGk = null;

    /**
     * 项目名
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 项目 display name
     * @type {string || null}
     */
    this.DisplayName = null;

    /**
     * 项目描述
     * @type {string || null}
     */
    this.Description = null;

    /**
     * 启用：true，禁用：false
     * @type {boolean || null}
     */
    this.GitEnabled = null;

    /**
     * 非必填，git ignore文件类型
     * @type {string || null}
     */
    this.GitIgnore = null;

    /**
     * "true"|"false"
     * @type {string || null}
     */
    this.GitReadmeEnabled = null;

    /**
     * license
     * @type {string || null}
     */
    this.GitLicense = null;

    /**
     * git｜svn｜hg
     * @type {string || null}
     */
    this.VcsType = null;

    /**
     * "true"|"false"
     * @type {string || null}
     */
    this.CreateSvnLayout = null;

    /**
     * 非必填，项目开始时间
     * @type {number || null}
     */
    this.StartDate = null;

    /**
     * 非必填，项目结束时间
     * @type {number || null}
     */
    this.EndDate = null;

    /**
     * 0： 不公开 1：公开源代码（公开后，任何人都可以访问代码仓库，请慎重考虑！
     * @type {number || null}
     */
    this.Shared = null;

    /**
         * 非必填，设置空字符串
使用预置代码模板初始化仓库，java|ror|sinatra
         * @type {string || null}
         */
    this.Template = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.TeamGk = 'TeamGk' in params ? params.TeamGk : null;
    this.UserGk = 'UserGk' in params ? params.UserGk : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
    this.Description = 'Description' in params ? params.Description : null;
    this.GitEnabled = 'GitEnabled' in params ? params.GitEnabled : null;
    this.GitIgnore = 'GitIgnore' in params ? params.GitIgnore : null;
    this.GitReadmeEnabled = 'GitReadmeEnabled' in params ? params.GitReadmeEnabled : null;
    this.GitLicense = 'GitLicense' in params ? params.GitLicense : null;
    this.VcsType = 'VcsType' in params ? params.VcsType : null;
    this.CreateSvnLayout = 'CreateSvnLayout' in params ? params.CreateSvnLayout : null;
    this.StartDate = 'StartDate' in params ? params.StartDate : null;
    this.EndDate = 'EndDate' in params ? params.EndDate : null;
    this.Shared = 'Shared' in params ? params.Shared : null;
    this.Template = 'Template' in params ? params.Template : null;
  }
}

/**
 * DescribeProjectDepots返回参数结构体
 * @class
 */
class DescribeProjectDepotsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 获取仓库列表
     * @type {DescribeProjectDepotsData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DescribeProjectDepotsData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeProject返回参数结构体
 * @class
 */
class DescribeProjectResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.CreatedAt = null;

    /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.UpdatedAt = null;

    /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.Status = null;

    /**
         * 类型
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.Type = null;

    /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Name = null;

    /**
         * 显示名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DisplayName = null;

    /**
         * 描述
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Description = null;

    /**
         * 图标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Icon = null;

    /**
         * 团队 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.TeamId = null;

    /**
         * 是否为模板项目
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.IsDemo = null;

    /**
         * 最大团员数
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.MaxMember = null;

    /**
         * 个人所有者 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.UserOwnerId = null;

    /**
         * 是否压缩
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.Archived = null;

    /**
         * 项目开始时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.StartDate = null;

    /**
         * 团队所有者 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.TeamOwnerId = null;

    /**
         * 项目结束时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.EndDate = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.Type = 'Type' in params ? params.Type : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
    this.Description = 'Description' in params ? params.Description : null;
    this.Icon = 'Icon' in params ? params.Icon : null;
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.IsDemo = 'IsDemo' in params ? params.IsDemo : null;
    this.MaxMember = 'MaxMember' in params ? params.MaxMember : null;
    this.UserOwnerId = 'UserOwnerId' in params ? params.UserOwnerId : null;
    this.Archived = 'Archived' in params ? params.Archived : null;
    this.StartDate = 'StartDate' in params ? params.StartDate : null;
    this.TeamOwnerId = 'TeamOwnerId' in params ? params.TeamOwnerId : null;
    this.EndDate = 'EndDate' in params ? params.EndDate : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeCodingCIBuildLog返回参数结构体
 * @class
 */
class DescribeCodingCIBuildLogResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 日志信息
     * @type {DescribeCodingCIBuildLogData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DescribeCodingCIBuildLogData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 配置团队成员权限
 * @class
 */
class EnterprisePermission extends AbstractModel {
  constructor() {
    super();

    /**
     * 功能
     * @type {string || null}
     */
    this.Function = null;

    /**
     * 方法
     * @type {string || null}
     */
    this.Action = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Function = 'Function' in params ? params.Function : null;
    this.Action = 'Action' in params ? params.Action : null;
  }
}

/**
 * CreateJob返回参数结构体
 * @class
 */
class CreateJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 构建的测试结果
 * @class
 */
class CIBuildTestResult extends AbstractModel {
  constructor() {
    super();

    /**
     * 是否空
     * @type {boolean || null}
     */
    this.Empty = null;

    /**
     * 失败次数
     * @type {number || null}
     */
    this.FailCount = null;

    /**
     * 通过次数
     * @type {number || null}
     */
    this.PassCount = null;

    /**
     * 跳过次数
     * @type {number || null}
     */
    this.SkipCount = null;

    /**
     * 总次数
     * @type {number || null}
     */
    this.TotalCount = null;

    /**
     * 时长
     * @type {number || null}
     */
    this.Duration = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Empty = 'Empty' in params ? params.Empty : null;
    this.FailCount = 'FailCount' in params ? params.FailCount : null;
    this.PassCount = 'PassCount' in params ? params.PassCount : null;
    this.SkipCount = 'SkipCount' in params ? params.SkipCount : null;
    this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
    this.Duration = 'Duration' in params ? params.Duration : null;
  }
}

/**
 * DescribePersonalExternalDepots请求参数结构体
 * @class
 */
class DescribePersonalExternalDepotsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 Id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
  }
}

/**
 * 创建凭据返回结构
 * @class
 */
class CreateProjectCredentialData extends AbstractModel {
  constructor() {
    super();

    /**
     * 创建凭据返回结构
     * @type {Credential || null}
     */
    this.Credential = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Credential) {
      const obj = new Credential();
      obj.deserialize(params.Credential);
      this.Credential = obj;
    }
  }
}

/**
 * DescribeBuild返回参数结构体
 * @class
 */
class DescribeBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建信息
     * @type {CIBuild || null}
     */
    this.Build = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Build) {
      const obj = new CIBuild();
      obj.deserialize(params.Build);
      this.Build = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeArtifactDownloadUrl请求参数结构体
 * @class
 */
class DescribeArtifactDownloadUrlRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库类型（目前仅支持 1-Generic 及 6-Helm）
     * @type {number || null}
     */
    this.Type = null;

    /**
     * 项目名称
     * @type {string || null}
     */
    this.ProjectName = null;

    /**
     * 制品仓库名称
     * @type {string || null}
     */
    this.RepositoryName = null;

    /**
     * 制品包名称
     * @type {string || null}
     */
    this.PackageName = null;

    /**
     * 制品版本号
     * @type {string || null}
     */
    this.VersionName = null;

    /**
     * 超时时长，可不填，默认5分钟，单位秒
     * @type {number || null}
     */
    this.Timeout = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Type = 'Type' in params ? params.Type : null;
    this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
    this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
    this.PackageName = 'PackageName' in params ? params.PackageName : null;
    this.VersionName = 'VersionName' in params ? params.VersionName : null;
    this.Timeout = 'Timeout' in params ? params.Timeout : null;
  }
}

/**
 * TriggerCodingCIBuild返回参数结构体
 * @class
 */
class TriggerCodingCIBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建信息
     * @type {TriggerCodingCIBuildData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new TriggerCodingCIBuildData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeProjectDepotTags返回参数结构体
 * @class
 */
class DescribeProjectDepotTagsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 返回标签列表的数据结构
     * @type {DepotDetailData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DepotDetailData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CI 任务缓存目录配置
 * @class
 */
class CIJobCachePath extends AbstractModel {
  constructor() {
    super();

    /**
     * 绝对路径
     * @type {string || null}
     */
    this.AbsolutePath = null;

    /**
     * 是否启用
     * @type {boolean || null}
     */
    this.Enabled = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.AbsolutePath = 'AbsolutePath' in params ? params.AbsolutePath : null;
    this.Enabled = 'Enabled' in params ? params.Enabled : null;
  }
}

/**
 * 封装返回值
 * @class
 */
class DescribeTeamDepotsData extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库列表
     * @type {Array.<CodingCITeamDepot> || null}
     */
    this.DepotList = null;

    /**
     * 仓库类型是否被授权，如 Github 是否被授权
     * @type {boolean || null}
     */
    this.IsBound = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.DepotList) {
      this.DepotList = [];
      for (const z of Object.values(params.DepotList)) {
        const obj = new CodingCITeamDepot();
        obj.deserialize(z);
        this.DepotList.push(obj);
      }
    }
    this.IsBound = 'IsBound' in params ? params.IsBound : null;
  }
}

/**
 * 腾讯云用户信息
 * @class
 */
class RegistryUser extends AbstractModel {
  constructor() {
    super();

    /**
     * 腾讯云账户 uin
     * @type {string || null}
     */
    this.UinId = null;

    /**
     * 腾讯云主账户 uin
     * @type {string || null}
     */
    this.OwnerUinId = null;

    /**
     * 腾讯云 appid
     * @type {string || null}
     */
    this.AppId = null;

    /**
     * 腾讯云账户名
     * @type {string || null}
     */
    this.AccountName = null;

    /**
     * 手机号
     * @type {string || null}
     */
    this.Phone = null;

    /**
     * 邮箱
     * @type {string || null}
     */
    this.Email = null;

    /**
     * 用户图像 url
     * @type {string || null}
     */
    this.Avatar = null;

    /**
     * 腾讯云sso登陆uin
     * @type {string || null}
     */
    this.SamlUinId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.UinId = 'UinId' in params ? params.UinId : null;
    this.OwnerUinId = 'OwnerUinId' in params ? params.OwnerUinId : null;
    this.AppId = 'AppId' in params ? params.AppId : null;
    this.AccountName = 'AccountName' in params ? params.AccountName : null;
    this.Phone = 'Phone' in params ? params.Phone : null;
    this.Email = 'Email' in params ? params.Email : null;
    this.Avatar = 'Avatar' in params ? params.Avatar : null;
    this.SamlUinId = 'SamlUinId' in params ? params.SamlUinId : null;
  }
}

/**
 * 制品包
 * @class
 */
class ArtifactPackage extends AbstractModel {
  constructor() {
    super();

    /**
     * 包 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 制品仓库 ID
     * @type {number || null}
     */
    this.RepoId = null;

    /**
     * 包名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 包描述
     * @type {string || null}
     */
    this.Description = null;

    /**
     * 包下的版本数量
     * @type {number || null}
     */
    this.VersionCount = null;

    /**
     * 创建时间
     * @type {number || null}
     */
    this.CreatedAt = null;

    /**
     * 更新时间
     * @type {number || null}
     */
    this.UpdatedAt = null;

    /**
     * 删除时间
     * @type {number || null}
     */
    this.DeletedAt = null;

    /**
     * 创建者 ID
     * @type {number || null}
     */
    this.CreatorId = null;

    /**
     * 最新推送版本的版本号
     * @type {string || null}
     */
    this.LatestVersionName = null;

    /**
     * 发布策略
     * @type {number || null}
     */
    this.ReleaseStrategy = null;

    /**
     * 最新推送版本的版本号 ID
     * @type {number || null}
     */
    this.LatestVersionId = null;

    /**
     * 最新推送版本的版本发布状态
     * @type {number || null}
     */
    this.LatestVersionReleaseStatus = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.RepoId = 'RepoId' in params ? params.RepoId : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.Description = 'Description' in params ? params.Description : null;
    this.VersionCount = 'VersionCount' in params ? params.VersionCount : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.DeletedAt = 'DeletedAt' in params ? params.DeletedAt : null;
    this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
    this.LatestVersionName = 'LatestVersionName' in params ? params.LatestVersionName : null;
    this.ReleaseStrategy = 'ReleaseStrategy' in params ? params.ReleaseStrategy : null;
    this.LatestVersionId = 'LatestVersionId' in params ? params.LatestVersionId : null;
    this.LatestVersionReleaseStatus =
      'LatestVersionReleaseStatus' in params ? params.LatestVersionReleaseStatus : null;
  }
}

/**
 * DeleteCodingCIJob返回参数结构体
 * @class
 */
class DeleteCodingCIJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * TriggerBuild请求参数结构体
 * @class
 */
class TriggerBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 代码版本
     * @type {string || null}
     */
    this.Revision = null;

    /**
     * 启动参数
     * @type {Array.<CIJobEnv> || null}
     */
    this.Params = null;

    /**
     * Job ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Revision = 'Revision' in params ? params.Revision : null;

    if (params.Params) {
      this.Params = [];
      for (const z of Object.values(params.Params)) {
        const obj = new CIJobEnv();
        obj.deserialize(z);
        this.Params.push(obj);
      }
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * 环境变量配置
 * @class
 */
class CIJobEnv extends AbstractModel {
  constructor() {
    super();

    /**
     * 环境变量名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 环境变量值
     * @type {string || null}
     */
    this.Value = null;

    /**
     * 是否保密
     * @type {boolean || null}
     */
    this.Sensitive = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Name = 'Name' in params ? params.Name : null;
    this.Value = 'Value' in params ? params.Value : null;
    this.Sensitive = 'Sensitive' in params ? params.Sensitive : null;
  }
}

/**
 * ModifyCodingCIJob返回参数结构体
 * @class
 */
class ModifyCodingCIJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeProjects请求参数结构体
 * @class
 */
class DescribeProjectsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 偏移量，默认为0
     * @type {number || null}
     */
    this.Offset = null;

    /**
     * 返回数量，默认为20，最大值为100
     * @type {number || null}
     */
    this.Limit = null;

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.TeamId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Offset = 'Offset' in params ? params.Offset : null;
    this.Limit = 'Limit' in params ? params.Limit : null;
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
  }
}

/**
 * DescribePersonalExternalDepots返回参数结构体
 * @class
 */
class DescribePersonalExternalDepotsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 外部仓库列表
     * @type {CodingCIPersonalExternalDepotData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new CodingCIPersonalExternalDepotData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateProjectCredential请求参数结构体
 * @class
 */
class CreateProjectCredentialRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 凭据类型，目前只支持 USERNAME_PASSWORD
     * @type {string || null}
     */
    this.CredentialType = null;

    /**
     * 凭据名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 账号
     * @type {string || null}
     */
    this.Username = null;

    /**
     * 密码
     * @type {string || null}
     */
    this.Password = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.CredentialType = 'CredentialType' in params ? params.CredentialType : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.Username = 'Username' in params ? params.Username : null;
    this.Password = 'Password' in params ? params.Password : null;
  }
}

/**
 * 创建个人令牌返回值
 * @class
 */
class CreatePersonalTokenData extends AbstractModel {
  constructor() {
    super();

    /**
     * GlobalKey相当于账号
     * @type {string || null}
     */
    this.GlobalKey = null;

    /**
     * Token 相当于密码
     * @type {string || null}
     */
    this.Token = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.GlobalKey = 'GlobalKey' in params ? params.GlobalKey : null;
    this.Token = 'Token' in params ? params.Token : null;
  }
}

/**
 * DescribeCodingCIBuildStep返回参数结构体
 * @class
 */
class DescribeCodingCIBuildStepResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * Step 信息
     * @type {CodingCIBuildStepData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new CodingCIBuildStepData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeOneProject请求参数结构体
 * @class
 */
class DescribeOneProjectRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目编号
     * @type {number || null}
     */
    this.ProjectId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
  }
}

/**
 * CreateProject返回参数结构体
 * @class
 */
class CreateProjectResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeEnterpriseStatus请求参数结构体
 * @class
 */
class DescribeEnterpriseStatusRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 腾讯云账号id
     * @type {string || null}
     */
    this.UinId = null;

    /**
     * 腾讯云主账号id
     * @type {string || null}
     */
    this.OwnerUinId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.UinId = 'UinId' in params ? params.UinId : null;
    this.OwnerUinId = 'OwnerUinId' in params ? params.OwnerUinId : null;
  }
}

/**
 * CreateCodingCIJob返回参数结构体
 * @class
 */
class CreateCodingCIJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 创建构建计划返回结构
     * @type {CreateCodingCIJobData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new CreateCodingCIJobData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateGitMergeRequest请求参数结构体
 * @class
 */
class CreateGitMergeRequestRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库 ID
     * @type {number || null}
     */
    this.DepotId = null;

    /**
     * 标题
     * @type {string || null}
     */
    this.Title = null;

    /**
     * 描述内容
     * @type {string || null}
     */
    this.Content = null;

    /**
     * 源分支名
     * @type {string || null}
     */
    this.SrcBranch = null;

    /**
     * 目标分支名
     * @type {string || null}
     */
    this.DestBranch = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.DepotId = 'DepotId' in params ? params.DepotId : null;
    this.Title = 'Title' in params ? params.Title : null;
    this.Content = 'Content' in params ? params.Content : null;
    this.SrcBranch = 'SrcBranch' in params ? params.SrcBranch : null;
    this.DestBranch = 'DestBranch' in params ? params.DestBranch : null;
  }
}

/**
 * DescribeProjectLabels返回参数结构体
 * @class
 */
class DescribeProjectLabelsResponse extends AbstractModel {
  constructor() {
    super();

    /**
         * 项目列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Project> || null}
         */
    this.ProjectList = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.ProjectList) {
      this.ProjectList = [];
      for (const z of Object.values(params.ProjectList)) {
        const obj = new Project();
        obj.deserialize(z);
        this.ProjectList.push(obj);
      }
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateProjectWithTemplate请求参数结构体
 * @class
 */
class CreateProjectWithTemplateRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目标识
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 项目名称
     * @type {string || null}
     */
    this.DisplayName = null;

    /**
     * 启用 README.md 文件初始化项目 true|false
     * @type {boolean || null}
     */
    this.GitReadmeEnabled = null;

    /**
     * git｜svn｜hg
     * @type {string || null}
     */
    this.VcsType = null;

    /**
     * 是否创建 SVN 仓库推荐布局 默认false
     * @type {boolean || null}
     */
    this.CreateSvnLayout = null;

    /**
     * 0： 不公开 1：公开源代码
     * @type {number || null}
     */
    this.Shared = null;

    /**
     * 项目模版 CODE_HOST 代码托管项目， PROJECT_MANAGE 项目管理项目， DEV_OPS DevOps项目， DEMO_BEGIN 范例项目
     * @type {string || null}
     */
    this.ProjectTemplate = null;

    /**
     * 标签(TKE、TCB)
     * @type {string || null}
     */
    this.Label = null;

    /**
     * 隐藏项目在 CODING 入口不可见  true 不可见|false 可见
     * @type {boolean || null}
     */
    this.Invisible = null;

    /**
     * 项目描述
     * @type {string || null}
     */
    this.Description = null;

    /**
     * 项目图标
     * @type {string || null}
     */
    this.Icon = null;

    /**
     * git ignore 文件类型
     * @type {string || null}
     */
    this.GitIgnore = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Name = 'Name' in params ? params.Name : null;
    this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
    this.GitReadmeEnabled = 'GitReadmeEnabled' in params ? params.GitReadmeEnabled : null;
    this.VcsType = 'VcsType' in params ? params.VcsType : null;
    this.CreateSvnLayout = 'CreateSvnLayout' in params ? params.CreateSvnLayout : null;
    this.Shared = 'Shared' in params ? params.Shared : null;
    this.ProjectTemplate = 'ProjectTemplate' in params ? params.ProjectTemplate : null;
    this.Label = 'Label' in params ? params.Label : null;
    this.Invisible = 'Invisible' in params ? params.Invisible : null;
    this.Description = 'Description' in params ? params.Description : null;
    this.Icon = 'Icon' in params ? params.Icon : null;
    this.GitIgnore = 'GitIgnore' in params ? params.GitIgnore : null;
  }
}

/**
 * DeleteJob请求参数结构体
 * @class
 */
class DeleteJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * 个人外部仓库返回结构
 * @class
 */
class CodingCIPersonalExternalDepot extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库 Id
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 仓库名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;

    /**
     * 请使用 Authorized 代替判断仓库是否关联，该仓库是否 CI 可用，如果可用返回值为 continue_integration，如果仓库类型是 CODING 那么这个值永远是continue_integration
     * @type {string || null}
     */
    this.OpenModule = null;

    /**
     * 是否是默认显示第一位的仓库
     * @type {boolean || null}
     */
    this.IsDefault = null;

    /**
         * 仓库 Ssh 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DepotSshUrl = null;

    /**
         * 仓库 Https 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DepotHttpsUrl = null;

    /**
         * 外部仓库是否被关联
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.Authorized = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
    this.OpenModule = 'OpenModule' in params ? params.OpenModule : null;
    this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
    this.DepotSshUrl = 'DepotSshUrl' in params ? params.DepotSshUrl : null;
    this.DepotHttpsUrl = 'DepotHttpsUrl' in params ? params.DepotHttpsUrl : null;
    this.Authorized = 'Authorized' in params ? params.Authorized : null;
  }
}

/**
 * DescribePackageList请求参数结构体
 * @class
 */
class DescribePackageListRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.TeamId = null;

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 请求页
     * @type {number || null}
     */
    this.Offset = null;

    /**
     * 分页大小
     * @type {number || null}
     */
    this.Limit = null;

    /**
     * 仓库名
     * @type {string || null}
     */
    this.RepositoryName = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Offset = 'Offset' in params ? params.Offset : null;
    this.Limit = 'Limit' in params ? params.Limit : null;
    this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
  }
}

/**
 * DeleteOneProject返回参数结构体
 * @class
 */
class DeleteOneProjectResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * StopBuild请求参数结构体
 * @class
 */
class StopBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建编号
     * @type {number || null}
     */
    this.Number = null;

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Number = 'Number' in params ? params.Number : null;
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * 仓库提交信息
 * @class
 */
class CodingCIDepotDetail extends AbstractModel {
  constructor() {
    super();

    /**
     * Commit 内容
     * @type {string || null}
     */
    this.Name = null;

    /**
     * CommitId
     * @type {string || null}
     */
    this.Sha = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Name = 'Name' in params ? params.Name : null;
    this.Sha = 'Sha' in params ? params.Sha : null;
  }
}

/**
 * DescribeEnterpriseStatus返回参数结构体
 * @class
 */
class DescribeEnterpriseStatusResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 开通状态
     * @type {boolean || null}
     */
    this.OpenStatus = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.OpenStatus = 'OpenStatus' in params ? params.OpenStatus : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 团队所有者
 * @class
 */
class Owner extends AbstractModel {
  constructor() {
    super();

    /**
     * 名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 地址
     * @type {string || null}
     */
    this.Location = null;

    /**
     * ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 国家
     * @type {string || null}
     */
    this.Country = null;

    /**
     * 创建时间
     * @type {number || null}
     */
    this.CreatedAt = null;

    /**
     * 更新时间
     * @type {number || null}
     */
    this.UpdatedAt = null;

    /**
     * 最后登录时间
     * @type {number || null}
     */
    this.LastLoginedAt = null;

    /**
     * 职位
     * @type {number || null}
     */
    this.Job = null;

    /**
     * 性别
     * @type {number || null}
     */
    this.Sex = null;

    /**
     * 生日
     * @type {number || null}
     */
    this.Birthday = null;

    /**
     * 全局唯一标志
     * @type {string || null}
     */
    this.GlobalKey = null;

    /**
     * 状态
     * @type {number || null}
     */
    this.Status = null;

    /**
     * 号码校验
     * @type {number || null}
     */
    this.PhoneValidation = null;

    /**
     * 邮箱校验
     * @type {number || null}
     */
    this.EmailValidation = null;

    /**
     * 电话国际区号
     * @type {string || null}
     */
    this.PhoneCountryCode = null;

    /**
     * 名称拼音
     * @type {string || null}
     */
    this.NamePinyin = null;

    /**
     * 介绍
     * @type {string || null}
     */
    this.Introduction = null;

    /**
     * 头像
     * @type {string || null}
     */
    this.Avatar = null;

    /**
     * 邮箱
     * @type {string || null}
     */
    this.Email = null;

    /**
     * 电话
     * @type {string || null}
     */
    this.Phone = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Name = 'Name' in params ? params.Name : null;
    this.Location = 'Location' in params ? params.Location : null;
    this.Id = 'Id' in params ? params.Id : null;
    this.Country = 'Country' in params ? params.Country : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.LastLoginedAt = 'LastLoginedAt' in params ? params.LastLoginedAt : null;
    this.Job = 'Job' in params ? params.Job : null;
    this.Sex = 'Sex' in params ? params.Sex : null;
    this.Birthday = 'Birthday' in params ? params.Birthday : null;
    this.GlobalKey = 'GlobalKey' in params ? params.GlobalKey : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.PhoneValidation = 'PhoneValidation' in params ? params.PhoneValidation : null;
    this.EmailValidation = 'EmailValidation' in params ? params.EmailValidation : null;
    this.PhoneCountryCode = 'PhoneCountryCode' in params ? params.PhoneCountryCode : null;
    this.NamePinyin = 'NamePinyin' in params ? params.NamePinyin : null;
    this.Introduction = 'Introduction' in params ? params.Introduction : null;
    this.Avatar = 'Avatar' in params ? params.Avatar : null;
    this.Email = 'Email' in params ? params.Email : null;
    this.Phone = 'Phone' in params ? params.Phone : null;
  }
}

/**
 * ModifyProjectPermission返回参数结构体
 * @class
 */
class ModifyProjectPermissionResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 触发构建返回数据
 * @class
 */
class TriggerCodingCIBuildData extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建信息
     * @type {CodingCIBuild || null}
     */
    this.Build = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Build) {
      const obj = new CodingCIBuild();
      obj.deserialize(params.Build);
      this.Build = obj;
    }
  }
}

/**
 * DescribeCodingCIBuildStage请求参数结构体
 * @class
 */
class DescribeCodingCIBuildStageRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.BuildId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.BuildId = 'BuildId' in params ? params.BuildId : null;
  }
}

/**
 * DescribeTestJob请求参数结构体
 * @class
 */
class DescribeTestJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * Job ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * DeleteJob返回参数结构体
 * @class
 */
class DeleteJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateProjectToken返回参数结构体
 * @class
 */
class CreateProjectTokenResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目令牌返回值
     * @type {CreateProjectTokenData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new CreateProjectTokenData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateCodingCIJob请求参数结构体
 * @class
 */
class CreateCodingCIJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库 ID
     * @type {number || null}
     */
    this.DepotId = null;

    /**
     * 构建计划名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 执行方式 CVM | STATIC
     * @type {string || null}
     */
    this.ExecuteIn = null;

    /**
         * REF_CHANGE 代码更新触发
    CRON = 1 定时触发
    MR_CHANGE  MR变动触发
         * @type {Array.<string> || null}
         */
    this.TriggerMethodList = null;

    /**
     * 代码更新触发匹配规则 DEFAULT,TAG,BRANCH,CUSTOM
     * @type {string || null}
     */
    this.HookType = null;

    /**
     * STATIC，SCM 从代码库读取
     * @type {string || null}
     */
    this.JenkinsFileFromType = null;

    /**
     * 自动取消相同版本
     * @type {boolean || null}
     */
    this.AutoCancelSameRevision = null;

    /**
     * 自动取消相同 MR
     * @type {boolean || null}
     */
    this.AutoCancelSameMergeRequest = null;

    /**
         * 构建结果通知触发者机制
ALWAYS -总是通知;
BUILD_FAIL -仅构建失败时通知;
         * @type {string || null}
         */
    this.TriggerRemind = null;

    /**
     * 构建计划来源 TKE TCB
     * @type {string || null}
     */
    this.JobFromType = null;

    /**
     * 仓库类型 CODING,TGIT,GITHUB,GITLAB,GITLAB_PRIVATE,GITEE,NONE
     * @type {string || null}
     */
    this.DepotType = null;

    /**
     * hookType 为 DEFAULT 时须指定
     * @type {string || null}
     */
    this.BranchSelector = null;

    /**
     * hookType 为 CUSTOME 时须指定
     * @type {string || null}
     */
    this.BranchRegex = null;

    /**
     * JenkinsFileFromType 为 SCM 必填
     * @type {string || null}
     */
    this.JenkinsFilePath = null;

    /**
     * JenkinsFileFromType 为 STATIC 必填
     * @type {string || null}
     */
    this.JenkinsFileStaticContent = null;

    /**
     * 任务缓存目录配置
     * @type {Array.<CodingCIJobCachePath> || null}
     */
    this.CachePathList = null;

    /**
     * 环境变量配置
     * @type {Array.<CIJobEnv> || null}
     */
    this.EnvList = null;

    /**
     * 针对 CRON triggerMethod 的 schedule 规则配置, 暂只用于添加
     * @type {Array.<CodingCIJobSchedule> || null}
     */
    this.ScheduleList = null;

    /**
     * 不管构建成功还是失败总是通知的用户
     * @type {Array.<number> || null}
     */
    this.AlwaysUserIdList = null;

    /**
     * 仅构建失败时要通知的用户
     * @type {Array.<number> || null}
     */
    this.BuildFailUserIdList = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.DepotId = 'DepotId' in params ? params.DepotId : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.ExecuteIn = 'ExecuteIn' in params ? params.ExecuteIn : null;
    this.TriggerMethodList = 'TriggerMethodList' in params ? params.TriggerMethodList : null;
    this.HookType = 'HookType' in params ? params.HookType : null;
    this.JenkinsFileFromType = 'JenkinsFileFromType' in params ? params.JenkinsFileFromType : null;
    this.AutoCancelSameRevision =
      'AutoCancelSameRevision' in params ? params.AutoCancelSameRevision : null;
    this.AutoCancelSameMergeRequest =
      'AutoCancelSameMergeRequest' in params ? params.AutoCancelSameMergeRequest : null;
    this.TriggerRemind = 'TriggerRemind' in params ? params.TriggerRemind : null;
    this.JobFromType = 'JobFromType' in params ? params.JobFromType : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
    this.BranchSelector = 'BranchSelector' in params ? params.BranchSelector : null;
    this.BranchRegex = 'BranchRegex' in params ? params.BranchRegex : null;
    this.JenkinsFilePath = 'JenkinsFilePath' in params ? params.JenkinsFilePath : null;
    this.JenkinsFileStaticContent =
      'JenkinsFileStaticContent' in params ? params.JenkinsFileStaticContent : null;

    if (params.CachePathList) {
      this.CachePathList = [];
      for (const z of Object.values(params.CachePathList)) {
        const obj = new CodingCIJobCachePath();
        obj.deserialize(z);
        this.CachePathList.push(obj);
      }
    }

    if (params.EnvList) {
      this.EnvList = [];
      for (const z of Object.values(params.EnvList)) {
        const obj = new CIJobEnv();
        obj.deserialize(z);
        this.EnvList.push(obj);
      }
    }

    if (params.ScheduleList) {
      this.ScheduleList = [];
      for (const z of Object.values(params.ScheduleList)) {
        const obj = new CodingCIJobSchedule();
        obj.deserialize(z);
        this.ScheduleList.push(obj);
      }
    }
    this.AlwaysUserIdList = 'AlwaysUserIdList' in params ? params.AlwaysUserIdList : null;
    this.BuildFailUserIdList = 'BuildFailUserIdList' in params ? params.BuildFailUserIdList : null;
  }
}

/**
 * DescribeOneProject返回参数结构体
 * @class
 */
class DescribeOneProjectResponse extends AbstractModel {
  constructor() {
    super();

    /**
         * 项目信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Project || null}
         */
    this.Project = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Project) {
      const obj = new Project();
      obj.deserialize(params.Project);
      this.Project = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeTestJob返回参数结构体
 * @class
 */
class DescribeTestJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
         * Job 信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {CIJobTest || null}
         */
    this.Job = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Job) {
      const obj = new CIJobTest();
      obj.deserialize(params.Job);
      this.Job = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateArtifactRepository请求参数结构体
 * @class
 */
class CreateArtifactRepositoryRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库名称
     * @type {string || null}
     */
    this.RepositoryName = null;

    /**
     * 仓库类型:1-generic;2-docker;3-maven;4-npm;5-pypi;6-helm;7-composer;8-nuget;9-conan
     * @type {number || null}
     */
    this.Type = null;

    /**
     * 1-项目内;2-团队内;3-公开
     * @type {number || null}
     */
    this.AccessLevel = null;

    /**
     * 是否开启代理(仅支持当 Type 为 3-maven;4-npm; 5-PyPI;7-composer 时可为 true)
     * @type {boolean || null}
     */
    this.AllowProxy = null;

    /**
     * 仓库描述信息
     * @type {string || null}
     */
    this.Description = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.RepositoryName = 'RepositoryName' in params ? params.RepositoryName : null;
    this.Type = 'Type' in params ? params.Type : null;
    this.AccessLevel = 'AccessLevel' in params ? params.AccessLevel : null;
    this.AllowProxy = 'AllowProxy' in params ? params.AllowProxy : null;
    this.Description = 'Description' in params ? params.Description : null;
  }
}

/**
 * DescribeCurrentUser请求参数结构体
 * @class
 */
class DescribeCurrentUserRequest extends AbstractModel {
  // constructor() {
  //   super();
  // }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
  }
}

/**
 * DescribeRepositoryList返回参数结构体
 * @class
 */
class DescribeRepositoryListResponse extends AbstractModel {
  constructor() {
    super();

    /**
         * 仓库列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ArtifactRepository> || null}
         */
    this.InstanceSet = null;

    /**
     * 请求页
     * @type {number || null}
     */
    this.Offset = null;

    /**
     * 分页大小
     * @type {number || null}
     */
    this.Size = null;

    /**
     * 数据总数
     * @type {number || null}
     */
    this.TotalCount = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.InstanceSet) {
      this.InstanceSet = [];
      for (const z of Object.values(params.InstanceSet)) {
        const obj = new ArtifactRepository();
        obj.deserialize(z);
        this.InstanceSet.push(obj);
      }
    }
    this.Offset = 'Offset' in params ? params.Offset : null;
    this.Size = 'Size' in params ? params.Size : null;
    this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateProjectToken请求参数结构体
 * @class
 */
class CreateProjectTokenRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
  }
}

/**
 * CreateCodingCIJobByTemplate返回参数结构体
 * @class
 */
class CreateCodingCIJobByTemplateResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 创建构建计划返回结构
     * @type {CreateCodingCIJobData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new CreateCodingCIJobData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * Stage 返回结构
 * @class
 */
class CodingCIBuildStageData extends AbstractModel {
  constructor() {
    super();

    /**
     * Stage 返回字符串
     * @type {string || null}
     */
    this.StageJsonString = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.StageJsonString = 'StageJsonString' in params ? params.StageJsonString : null;
  }
}

/**
 * CI 任务缓存目录配置
 * @class
 */
class CodingCIJobCachePath extends AbstractModel {
  constructor() {
    super();

    /**
     * 绝对路径
     * @type {string || null}
     */
    this.AbsolutePath = null;

    /**
     * 是否启用
     * @type {boolean || null}
     */
    this.Enabled = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.AbsolutePath = 'AbsolutePath' in params ? params.AbsolutePath : null;
    this.Enabled = 'Enabled' in params ? params.Enabled : null;
  }
}

/**
 * DeleteBuild请求参数结构体
 * @class
 */
class DeleteBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建编号
     * @type {number || null}
     */
    this.Number = null;

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Number = 'Number' in params ? params.Number : null;
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * 用户信息
 * @class
 */
class User extends AbstractModel {
  constructor() {
    super();

    /**
     * userId
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 团队Id
     * @type {number || null}
     */
    this.TeamId = null;

    /**
     * 名称
     * @type {string || null}
     */
    this.Name = null;

    /**
         * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Email = null;

    /**
         * 电话
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Phone = null;

    /**
     * gk
     * @type {string || null}
     */
    this.GlobalKey = null;

    /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.Status = null;

    /**
     * 头像地址
     * @type {string || null}
     */
    this.Avatar = null;

    /**
     * 团队gk
     * @type {string || null}
     */
    this.TeamGlobalKey = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.Email = 'Email' in params ? params.Email : null;
    this.Phone = 'Phone' in params ? params.Phone : null;
    this.GlobalKey = 'GlobalKey' in params ? params.GlobalKey : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.Avatar = 'Avatar' in params ? params.Avatar : null;
    this.TeamGlobalKey = 'TeamGlobalKey' in params ? params.TeamGlobalKey : null;
  }
}

/**
 * DescribeRepositoryList请求参数结构体
 * @class
 */
class DescribeRepositoryListRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.TeamId = null;

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 页码
     * @type {number || null}
     */
    this.Offset = null;

    /**
     * 每页展示数量
     * @type {number || null}
     */
    this.Limit = null;

    /**
         * 制品库类型
0; // 未知
1; // GENERIC 
2; // DOCKER 
3; // MAVEN 
4; // NPM 
5; // PYPI 
6; // HELM 
7; // COMPOSER 
8; // NUGET
9; // CONAN
         * @type {number || null}
         */
    this.Type = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Offset = 'Offset' in params ? params.Offset : null;
    this.Limit = 'Limit' in params ? params.Limit : null;
    this.Type = 'Type' in params ? params.Type : null;
  }
}

/**
 * DescribeTeamDepots请求参数结构体
 * @class
 */
class DescribeTeamDepotsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 默认填写 CODING
     * @type {string || null}
     */
    this.DepotType = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
  }
}

/**
 * BoundExternalDepot返回参数结构体
 * @class
 */
class BoundExternalDepotResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * ListProject请求参数结构体
 * @class
 */
class ListProjectRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 项目名称
     * @type {string || null}
     */
    this.ProjectName = null;

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.TeamId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
  }
}

/**
 * CreateEnterpriseMember返回参数结构体
 * @class
 */
class CreateEnterpriseMemberResponse extends AbstractModel {
  constructor() {
    super();

    /**
         * 企业成员信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {User || null}
         */
    this.User = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.User) {
      const obj = new User();
      obj.deserialize(params.User);
      this.User = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DeleteOneProject请求参数结构体
 * @class
 */
class DeleteOneProjectRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目Id
     * @type {number || null}
     */
    this.ProjectId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
  }
}

/**
 * 获取凭据列表返回结构
 * @class
 */
class DescribeProjectCredentialsData extends AbstractModel {
  constructor() {
    super();

    /**
     * 凭据列表返回结构
     * @type {Array.<Credential> || null}
     */
    this.CredentialList = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.CredentialList) {
      this.CredentialList = [];
      for (const z of Object.values(params.CredentialList)) {
        const obj = new Credential();
        obj.deserialize(z);
        this.CredentialList.push(obj);
      }
    }
  }
}

/**
 * Depot 数据结构
 * @class
 */
class CodingCIProjectDepot extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库 Id
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 仓库名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;

    /**
     * 该仓库是否 CI 可用，如果可用返回值为 continue_integration，如果仓库类型是 CODING 那么这个值永远是continue_integration
     * @type {string || null}
     */
    this.OpenModule = null;

    /**
     * 是否是默认显示第一位的仓库
     * @type {boolean || null}
     */
    this.IsDefault = null;

    /**
         * 仓库 Ssh 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DepotSshUrl = null;

    /**
         * 仓库 Https 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DepotHttpsUrl = null;

    /**
         * 外部仓库是否被关联
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.Authorized = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
    this.OpenModule = 'OpenModule' in params ? params.OpenModule : null;
    this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
    this.DepotSshUrl = 'DepotSshUrl' in params ? params.DepotSshUrl : null;
    this.DepotHttpsUrl = 'DepotHttpsUrl' in params ? params.DepotHttpsUrl : null;
    this.Authorized = 'Authorized' in params ? params.Authorized : null;
  }
}

/**
 * DescribeCodingCIBuild请求参数结构体
 * @class
 */
class DescribeCodingCIBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.BuildId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.BuildId = 'BuildId' in params ? params.BuildId : null;
  }
}

/**
 * TriggerBuild返回参数结构体
 * @class
 */
class TriggerBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeTeam请求参数结构体
 * @class
 */
class DescribeTeamRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 团队唯一标示
     * @type {string || null}
     */
    this.TeamGlobalKey = null;

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.Id = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.TeamGlobalKey = 'TeamGlobalKey' in params ? params.TeamGlobalKey : null;
    this.Id = 'Id' in params ? params.Id : null;
  }
}

/**
 * ListProject返回参数结构体
 * @class
 */
class ListProjectResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.CreatedAt = null;

    /**
     * 更新时间
     * @type {number || null}
     */
    this.UpdatedAt = null;

    /**
     * 删除时间
     * @type {number || null}
     */
    this.DeletedAt = null;

    /**
     * 状态
     * @type {number || null}
     */
    this.Status = null;

    /**
     * 类型
     * @type {number || null}
     */
    this.Type = null;

    /**
     * 最大组员数
     * @type {number || null}
     */
    this.MaxMember = null;

    /**
     * 名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 显示名称
     * @type {string || null}
     */
    this.DisplayName = null;

    /**
     * 描述
     * @type {string || null}
     */
    this.Description = null;

    /**
     * 图标
     * @type {string || null}
     */
    this.Icon = null;

    /**
     * 团队拥有者 ID
     * @type {number || null}
     */
    this.TeamOwnerId = null;

    /**
     * 用户 ID
     * @type {number || null}
     */
    this.UserOwnerId = null;

    /**
     * 开始日期
     * @type {number || null}
     */
    this.StartDate = null;

    /**
     * 结束日期
     * @type {number || null}
     */
    this.EndDate = null;

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.TeamId = null;

    /**
     * 是否为样式项目
     * @type {boolean || null}
     */
    this.IsDemo = null;

    /**
     * 是否压缩
     * @type {boolean || null}
     */
    this.Archived = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.DeletedAt = 'DeletedAt' in params ? params.DeletedAt : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.Type = 'Type' in params ? params.Type : null;
    this.MaxMember = 'MaxMember' in params ? params.MaxMember : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.DisplayName = 'DisplayName' in params ? params.DisplayName : null;
    this.Description = 'Description' in params ? params.Description : null;
    this.Icon = 'Icon' in params ? params.Icon : null;
    this.TeamOwnerId = 'TeamOwnerId' in params ? params.TeamOwnerId : null;
    this.UserOwnerId = 'UserOwnerId' in params ? params.UserOwnerId : null;
    this.StartDate = 'StartDate' in params ? params.StartDate : null;
    this.EndDate = 'EndDate' in params ? params.EndDate : null;
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.IsDemo = 'IsDemo' in params ? params.IsDemo : null;
    this.Archived = 'Archived' in params ? params.Archived : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateProjectCredential返回参数结构体
 * @class
 */
class CreateProjectCredentialResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 返回创建的凭据
     * @type {CreateProjectCredentialData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new CreateProjectCredentialData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeProjectDepotBranches请求参数结构体
 * @class
 */
class DescribeProjectDepotBranchesRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 Id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库 Id
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Id = 'Id' in params ? params.Id : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
  }
}

/**
 * 获取构建某个阶段的日志
 * @class
 */
class DescribeCodingCIBuildStepLogData extends AbstractModel {
  constructor() {
    super();

    /**
     * 日志
     * @type {string || null}
     */
    this.Log = null;

    /**
     * 是否有更多数据
     * @type {boolean || null}
     */
    this.MoreData = null;

    /**
     * 当前展示总长度
     * @type {number || null}
     */
    this.TextDelivered = null;

    /**
     * 总长度
     * @type {number || null}
     */
    this.TextSize = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Log = 'Log' in params ? params.Log : null;
    this.MoreData = 'MoreData' in params ? params.MoreData : null;
    this.TextDelivered = 'TextDelivered' in params ? params.TextDelivered : null;
    this.TextSize = 'TextSize' in params ? params.TextSize : null;
  }
}

/**
 * CreateEnterpriseMember请求参数结构体
 * @class
 */
class CreateEnterpriseMemberRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 腾讯云用户信息
     * @type {RegistryUser || null}
     */
    this.RegistryUser = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.RegistryUser) {
      const obj = new RegistryUser();
      obj.deserialize(params.RegistryUser);
      this.RegistryUser = obj;
    }
  }
}

/**
 * DescribeBuild请求参数结构体
 * @class
 */
class DescribeBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建编号
     * @type {number || null}
     */
    this.Number = null;

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Number = 'Number' in params ? params.Number : null;
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * DescribePackageList返回参数结构体
 * @class
 */
class DescribePackageListResponse extends AbstractModel {
  constructor() {
    super();

    /**
         * 制品包列表
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<ArtifactPackage> || null}
         */
    this.InstanceSet = null;

    /**
     * 请求页
     * @type {number || null}
     */
    this.Offset = null;

    /**
     * 分页大小
     * @type {number || null}
     */
    this.Size = null;

    /**
     * 数据总数
     * @type {number || null}
     */
    this.TotalCount = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.InstanceSet) {
      this.InstanceSet = [];
      for (const z of Object.values(params.InstanceSet)) {
        const obj = new ArtifactPackage();
        obj.deserialize(z);
        this.InstanceSet.push(obj);
      }
    }
    this.Offset = 'Offset' in params ? params.Offset : null;
    this.Size = 'Size' in params ? params.Size : null;
    this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeProjectDepots请求参数结构体
 * @class
 */
class DescribeProjectDepotsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 Id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
  }
}

/**
 * DescribeProject请求参数结构体
 * @class
 */
class DescribeProjectRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.TeamId = null;

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 项目名称
     * @type {string || null}
     */
    this.Name = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.Id = 'Id' in params ? params.Id : null;
    this.Name = 'Name' in params ? params.Name : null;
  }
}

/**
 * ModifyEnterprisePermissions请求参数结构体
 * @class
 */
class ModifyEnterprisePermissionsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 权限ID
     * @type {number || null}
     */
    this.RoleId = null;

    /**
     * 选中修改权限列表
     * @type {Array.<EnterprisePermission> || null}
     */
    this.PermissionList = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RoleId = 'RoleId' in params ? params.RoleId : null;

    if (params.PermissionList) {
      this.PermissionList = [];
      for (const z of Object.values(params.PermissionList)) {
        const obj = new EnterprisePermission();
        obj.deserialize(z);
        this.PermissionList.push(obj);
      }
    }
  }
}

/**
 * DescribeOneJob返回参数结构体
 * @class
 */
class DescribeOneJobResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 任务
     * @type {CIJob || null}
     */
    this.Job = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Job) {
      const obj = new CIJob();
      obj.deserialize(params.Job);
      this.Job = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeCodingCIBuildLog 返回值
 * @class
 */
class DescribeCodingCIBuildLogData extends AbstractModel {
  constructor() {
    super();

    /**
     * 日志
     * @type {string || null}
     */
    this.Log = null;

    /**
     * 是否有更多的日志
     * @type {boolean || null}
     */
    this.MoreData = null;

    /**
     * 当前展示日志长度
     * @type {number || null}
     */
    this.TextDelivered = null;

    /**
     * 总日志长度
     * @type {number || null}
     */
    this.TextSize = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Log = 'Log' in params ? params.Log : null;
    this.MoreData = 'MoreData' in params ? params.MoreData : null;
    this.TextDelivered = 'TextDelivered' in params ? params.TextDelivered : null;
    this.TextSize = 'TextSize' in params ? params.TextSize : null;
  }
}

/**
 * DescribeCodingCIBuilds请求参数结构体
 * @class
 */
class DescribeCodingCIBuildsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建计划 ID
     * @type {number || null}
     */
    this.JobId = null;

    /**
     * 页码
     * @type {number || null}
     */
    this.PageNumber = null;

    /**
     * 每页条数
     * @type {number || null}
     */
    this.PageSize = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
    this.PageNumber = 'PageNumber' in params ? params.PageNumber : null;
    this.PageSize = 'PageSize' in params ? params.PageSize : null;
  }
}

/**
 * DeleteCodingCIBuild返回参数结构体
 * @class
 */
class DeleteCodingCIBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateProjectMember请求参数结构体
 * @class
 */
class CreateProjectMemberRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目Id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 类型 ｜100 所有者｜90 项目管理员｜80 项目成员｜75 项目内，受限成员｜70 已登录访客角色｜60 未登录访客
     * @type {number || null}
     */
    this.Type = null;

    /**
     * 用户user gk数组
     * @type {Array.<string> || null}
     */
    this.UserGlobalKeyList = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Type = 'Type' in params ? params.Type : null;
    this.UserGlobalKeyList = 'UserGlobalKeyList' in params ? params.UserGlobalKeyList : null;
  }
}

/**
 * CreateEnterprise请求参数结构体
 * @class
 */
class CreateEnterpriseRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * team domain
     * @type {string || null}
     */
    this.Domain = null;

    /**
     * 公司名 company name / 项目名
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 腾讯云账户名
     * @type {string || null}
     */
    this.QcloudName = null;

    /**
     * 手机号
     * @type {string || null}
     */
    this.Phone = null;

    /**
     * 邮箱
     * @type {string || null}
     */
    this.Email = null;

    /**
     * 用户图像 url
     * @type {string || null}
     */
    this.Avatar = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Domain = 'Domain' in params ? params.Domain : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.QcloudName = 'QcloudName' in params ? params.QcloudName : null;
    this.Phone = 'Phone' in params ? params.Phone : null;
    this.Email = 'Email' in params ? params.Email : null;
    this.Avatar = 'Avatar' in params ? params.Avatar : null;
  }
}

/**
 * DescribeCodingCIBuildStatistics返回参数结构体
 * @class
 */
class DescribeCodingCIBuildStatisticsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 区间统计数据，单位毫秒
     * @type {DescribeCodingCIBuildStatisticsResponseData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DescribeCodingCIBuildStatisticsResponseData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeJobs请求参数结构体
 * @class
 */
class DescribeJobsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
  }
}

/**
 * TriggerCodingCIBuild请求参数结构体
 * @class
 */
class TriggerCodingCIBuildRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建计划 Id
     * @type {number || null}
     */
    this.JobId = null;

    /**
     * 分支名或 CommitId，当为构建计划的 DepotType 为 NONE 是可不传
     * @type {string || null}
     */
    this.Revision = null;

    /**
     * 构建附加的环境变量
     * @type {Array.<CodingCIJobEnv> || null}
     */
    this.ParamList = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
    this.Revision = 'Revision' in params ? params.Revision : null;

    if (params.ParamList) {
      this.ParamList = [];
      for (const z of Object.values(params.ParamList)) {
        const obj = new CodingCIJobEnv();
        obj.deserialize(z);
        this.ParamList.push(obj);
      }
    }
  }
}

/**
 * 获取构建任务指定阶段的步骤
 * @class
 */
class CodingCIBuildStepData extends AbstractModel {
  constructor() {
    super();

    /**
     * 步骤
     * @type {string || null}
     */
    this.StepJsonString = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.StepJsonString = 'StepJsonString' in params ? params.StepJsonString : null;
  }
}

/**
 * 仓库提交详情
 * @class
 */
class DepotDetailData extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库信息列表
     * @type {Array.<CodingCIDepotDetail> || null}
     */
    this.DepotDetailList = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.DepotDetailList) {
      this.DepotDetailList = [];
      for (const z of Object.values(params.DepotDetailList)) {
        const obj = new CodingCIDepotDetail();
        obj.deserialize(z);
        this.DepotDetailList.push(obj);
      }
    }
  }
}

/**
 * ModifyCodingCIJob请求参数结构体
 * @class
 */
class ModifyCodingCIJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库 ID
     * @type {number || null}
     */
    this.DepotId = null;

    /**
     * 执行方式 CVM | STATIC
     * @type {string || null}
     */
    this.ExecuteIn = null;

    /**
     * 代码更新触发匹配规则
     * @type {string || null}
     */
    this.HookType = null;

    /**
     * STATIC，SCM 从代码库读取
     * @type {string || null}
     */
    this.JenkinsFileFromType = null;

    /**
     * 自动取消相同版本
     * @type {boolean || null}
     */
    this.AutoCancelSameRevision = null;

    /**
     * 自动取消相同 MR
     * @type {boolean || null}
     */
    this.AutoCancelSameMergeRequest = null;

    /**
         * 构建结果通知触发者机制
ALWAYS -总是通知;
BUILD_FAIL -仅构建失败时通知;
         * @type {string || null}
         */
    this.TriggerRemind = null;

    /**
     * 构建计划来源 TKE TCB
     * @type {string || null}
     */
    this.JobFromType = null;

    /**
     * 仓库类型 CODING,TGIT,GITHUB,GITLAB,GITLAB_PRIVATE,GITEE,NONE
     * @type {string || null}
     */
    this.DepotType = null;

    /**
     * 构建计划 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 构建计划名称
     * @type {string || null}
     */
    this.Name = null;

    /**
         * REF_CHANGE 代码更新触发
    CRON = 1 定时触发
    MR_CHANGE  MR变动触发
TKE 对接他们传空数组老是有问题，遂改成非必填
         * @type {Array.<string> || null}
         */
    this.TriggerMethodList = null;

    /**
     * hookType 为 DEFAULT 时须指定
     * @type {string || null}
     */
    this.BranchSelector = null;

    /**
     * hookType 为 CUSTOME 时须指定
     * @type {string || null}
     */
    this.BranchRegex = null;

    /**
     * JenkinsFileFromType 为 SCM 必填
     * @type {string || null}
     */
    this.JenkinsFilePath = null;

    /**
     * JenkinsFileFromType 为 STATIC 必填
     * @type {string || null}
     */
    this.JenkinsFileStaticContent = null;

    /**
     * 任务缓存目录配置
     * @type {Array.<CodingCIJobCachePath> || null}
     */
    this.CachePathList = null;

    /**
     * 环境变量配置
     * @type {Array.<CodingCIJobEnv> || null}
     */
    this.EnvList = null;

    /**
     * 针对 CRON triggerMethod 的 schedule 规则配置, 暂只用于添加
     * @type {Array.<CodingCIJobSchedule> || null}
     */
    this.ScheduleList = null;

    /**
     * 不管构建成功还是失败总是通知的用户
     * @type {Array.<number> || null}
     */
    this.AlwaysUserIdList = null;

    /**
     * 仅构建失败时要通知的用户
     * @type {Array.<number> || null}
     */
    this.BuildFailUserIdList = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.DepotId = 'DepotId' in params ? params.DepotId : null;
    this.ExecuteIn = 'ExecuteIn' in params ? params.ExecuteIn : null;
    this.HookType = 'HookType' in params ? params.HookType : null;
    this.JenkinsFileFromType = 'JenkinsFileFromType' in params ? params.JenkinsFileFromType : null;
    this.AutoCancelSameRevision =
      'AutoCancelSameRevision' in params ? params.AutoCancelSameRevision : null;
    this.AutoCancelSameMergeRequest =
      'AutoCancelSameMergeRequest' in params ? params.AutoCancelSameMergeRequest : null;
    this.TriggerRemind = 'TriggerRemind' in params ? params.TriggerRemind : null;
    this.JobFromType = 'JobFromType' in params ? params.JobFromType : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
    this.Id = 'Id' in params ? params.Id : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.TriggerMethodList = 'TriggerMethodList' in params ? params.TriggerMethodList : null;
    this.BranchSelector = 'BranchSelector' in params ? params.BranchSelector : null;
    this.BranchRegex = 'BranchRegex' in params ? params.BranchRegex : null;
    this.JenkinsFilePath = 'JenkinsFilePath' in params ? params.JenkinsFilePath : null;
    this.JenkinsFileStaticContent =
      'JenkinsFileStaticContent' in params ? params.JenkinsFileStaticContent : null;

    if (params.CachePathList) {
      this.CachePathList = [];
      for (const z of Object.values(params.CachePathList)) {
        const obj = new CodingCIJobCachePath();
        obj.deserialize(z);
        this.CachePathList.push(obj);
      }
    }

    if (params.EnvList) {
      this.EnvList = [];
      for (const z of Object.values(params.EnvList)) {
        const obj = new CodingCIJobEnv();
        obj.deserialize(z);
        this.EnvList.push(obj);
      }
    }

    if (params.ScheduleList) {
      this.ScheduleList = [];
      for (const z of Object.values(params.ScheduleList)) {
        const obj = new CodingCIJobSchedule();
        obj.deserialize(z);
        this.ScheduleList.push(obj);
      }
    }
    this.AlwaysUserIdList = 'AlwaysUserIdList' in params ? params.AlwaysUserIdList : null;
    this.BuildFailUserIdList = 'BuildFailUserIdList' in params ? params.BuildFailUserIdList : null;
  }
}

/**
 * CreateJob请求参数结构体
 * @class
 */
class CreateJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 代码仓库名称
     * @type {string || null}
     */
    this.DepotName = null;

    /**
     * 任务名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 0|1|2
     * @type {number || null}
     */
    this.ExecuteIn = null;

    /**
     * 0|1|2
     * @type {Array.<number> || null}
     */
    this.TriggerMethods = null;

    /**
     * 0|1|2
     * @type {number || null}
     */
    this.HookType = null;

    /**
     * hookType 为 DEFAULT 时须指定
     * @type {string || null}
     */
    this.BranchSelector = null;

    /**
     * hookType 为 CUSTOME 时须指定
     * @type {string || null}
     */
    this.BranchRegex = null;

    /**
     * 0|1
     * @type {number || null}
     */
    this.JenkinsFileFromType = null;

    /**
     * jenkinsFileFromType 为 SCM 时须指定
     * @type {string || null}
     */
    this.JenkinsFilePath = null;

    /**
     * jenkinsFileFromType 为 STATIC 时须指定
     * @type {string || null}
     */
    this.JenkinsFileStaticContent = null;

    /**
     * 自动取消相同版本
     * @type {boolean || null}
     */
    this.AutoCancelSameRevision = null;

    /**
     * 自动取消相同 MR
     * @type {boolean || null}
     */
    this.AutoCancelSameMergeRequest = null;

    /**
         * 构建结果通知触发者机制
0 -总是通知;
1 -仅构建失败时通知;
         * @type {number || null}
         */
    this.TriggerRemind = null;

    /**
     * 任务缓存目录配置
     * @type {Array.<CIJobCachePath> || null}
     */
    this.CachePaths = null;

    /**
     * 环境变量配置
     * @type {Array.<CIJobEnv> || null}
     */
    this.Envs = null;

    /**
     * 针对 CRON triggerMethod 的 schedule 规则配置, 暂只用于添加
     * @type {Array.<CIJobSchedule> || null}
     */
    this.Schedules = null;

    /**
     * 不管构建成功还是失败总是通知的用户
     * @type {Array.<number> || null}
     */
    this.AlwaysUserIds = null;

    /**
     * 仅构建失败时要通知的用户
     * @type {Array.<number> || null}
     */
    this.BuildFailIds = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.DepotName = 'DepotName' in params ? params.DepotName : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.ExecuteIn = 'ExecuteIn' in params ? params.ExecuteIn : null;
    this.TriggerMethods = 'TriggerMethods' in params ? params.TriggerMethods : null;
    this.HookType = 'HookType' in params ? params.HookType : null;
    this.BranchSelector = 'BranchSelector' in params ? params.BranchSelector : null;
    this.BranchRegex = 'BranchRegex' in params ? params.BranchRegex : null;
    this.JenkinsFileFromType = 'JenkinsFileFromType' in params ? params.JenkinsFileFromType : null;
    this.JenkinsFilePath = 'JenkinsFilePath' in params ? params.JenkinsFilePath : null;
    this.JenkinsFileStaticContent =
      'JenkinsFileStaticContent' in params ? params.JenkinsFileStaticContent : null;
    this.AutoCancelSameRevision =
      'AutoCancelSameRevision' in params ? params.AutoCancelSameRevision : null;
    this.AutoCancelSameMergeRequest =
      'AutoCancelSameMergeRequest' in params ? params.AutoCancelSameMergeRequest : null;
    this.TriggerRemind = 'TriggerRemind' in params ? params.TriggerRemind : null;

    if (params.CachePaths) {
      this.CachePaths = [];
      for (const z of Object.values(params.CachePaths)) {
        const obj = new CIJobCachePath();
        obj.deserialize(z);
        this.CachePaths.push(obj);
      }
    }

    if (params.Envs) {
      this.Envs = [];
      for (const z of Object.values(params.Envs)) {
        const obj = new CIJobEnv();
        obj.deserialize(z);
        this.Envs.push(obj);
      }
    }

    if (params.Schedules) {
      this.Schedules = [];
      for (const z of Object.values(params.Schedules)) {
        const obj = new CIJobSchedule();
        obj.deserialize(z);
        this.Schedules.push(obj);
      }
    }
    this.AlwaysUserIds = 'AlwaysUserIds' in params ? params.AlwaysUserIds : null;
    this.BuildFailIds = 'BuildFailIds' in params ? params.BuildFailIds : null;
  }
}

/**
 * DescribeCurrentUser返回参数结构体
 * @class
 */
class DescribeCurrentUserResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 用户 Id
     * @type {number || null}
     */
    this.Id = null;

    /**
         * 状态
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Status = null;

    /**
         * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Email = null;

    /**
         * 唯一标签
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.GlobalKey = null;

    /**
         * 头像
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Avatar = null;

    /**
         * 昵称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Name = null;

    /**
         * 手机
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Phone = null;

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.TeamId = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.Email = 'Email' in params ? params.Email : null;
    this.GlobalKey = 'GlobalKey' in params ? params.GlobalKey : null;
    this.Avatar = 'Avatar' in params ? params.Avatar : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.Phone = 'Phone' in params ? params.Phone : null;
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreateCodingCIJobByTemplate请求参数结构体
 * @class
 */
class CreateCodingCIJobByTemplateRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 构建计划名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 模板名称 TCB,TCR
     * @type {string || null}
     */
    this.Template = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.Template = 'Template' in params ? params.Template : null;
  }
}

/**
 * CreateGitMergeRequest返回参数结构体
 * @class
 */
class CreateGitMergeRequestResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 创建合并请求的信息
     * @type {GitMergeRequest || null}
     */
    this.Request = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Request) {
      const obj = new GitMergeRequest();
      obj.deserialize(params.Request);
      this.Request = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * StopCodingCIBuild返回参数结构体
 * @class
 */
class StopCodingCIBuildResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeCodingCIJob请求参数结构体
 * @class
 */
class DescribeCodingCIJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建计划 ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * DescribeProjectDepotCommits返回参数结构体
 * @class
 */
class DescribeProjectDepotCommitsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 返回 Commit 数据结构
     * @type {DepotDetailData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DepotDetailData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 针对 CRON TriggerMethod 的设置
 * @class
 */
class CodingCIJobSchedule extends AbstractModel {
  constructor() {
    super();

    /**
     * 代码无变化时是否触发
     * @type {boolean || null}
     */
    this.RefChangeTrigger = null;

    /**
     * 目标触发的分支
     * @type {string || null}
     */
    this.Branch = null;

    /**
     * 星期几
     * @type {string || null}
     */
    this.Weekend = null;

    /**
     * 是否周期触发（周期触发/单次触发）
     * @type {boolean || null}
     */
    this.Repeat = null;

    /**
     * 开始时间。如果是周期触发，精确到小时（ 8 ）如果是单次触发，精确到分钟数（ 8:20 ）
     * @type {string || null}
     */
    this.StartTime = null;

    /**
     * 结束时间。如果是单次触发，结束时间为空
     * @type {string || null}
     */
    this.EndTime = null;

    /**
     * 间隔
     * @type {string || null}
     */
    this.Interval = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RefChangeTrigger = 'RefChangeTrigger' in params ? params.RefChangeTrigger : null;
    this.Branch = 'Branch' in params ? params.Branch : null;
    this.Weekend = 'Weekend' in params ? params.Weekend : null;
    this.Repeat = 'Repeat' in params ? params.Repeat : null;
    this.StartTime = 'StartTime' in params ? params.StartTime : null;
    this.EndTime = 'EndTime' in params ? params.EndTime : null;
    this.Interval = 'Interval' in params ? params.Interval : null;
  }
}

/**
 * 制品仓库
 * @class
 */
class ArtifactRepository extends AbstractModel {
  constructor() {
    super();

    /**
     * 制品仓库 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 仓库名
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 团队 id
     * @type {number || null}
     */
    this.TeamId = null;

    /**
     * 项目 id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库状态
     * @type {number || null}
     */
    this.Status = null;

    /**
     * 仓库类型
     * @type {number || null}
     */
    this.Type = null;

    /**
     * 头像地址
     * @type {string || null}
     */
    this.Avatar = null;

    /**
     * 仓库大小
     * @type {number || null}
     */
    this.Size = null;

    /**
     * 仓库描述
     * @type {string || null}
     */
    this.Description = null;

    /**
     * 权限范围
     * @type {number || null}
     */
    this.AccessLevel = null;

    /**
     * 创建时间
     * @type {number || null}
     */
    this.CreatedAt = null;

    /**
     * 更新时间
     * @type {number || null}
     */
    this.UpdatedAt = null;

    /**
     * 删除时间
     * @type {number || null}
     */
    this.DeletedAt = null;

    /**
     * 存储规则
     * @type {number || null}
     */
    this.StorageRule = null;

    /**
     * 创建者 id
     * @type {number || null}
     */
    this.CreatorId = null;

    /**
     * 发布策略
     * @type {number || null}
     */
    this.ReleaseStrategy = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.TeamId = 'TeamId' in params ? params.TeamId : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.Type = 'Type' in params ? params.Type : null;
    this.Avatar = 'Avatar' in params ? params.Avatar : null;
    this.Size = 'Size' in params ? params.Size : null;
    this.Description = 'Description' in params ? params.Description : null;
    this.AccessLevel = 'AccessLevel' in params ? params.AccessLevel : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.DeletedAt = 'DeletedAt' in params ? params.DeletedAt : null;
    this.StorageRule = 'StorageRule' in params ? params.StorageRule : null;
    this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
    this.ReleaseStrategy = 'ReleaseStrategy' in params ? params.ReleaseStrategy : null;
  }
}

/**
 * DescribeProjects返回参数结构体
 * @class
 */
class DescribeProjectsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目数量
     * @type {number || null}
     */
    this.TotalCount = null;

    /**
         * 项目列表信息
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<Project> || null}
         */
    this.ProjectSet = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

    if (params.ProjectSet) {
      this.ProjectSet = [];
      for (const z of Object.values(params.ProjectSet)) {
        const obj = new Project();
        obj.deserialize(z);
        this.ProjectSet.push(obj);
      }
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeProjectDepotTags请求参数结构体
 * @class
 */
class DescribeProjectDepotTagsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 Id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库 Id
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.Id = 'Id' in params ? params.Id : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
  }
}

/**
 * DeleteCodingCIJob请求参数结构体
 * @class
 */
class DeleteCodingCIJobRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建计划 ID
     * @type {number || null}
     */
    this.JobId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.JobId = 'JobId' in params ? params.JobId : null;
  }
}

/**
 * DescribeProjectLabels请求参数结构体
 * @class
 */
class DescribeProjectLabelsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 标签
     * @type {string || null}
     */
    this.Label = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Label = 'Label' in params ? params.Label : null;
  }
}

/**
 * 返回团队的 Depot
 * @class
 */
class CodingCITeamDepot extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 仓库名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 是否是默认显示第一位的仓库
     * @type {boolean || null}
     */
    this.IsDefault = null;

    /**
     * 该仓库是否 CI 可用，如果可用返回值为 continue_integration，如果仓库类型是 CODING 那么这个值永远是continue_integration
     * @type {string || null}
     */
    this.OpenModule = null;

    /**
         * 仓库 Ssh 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DepotSshUrl = null;

    /**
         * 仓库 Https 地址
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DepotHttpsUrl = null;

    /**
         * 是否被关联
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.Authorized = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
    this.OpenModule = 'OpenModule' in params ? params.OpenModule : null;
    this.DepotSshUrl = 'DepotSshUrl' in params ? params.DepotSshUrl : null;
    this.DepotHttpsUrl = 'DepotHttpsUrl' in params ? params.DepotHttpsUrl : null;
    this.Authorized = 'Authorized' in params ? params.Authorized : null;
  }
}

/**
 * DescribeCodingCIBuildStepLog返回参数结构体
 * @class
 */
class DescribeCodingCIBuildStepLogResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 日志详情
     * @type {DescribeCodingCIBuildStepLogData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DescribeCodingCIBuildStepLogData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CreatePersonalToken返回参数结构体
 * @class
 */
class CreatePersonalTokenResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 个人令牌返回值
     * @type {CreatePersonalTokenData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new CreatePersonalTokenData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeProjectDepots 返回数据结构
 * @class
 */
class DescribeProjectDepotsData extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库信息列表
     * @type {Array.<CodingCIProjectDepot> || null}
     */
    this.DepotList = null;

    /**
     * 仓库类型是否被授权，如 Github 是否被授权
     * @type {boolean || null}
     */
    this.IsBound = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.DepotList) {
      this.DepotList = [];
      for (const z of Object.values(params.DepotList)) {
        const obj = new CodingCIProjectDepot();
        obj.deserialize(z);
        this.DepotList.push(obj);
      }
    }
    this.IsBound = 'IsBound' in params ? params.IsBound : null;
  }
}

/**
 * BoundExternalDepot请求参数结构体
 * @class
 */
class BoundExternalDepotRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;

    /**
     * 是否开启 WebHook 一般都填写 true
     * @type {boolean || null}
     */
    this.WebHook = null;

    /**
     * 项目 Id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 外部仓库标识
     * @type {string || null}
     */
    this.ExternalDepotAddress = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
    this.WebHook = 'WebHook' in params ? params.WebHook : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.ExternalDepotAddress =
      'ExternalDepotAddress' in params ? params.ExternalDepotAddress : null;
  }
}

/**
 * Git合并请求信息
 * @class
 */
class GitMergeRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 代码仓库的唯一编号
     * @type {number || null}
     */
    this.DepotId = null;

    /**
     * 定位一个项目的内的资源的 ID
     * @type {number || null}
     */
    this.IId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.DepotId = 'DepotId' in params ? params.DepotId : null;
    this.IId = 'IId' in params ? params.IId : null;
  }
}

/**
 * 任务详细信息
 * @class
 */
class CIJob extends AbstractModel {
  constructor() {
    super();

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 项目名称
     * @type {string || null}
     */
    this.ProjectName = null;

    /**
     * 仓库 ID
     * @type {number || null}
     */
    this.DepotId = null;

    /**
     * 仓库名称
     * @type {string || null}
     */
    this.DepotName = null;

    /**
     * 任务名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 执行方式
     * @type {number || null}
     */
    this.ExecuteIn = null;

    /**
     * 触发机制
     * @type {Array.<number> || null}
     */
    this.TriggerMethods = null;

    /**
     * 代码更新触发匹配规则
     * @type {number || null}
     */
    this.HookType = null;

    /**
     * 触发构建的分支
     * @type {string || null}
     */
    this.BranchSelector = null;

    /**
     * 分支匹配正则
     * @type {string || null}
     */
    this.BranchRegex = null;

    /**
     * Jenkinsfile 来源
     * @type {number || null}
     */
    this.JenkinsFileFromType = null;

    /**
     * Jenkinsfile 在仓库中的文件路径
     * @type {string || null}
     */
    this.JenkinsFilePath = null;

    /**
     * Jenkinsfile 文件内容
     * @type {string || null}
     */
    this.JenkinsFileStaticContent = null;

    /**
     * 自动取消相同版本
     * @type {boolean || null}
     */
    this.AutoCancelSameRevision = null;

    /**
     * 自动取消相同 MR
     * @type {boolean || null}
     */
    this.AutoCancelSameMergeRequest = null;

    /**
     * 构建结果通知触发者机制
     * @type {number || null}
     */
    this.TriggerRemind = null;

    /**
     * 任务缓存目录配置
     * @type {Array.<CIJobCachePath> || null}
     */
    this.CachePaths = null;

    /**
     * 环境变量配置
     * @type {Array.<CIJobEnv> || null}
     */
    this.Envs = null;

    /**
     * 针对 CRON triggerMethod 的 schedule 规则配置
     * @type {Array.<CIJobSchedule> || null}
     */
    this.Schedules = null;

    /**
     * 不管构建成功还是失败总是通知的用户
     * @type {Array.<number> || null}
     */
    this.AlwaysUserIds = null;

    /**
     * 仅构建失败时要通知的用户
     * @type {Array.<number> || null}
     */
    this.BuildFailIds = null;

    /**
     * 创建者
     * @type {number || null}
     */
    this.CreatorId = null;

    /**
     * 创建时间
     * @type {number || null}
     */
    this.CreatedAt = null;

    /**
     * 最后更新时间
     * @type {number || null}
     */
    this.UpdatedAt = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
    this.DepotId = 'DepotId' in params ? params.DepotId : null;
    this.DepotName = 'DepotName' in params ? params.DepotName : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.ExecuteIn = 'ExecuteIn' in params ? params.ExecuteIn : null;
    this.TriggerMethods = 'TriggerMethods' in params ? params.TriggerMethods : null;
    this.HookType = 'HookType' in params ? params.HookType : null;
    this.BranchSelector = 'BranchSelector' in params ? params.BranchSelector : null;
    this.BranchRegex = 'BranchRegex' in params ? params.BranchRegex : null;
    this.JenkinsFileFromType = 'JenkinsFileFromType' in params ? params.JenkinsFileFromType : null;
    this.JenkinsFilePath = 'JenkinsFilePath' in params ? params.JenkinsFilePath : null;
    this.JenkinsFileStaticContent =
      'JenkinsFileStaticContent' in params ? params.JenkinsFileStaticContent : null;
    this.AutoCancelSameRevision =
      'AutoCancelSameRevision' in params ? params.AutoCancelSameRevision : null;
    this.AutoCancelSameMergeRequest =
      'AutoCancelSameMergeRequest' in params ? params.AutoCancelSameMergeRequest : null;
    this.TriggerRemind = 'TriggerRemind' in params ? params.TriggerRemind : null;

    if (params.CachePaths) {
      this.CachePaths = [];
      for (const z of Object.values(params.CachePaths)) {
        const obj = new CIJobCachePath();
        obj.deserialize(z);
        this.CachePaths.push(obj);
      }
    }

    if (params.Envs) {
      this.Envs = [];
      for (const z of Object.values(params.Envs)) {
        const obj = new CIJobEnv();
        obj.deserialize(z);
        this.Envs.push(obj);
      }
    }

    if (params.Schedules) {
      this.Schedules = [];
      for (const z of Object.values(params.Schedules)) {
        const obj = new CIJobSchedule();
        obj.deserialize(z);
        this.Schedules.push(obj);
      }
    }
    this.AlwaysUserIds = 'AlwaysUserIds' in params ? params.AlwaysUserIds : null;
    this.BuildFailIds = 'BuildFailIds' in params ? params.BuildFailIds : null;
    this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
  }
}

/**
 * DescribeProjectCredentials请求参数结构体
 * @class
 */
class DescribeProjectCredentialsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目 ID
     * @type {number || null}
     */
    this.ProjectId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
  }
}

/**
 * DescribeCodingCIBuildStepLog请求参数结构体
 * @class
 */
class DescribeCodingCIBuildStepLogRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.BuildId = null;

    /**
     * 阶段 ID
     * @type {number || null}
     */
    this.StageId = null;

    /**
     * 步骤 ID
     * @type {number || null}
     */
    this.StepId = null;

    /**
     * 日志开始位置
     * @type {number || null}
     */
    this.Start = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.BuildId = 'BuildId' in params ? params.BuildId : null;
    this.StageId = 'StageId' in params ? params.StageId : null;
    this.StepId = 'StepId' in params ? params.StepId : null;
    this.Start = 'Start' in params ? params.Start : null;
  }
}

/**
 * DescribeTeamDepots返回参数结构体
 * @class
 */
class DescribeTeamDepotsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 仓库列表返回值
     * @type {DescribeTeamDepotsData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DescribeTeamDepotsData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeCodingCIBuildLogRaw请求参数结构体
 * @class
 */
class DescribeCodingCIBuildLogRawRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.BuildId = null;

    /**
     * 日志开始位置
     * @type {number || null}
     */
    this.Start = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.BuildId = 'BuildId' in params ? params.BuildId : null;
    this.Start = 'Start' in params ? params.Start : null;
  }
}

/**
 * CreateProjectWithTemplate返回参数结构体
 * @class
 */
class CreateProjectWithTemplateResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目Id
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeJobs返回参数结构体
 * @class
 */
class DescribeJobsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * CI 任务列表
     * @type {Array.<CIJob> || null}
     */
    this.JobSet = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.JobSet) {
      this.JobSet = [];
      for (const z of Object.values(params.JobSet)) {
        const obj = new CIJob();
        obj.deserialize(z);
        this.JobSet.push(obj);
      }
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * ModifyEnterprisePermissions返回参数结构体
 * @class
 */
class ModifyEnterprisePermissionsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CIJobTest
 * @class
 */
class CIJobTest extends AbstractModel {
  constructor() {
    super();

    /**
         * ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.Id = null;

    /**
         * 项目 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.ProjectId = null;

    /**
         * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.ProjectName = null;

    /**
         * 仓库 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.DepotId = null;

    /**
         * 仓库名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.DepotName = null;

    /**
         * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Name = null;

    /**
         * 执行方式
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.ExecuteIn = null;

    /**
         * 触发机制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<string> || null}
         */
    this.TriggerMethods = null;

    /**
         * 代码更新触发匹配规则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.HookType = null;

    /**
         * 触发构建的分支
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.BranchSelector = null;

    /**
         * 分支匹配正则
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.BranchRegex = null;

    /**
         * Jenkinsfile 来源
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.JenkinsFileFromType = null;

    /**
         * Jenkinsfile 在仓库中的文件路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.JenkinsFilePath = null;

    /**
         * Jenkinsfile 文件内容
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.JenkinsFileStaticContent = null;

    /**
         * 自动取消相同版本
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.AutoCancelSameRevision = null;

    /**
         * 自动取消相同 MR
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.AutoCancelSameMergeRequest = null;

    /**
         * 构建结果通知触发者机制
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.TriggerRemind = null;

    /**
         * 任务缓存目录配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CIJobCachePath> || null}
         */
    this.CachePaths = null;

    /**
         * 环境变量配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CIJobEnv> || null}
         */
    this.Envs = null;

    /**
         * 针对 CRON triggerMethod 的 schedule 规则配置
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<CIJobSchedule> || null}
         */
    this.Schedules = null;

    /**
         * 不管构建成功还是失败总是通知的用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
    this.AlwaysUserIds = null;

    /**
         * 仅构建失败时要通知的用户
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Array.<number> || null}
         */
    this.BuildFailIds = null;

    /**
         * 创建者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.CreatorId = null;

    /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.CreatedAt = null;

    /**
         * 最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.UpdatedAt = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
    this.DepotId = 'DepotId' in params ? params.DepotId : null;
    this.DepotName = 'DepotName' in params ? params.DepotName : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.ExecuteIn = 'ExecuteIn' in params ? params.ExecuteIn : null;
    this.TriggerMethods = 'TriggerMethods' in params ? params.TriggerMethods : null;
    this.HookType = 'HookType' in params ? params.HookType : null;
    this.BranchSelector = 'BranchSelector' in params ? params.BranchSelector : null;
    this.BranchRegex = 'BranchRegex' in params ? params.BranchRegex : null;
    this.JenkinsFileFromType = 'JenkinsFileFromType' in params ? params.JenkinsFileFromType : null;
    this.JenkinsFilePath = 'JenkinsFilePath' in params ? params.JenkinsFilePath : null;
    this.JenkinsFileStaticContent =
      'JenkinsFileStaticContent' in params ? params.JenkinsFileStaticContent : null;
    this.AutoCancelSameRevision =
      'AutoCancelSameRevision' in params ? params.AutoCancelSameRevision : null;
    this.AutoCancelSameMergeRequest =
      'AutoCancelSameMergeRequest' in params ? params.AutoCancelSameMergeRequest : null;
    this.TriggerRemind = 'TriggerRemind' in params ? params.TriggerRemind : null;

    if (params.CachePaths) {
      this.CachePaths = [];
      for (const z of Object.values(params.CachePaths)) {
        const obj = new CIJobCachePath();
        obj.deserialize(z);
        this.CachePaths.push(obj);
      }
    }

    if (params.Envs) {
      this.Envs = [];
      for (const z of Object.values(params.Envs)) {
        const obj = new CIJobEnv();
        obj.deserialize(z);
        this.Envs.push(obj);
      }
    }

    if (params.Schedules) {
      this.Schedules = [];
      for (const z of Object.values(params.Schedules)) {
        const obj = new CIJobSchedule();
        obj.deserialize(z);
        this.Schedules.push(obj);
      }
    }
    this.AlwaysUserIds = 'AlwaysUserIds' in params ? params.AlwaysUserIds : null;
    this.BuildFailIds = 'BuildFailIds' in params ? params.BuildFailIds : null;
    this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
  }
}

/**
 * ModifyProjectPermission请求参数结构体
 * @class
 */
class ModifyProjectPermissionRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 权限ID
     * @type {number || null}
     */
    this.RoleId = null;

    /**
     * user gk
     * @type {string || null}
     */
    this.UserGK = null;

    /**
     * 项目ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 权限创建、删除
     * @type {boolean || null}
     */
    this.ActionFlag = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RoleId = 'RoleId' in params ? params.RoleId : null;
    this.UserGK = 'UserGK' in params ? params.UserGK : null;
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.ActionFlag = 'ActionFlag' in params ? params.ActionFlag : null;
  }
}

/**
 * 一次构建
 * @class
 */
class CIBuild extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 任务 ID
     * @type {number || null}
     */
    this.JobId = null;

    /**
     * CCI ID
     * @type {string || null}
     */
    this.CciId = null;

    /**
     * 构建编号
     * @type {number || null}
     */
    this.Number = null;

    /**
     * 构建 commit sha
     * @type {string || null}
     */
    this.CommitId = null;

    /**
     * 触发信息
     * @type {string || null}
     */
    this.Cause = null;

    /**
     * 构建的分支
     * @type {string || null}
     */
    this.Branch = null;

    /**
     * 失败信息
     * @type {string || null}
     */
    this.FailedMessage = null;

    /**
     * Jenkinsfile 内容
     * @type {string || null}
     */
    this.JenkinsFileContent = null;

    /**
     * 构建耗时
     * @type {number || null}
     */
    this.Duration = null;

    /**
     * 构建状态
     * @type {number || null}
     */
    this.Status = null;

    /**
     * 构建进行到了哪个 stage/node
     * @type {string || null}
     */
    this.StatusNode = null;

    /**
     * 测试结果
     * @type {CIBuildTestResult || null}
     */
    this.TestResult = null;

    /**
     * 创建时间
     * @type {number || null}
     */
    this.CreatedAt = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.JobId = 'JobId' in params ? params.JobId : null;
    this.CciId = 'CciId' in params ? params.CciId : null;
    this.Number = 'Number' in params ? params.Number : null;
    this.CommitId = 'CommitId' in params ? params.CommitId : null;
    this.Cause = 'Cause' in params ? params.Cause : null;
    this.Branch = 'Branch' in params ? params.Branch : null;
    this.FailedMessage = 'FailedMessage' in params ? params.FailedMessage : null;
    this.JenkinsFileContent = 'JenkinsFileContent' in params ? params.JenkinsFileContent : null;
    this.Duration = 'Duration' in params ? params.Duration : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.StatusNode = 'StatusNode' in params ? params.StatusNode : null;

    if (params.TestResult) {
      const obj = new CIBuildTestResult();
      obj.deserialize(params.TestResult);
      this.TestResult = obj;
    }
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
  }
}

/**
 * DescribeArtifactDownloadUrl返回参数结构体
 * @class
 */
class DescribeArtifactDownloadUrlResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 制品临时下载链接
     * @type {string || null}
     */
    this.Url = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Url = 'Url' in params ? params.Url : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * 创建项目令牌返回值
 * @class
 */
class CreateProjectTokenData extends AbstractModel {
  constructor() {
    super();

    /**
     * Token 相当于密码
     * @type {string || null}
     */
    this.Token = null;

    /**
     * GlobalKey相当于账号
     * @type {string || null}
     */
    this.GlobalKey = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Token = 'Token' in params ? params.Token : null;
    this.GlobalKey = 'GlobalKey' in params ? params.GlobalKey : null;
  }
}

/**
 * Test返回参数结构体
 * @class
 */
class TestResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 测试
     * @type {string || null}
     */
    this.Pp = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Pp = 'Pp' in params ? params.Pp : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * Filter 过滤参数
 * @class
 */
class Filter extends AbstractModel {
  constructor() {
    super();

    /**
     * 过滤字段名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 过滤字段值
     * @type {Array.<string> || null}
     */
    this.Value = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Name = 'Name' in params ? params.Name : null;
    this.Value = 'Value' in params ? params.Value : null;
  }
}

/**
 * DescribeCodingCIBuildStep请求参数结构体
 * @class
 */
class DescribeCodingCIBuildStepRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.BuildId = null;

    /**
     * 阶段 ID
     * @type {number || null}
     */
    this.StageId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.BuildId = 'BuildId' in params ? params.BuildId : null;
    this.StageId = 'StageId' in params ? params.StageId : null;
  }
}

/**
 * DescribeTeam返回参数结构体
 * @class
 */
class DescribeTeamResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 团队 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
         * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.CreatedAt = null;

    /**
         * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.UpdatedAt = null;

    /**
         * 名称
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Name = null;

    /**
         * 名称拼音
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.NamePinyin = null;

    /**
         * 介绍
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Introduction = null;

    /**
         * 图标
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Avatar = null;

    /**
         * 链接
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.HtmlLink = null;

    /**
         * 唯一标示
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.GlobalKey = null;

    /**
         * 是否锁定
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.Lock = null;

    /**
         * 访问路径
注意：此字段可能返回 null，表示取不到有效值。
         * @type {string || null}
         */
    this.Path = null;

    /**
         * 团队所有者
注意：此字段可能返回 null，表示取不到有效值。
         * @type {Owner || null}
         */
    this.Owner = null;

    /**
         * 员工数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.StaffCount = null;

    /**
         * 人员数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.MemberCount = null;

    /**
         * 管理员数量
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.ManagerCount = null;

    /**
         * 管理员是否锁定
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.AdminLocked = null;

    /**
         * 管理员是否强制两步校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.ManagerForceTwofaEnabled = null;

    /**
         * 当前用户角色 ID
注意：此字段可能返回 null，表示取不到有效值。
         * @type {number || null}
         */
    this.CurrentUserRoleId = null;

    /**
         * 是否强制两步校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.ForceTwofaEnabled = null;

    /**
         * 员工是否强制两步校验
注意：此字段可能返回 null，表示取不到有效值。
         * @type {boolean || null}
         */
    this.StaffForceTwofaEnabled = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.NamePinyin = 'NamePinyin' in params ? params.NamePinyin : null;
    this.Introduction = 'Introduction' in params ? params.Introduction : null;
    this.Avatar = 'Avatar' in params ? params.Avatar : null;
    this.HtmlLink = 'HtmlLink' in params ? params.HtmlLink : null;
    this.GlobalKey = 'GlobalKey' in params ? params.GlobalKey : null;
    this.Lock = 'Lock' in params ? params.Lock : null;
    this.Path = 'Path' in params ? params.Path : null;

    if (params.Owner) {
      const obj = new Owner();
      obj.deserialize(params.Owner);
      this.Owner = obj;
    }
    this.StaffCount = 'StaffCount' in params ? params.StaffCount : null;
    this.MemberCount = 'MemberCount' in params ? params.MemberCount : null;
    this.ManagerCount = 'ManagerCount' in params ? params.ManagerCount : null;
    this.AdminLocked = 'AdminLocked' in params ? params.AdminLocked : null;
    this.ManagerForceTwofaEnabled =
      'ManagerForceTwofaEnabled' in params ? params.ManagerForceTwofaEnabled : null;
    this.CurrentUserRoleId = 'CurrentUserRoleId' in params ? params.CurrentUserRoleId : null;
    this.ForceTwofaEnabled = 'ForceTwofaEnabled' in params ? params.ForceTwofaEnabled : null;
    this.StaffForceTwofaEnabled =
      'StaffForceTwofaEnabled' in params ? params.StaffForceTwofaEnabled : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * CodingCiBuild 结构
 * @class
 */
class CodingCIBuild extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 构建计划 ID
     * @type {number || null}
     */
    this.JobId = null;

    /**
     * 构建唯一标识
     * @type {string || null}
     */
    this.CodingCIId = null;

    /**
     * 构建序号
     * @type {number || null}
     */
    this.Number = null;

    /**
     * Git Commit ID
     * @type {string || null}
     */
    this.CommitId = null;

    /**
     * 触发原因
     * @type {string || null}
     */
    this.Cause = null;

    /**
     * 分支
     * @type {string || null}
     */
    this.Branch = null;

    /**
     * 失败原因
     * @type {string || null}
     */
    this.FailedMessage = null;

    /**
     * 本次构建的 Jenkinsfile
     * @type {string || null}
     */
    this.JenkinsFileContent = null;

    /**
     * 构建执行时间 QUEUED  等待构建 INITIALIZING  初始化 NOT_BUILT  准备构建 RUNNING  运行中 SUCCEED  成功 FAILED  失败 ABORTED  被取消 TIMEOUT  超时
     * @type {number || null}
     */
    this.Duration = null;

    /**
     * 构建当前状态
     * @type {string || null}
     */
    this.Status = null;

    /**
     * 构建进行到了哪个 stage/node
     * @type {string || null}
     */
    this.StatusNode = null;

    /**
     * 构建创建时间
     * @type {number || null}
     */
    this.CreatedAt = null;

    /**
     * 测试结果
     * @type {CIBuildTestResult || null}
     */
    this.TestResult = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.JobId = 'JobId' in params ? params.JobId : null;
    this.CodingCIId = 'CodingCIId' in params ? params.CodingCIId : null;
    this.Number = 'Number' in params ? params.Number : null;
    this.CommitId = 'CommitId' in params ? params.CommitId : null;
    this.Cause = 'Cause' in params ? params.Cause : null;
    this.Branch = 'Branch' in params ? params.Branch : null;
    this.FailedMessage = 'FailedMessage' in params ? params.FailedMessage : null;
    this.JenkinsFileContent = 'JenkinsFileContent' in params ? params.JenkinsFileContent : null;
    this.Duration = 'Duration' in params ? params.Duration : null;
    this.Status = 'Status' in params ? params.Status : null;
    this.StatusNode = 'StatusNode' in params ? params.StatusNode : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;

    if (params.TestResult) {
      const obj = new CIBuildTestResult();
      obj.deserialize(params.TestResult);
      this.TestResult = obj;
    }
  }
}

/**
 * 创建构建计划返回值
 * @class
 */
class CreateCodingCIJobData extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建计划 Id
     * @type {number || null}
     */
    this.Id = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
  }
}

/**
 * 针对 CRON TriggerMethod 的设置
 * @class
 */
class CIJobSchedule extends AbstractModel {
  constructor() {
    super();

    /**
     * 代码无变化时是否触发
     * @type {boolean || null}
     */
    this.RefChangeTrigger = null;

    /**
     * 要触发的分支
     * @type {string || null}
     */
    this.Branch = null;

    /**
     * 星期几
     * @type {string || null}
     */
    this.Weekend = null;

    /**
     * 是否周期触发（周期触发/单次触发）
     * @type {boolean || null}
     */
    this.Repeat = null;

    /**
     * 开始时间。如果是周期触发，精确到小时（ 8 ）如果是单次触发，精确到分钟数（ 8:20 ）
     * @type {string || null}
     */
    this.StartTime = null;

    /**
     * 结束时间。如果是单次触发，结束时间为空
     * @type {string || null}
     */
    this.EndTime = null;

    /**
     * 间隔
     * @type {string || null}
     */
    this.Interval = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.RefChangeTrigger = 'RefChangeTrigger' in params ? params.RefChangeTrigger : null;
    this.Branch = 'Branch' in params ? params.Branch : null;
    this.Weekend = 'Weekend' in params ? params.Weekend : null;
    this.Repeat = 'Repeat' in params ? params.Repeat : null;
    this.StartTime = 'StartTime' in params ? params.StartTime : null;
    this.EndTime = 'EndTime' in params ? params.EndTime : null;
    this.Interval = 'Interval' in params ? params.Interval : null;
  }
}

/**
 * 构建计划信息
 * @class
 */
class CodingCIJob extends AbstractModel {
  constructor() {
    super();

    /**
     * 项目ID
     * @type {number || null}
     */
    this.ProjectId = null;

    /**
     * 仓库ID
     * @type {number || null}
     */
    this.DepotId = null;

    /**
     * 构建计划名称
     * @type {string || null}
     */
    this.Name = null;

    /**
     * 执行方式
     * @type {string || null}
     */
    this.ExecuteIn = null;

    /**
     * 构建计划触发方式
     * @type {Array.<string> || null}
     */
    this.TriggerMethodList = null;

    /**
     * 代码更新触发匹配规则
     * @type {string || null}
     */
    this.HookType = null;

    /**
     * 触发构建的分支
     * @type {string || null}
     */
    this.BranchSelector = null;

    /**
     * 分支匹配正则
     * @type {string || null}
     */
    this.BranchRegex = null;

    /**
     * Jenkinsfile 来源
     * @type {string || null}
     */
    this.JenkinsFileFromType = null;

    /**
     * Jenkinsfile 在仓库中的文件路径
     * @type {string || null}
     */
    this.JenkinsFilePath = null;

    /**
     * Jenkinsfile 文件内容
     * @type {string || null}
     */
    this.JenkinsFileStaticContent = null;

    /**
     * 自动取消相同版本
     * @type {boolean || null}
     */
    this.AutoCancelSameRevision = null;

    /**
     * 自动取消相同 MR
     * @type {boolean || null}
     */
    this.AutoCancelSameMergeRequest = null;

    /**
     * 构建结果通知触发者机制
     * @type {string || null}
     */
    this.TriggerRemind = null;

    /**
     * 任务缓存目录配置
     * @type {Array.<CIJobCachePath> || null}
     */
    this.CachePathList = null;

    /**
     * 环境变量配置
     * @type {Array.<CIJobEnv> || null}
     */
    this.EnvList = null;

    /**
     * 针对 CRON triggerMethod 的 schedule 规则配置
     * @type {Array.<CIJobSchedule> || null}
     */
    this.ScheduleList = null;

    /**
     * 不管构建成功还是失败总是通知的用户
     * @type {Array.<number> || null}
     */
    this.AlwaysUserIdList = null;

    /**
     * 仅构建失败时要通知的用户
     * @type {Array.<number> || null}
     */
    this.BuildFailUserIdList = null;

    /**
     * 创建者
     * @type {number || null}
     */
    this.CreatorId = null;

    /**
     * 创建时间
     * @type {number || null}
     */
    this.CreatedAt = null;

    /**
     * 最后更新时间
     * @type {number || null}
     */
    this.UpdatedAt = null;

    /**
     * 构建计划创建来源
     * @type {string || null}
     */
    this.JobFromType = null;

    /**
     * 仓库类型
     * @type {string || null}
     */
    this.DepotType = null;

    /**
     * 构建计划ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 项目名称
     * @type {string || null}
     */
    this.ProjectName = null;

    /**
     * 仓库名称
     * @type {string || null}
     */
    this.DepotName = null;

    /**
     * 仓库库的 Web 页面
     * @type {string || null}
     */
    this.DepotWebUrl = null;

    /**
     * 仓库库的 SSH 地址
     * @type {string || null}
     */
    this.DepotSshUrl = null;

    /**
     * 仓库库的 Https 地址
     * @type {string || null}
     */
    this.DepotHttpsUrl = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
    this.DepotId = 'DepotId' in params ? params.DepotId : null;
    this.Name = 'Name' in params ? params.Name : null;
    this.ExecuteIn = 'ExecuteIn' in params ? params.ExecuteIn : null;
    this.TriggerMethodList = 'TriggerMethodList' in params ? params.TriggerMethodList : null;
    this.HookType = 'HookType' in params ? params.HookType : null;
    this.BranchSelector = 'BranchSelector' in params ? params.BranchSelector : null;
    this.BranchRegex = 'BranchRegex' in params ? params.BranchRegex : null;
    this.JenkinsFileFromType = 'JenkinsFileFromType' in params ? params.JenkinsFileFromType : null;
    this.JenkinsFilePath = 'JenkinsFilePath' in params ? params.JenkinsFilePath : null;
    this.JenkinsFileStaticContent =
      'JenkinsFileStaticContent' in params ? params.JenkinsFileStaticContent : null;
    this.AutoCancelSameRevision =
      'AutoCancelSameRevision' in params ? params.AutoCancelSameRevision : null;
    this.AutoCancelSameMergeRequest =
      'AutoCancelSameMergeRequest' in params ? params.AutoCancelSameMergeRequest : null;
    this.TriggerRemind = 'TriggerRemind' in params ? params.TriggerRemind : null;

    if (params.CachePathList) {
      this.CachePathList = [];
      for (const z of Object.values(params.CachePathList)) {
        const obj = new CIJobCachePath();
        obj.deserialize(z);
        this.CachePathList.push(obj);
      }
    }

    if (params.EnvList) {
      this.EnvList = [];
      for (const z of Object.values(params.EnvList)) {
        const obj = new CIJobEnv();
        obj.deserialize(z);
        this.EnvList.push(obj);
      }
    }

    if (params.ScheduleList) {
      this.ScheduleList = [];
      for (const z of Object.values(params.ScheduleList)) {
        const obj = new CIJobSchedule();
        obj.deserialize(z);
        this.ScheduleList.push(obj);
      }
    }
    this.AlwaysUserIdList = 'AlwaysUserIdList' in params ? params.AlwaysUserIdList : null;
    this.BuildFailUserIdList = 'BuildFailUserIdList' in params ? params.BuildFailUserIdList : null;
    this.CreatorId = 'CreatorId' in params ? params.CreatorId : null;
    this.CreatedAt = 'CreatedAt' in params ? params.CreatedAt : null;
    this.UpdatedAt = 'UpdatedAt' in params ? params.UpdatedAt : null;
    this.JobFromType = 'JobFromType' in params ? params.JobFromType : null;
    this.DepotType = 'DepotType' in params ? params.DepotType : null;
    this.Id = 'Id' in params ? params.Id : null;
    this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
    this.DepotName = 'DepotName' in params ? params.DepotName : null;
    this.DepotWebUrl = 'DepotWebUrl' in params ? params.DepotWebUrl : null;
    this.DepotSshUrl = 'DepotSshUrl' in params ? params.DepotSshUrl : null;
    this.DepotHttpsUrl = 'DepotHttpsUrl' in params ? params.DepotHttpsUrl : null;
  }
}

/**
 * CreateArtifactRepository返回参数结构体
 * @class
 */
class CreateArtifactRepositoryResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 创建成功的仓库 ID
     * @type {number || null}
     */
    this.Id = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Id = 'Id' in params ? params.Id : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * DescribeCodingCIBuilds返回参数结构体
 * @class
 */
class DescribeCodingCIBuildsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * 构建列表
     * @type {DescribeCodingCIBuildsData || null}
     */
    this.Data = null;

    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     * @type {string || null}
     */
    this.RequestId = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }

    if (params.Data) {
      const obj = new DescribeCodingCIBuildsData();
      obj.deserialize(params.Data);
      this.Data = obj;
    }
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

module.exports = {
  DescribeProjectDepotBranchesResponse,
  CreateEnterpriseResponse,
  CodingCIJobEnv,
  DescribeCodingCIBuildsData,
  DescribeCodingCIJobsRequest,
  ModifyJobResponse,
  DescribeCodingCIBuildLogRawResponse,
  Credential,
  DescribeCodingCIBuildStatisticsResponseData,
  DescribeCodingCIBuildResponse,
  DescribeCodingCIBuildStatisticsRequest,
  DescribeVersionListRequest,
  CreateProjectMemberResponse,
  DescribeOneJobRequest,
  CreateCompaniesResponse,
  DescribeProjectDepotCommitsRequest,
  DescribeCodingCIJobResponse,
  DescribeCodingCIBuildLogRequest,
  DescribeCodingCIBuildStageResponse,
  ModifyJobRequest,
  Project,
  DescribeCodingCIBuildLogRawData,
  ArtifactVersion,
  CreateCompaniesRequest,
  DescribeListBuildRequest,
  StopCodingCIBuildRequest,
  DescribeProjectCredentialsResponse,
  TestRequest,
  DescribeCodingCIJobsResponse,
  DescribeListBuildResponse,
  CodingCIPersonalExternalDepotData,
  StopBuildResponse,
  CreatePersonalTokenRequest,
  DeleteCodingCIBuildRequest,
  DescribeVersionListResponse,
  DeleteBuildResponse,
  CreateProjectRequest,
  DescribeProjectDepotsResponse,
  DescribeProjectResponse,
  DescribeCodingCIBuildLogResponse,
  EnterprisePermission,
  CreateJobResponse,
  CIBuildTestResult,
  DescribePersonalExternalDepotsRequest,
  CreateProjectCredentialData,
  DescribeBuildResponse,
  DescribeArtifactDownloadUrlRequest,
  TriggerCodingCIBuildResponse,
  DescribeProjectDepotTagsResponse,
  CIJobCachePath,
  DescribeTeamDepotsData,
  RegistryUser,
  ArtifactPackage,
  DeleteCodingCIJobResponse,
  TriggerBuildRequest,
  CIJobEnv,
  ModifyCodingCIJobResponse,
  DescribeProjectsRequest,
  DescribePersonalExternalDepotsResponse,
  CreateProjectCredentialRequest,
  CreatePersonalTokenData,
  DescribeCodingCIBuildStepResponse,
  DescribeOneProjectRequest,
  CreateProjectResponse,
  DescribeEnterpriseStatusRequest,
  CreateCodingCIJobResponse,
  CreateGitMergeRequestRequest,
  DescribeProjectLabelsResponse,
  CreateProjectWithTemplateRequest,
  DeleteJobRequest,
  CodingCIPersonalExternalDepot,
  DescribePackageListRequest,
  DeleteOneProjectResponse,
  StopBuildRequest,
  CodingCIDepotDetail,
  DescribeEnterpriseStatusResponse,
  Owner,
  ModifyProjectPermissionResponse,
  TriggerCodingCIBuildData,
  DescribeCodingCIBuildStageRequest,
  DescribeTestJobRequest,
  DeleteJobResponse,
  CreateProjectTokenResponse,
  CreateCodingCIJobRequest,
  DescribeOneProjectResponse,
  DescribeTestJobResponse,
  CreateArtifactRepositoryRequest,
  DescribeCurrentUserRequest,
  DescribeRepositoryListResponse,
  CreateProjectTokenRequest,
  CreateCodingCIJobByTemplateResponse,
  CodingCIBuildStageData,
  CodingCIJobCachePath,
  DeleteBuildRequest,
  User,
  DescribeRepositoryListRequest,
  DescribeTeamDepotsRequest,
  BoundExternalDepotResponse,
  ListProjectRequest,
  CreateEnterpriseMemberResponse,
  DeleteOneProjectRequest,
  DescribeProjectCredentialsData,
  CodingCIProjectDepot,
  DescribeCodingCIBuildRequest,
  TriggerBuildResponse,
  DescribeTeamRequest,
  ListProjectResponse,
  CreateProjectCredentialResponse,
  DescribeProjectDepotBranchesRequest,
  DescribeCodingCIBuildStepLogData,
  CreateEnterpriseMemberRequest,
  DescribeBuildRequest,
  DescribePackageListResponse,
  DescribeProjectDepotsRequest,
  DescribeProjectRequest,
  ModifyEnterprisePermissionsRequest,
  DescribeOneJobResponse,
  DescribeCodingCIBuildLogData,
  DescribeCodingCIBuildsRequest,
  DeleteCodingCIBuildResponse,
  CreateProjectMemberRequest,
  CreateEnterpriseRequest,
  DescribeCodingCIBuildStatisticsResponse,
  DescribeJobsRequest,
  TriggerCodingCIBuildRequest,
  CodingCIBuildStepData,
  DepotDetailData,
  ModifyCodingCIJobRequest,
  CreateJobRequest,
  DescribeCurrentUserResponse,
  CreateCodingCIJobByTemplateRequest,
  CreateGitMergeRequestResponse,
  StopCodingCIBuildResponse,
  DescribeCodingCIJobRequest,
  DescribeProjectDepotCommitsResponse,
  CodingCIJobSchedule,
  ArtifactRepository,
  DescribeProjectsResponse,
  DescribeProjectDepotTagsRequest,
  DeleteCodingCIJobRequest,
  DescribeProjectLabelsRequest,
  CodingCITeamDepot,
  DescribeCodingCIBuildStepLogResponse,
  CreatePersonalTokenResponse,
  DescribeProjectDepotsData,
  BoundExternalDepotRequest,
  GitMergeRequest,
  CIJob,
  DescribeProjectCredentialsRequest,
  DescribeCodingCIBuildStepLogRequest,
  DescribeTeamDepotsResponse,
  DescribeCodingCIBuildLogRawRequest,
  CreateProjectWithTemplateResponse,
  DescribeJobsResponse,
  ModifyEnterprisePermissionsResponse,
  CIJobTest,
  ModifyProjectPermissionRequest,
  CIBuild,
  DescribeArtifactDownloadUrlResponse,
  CreateProjectTokenData,
  TestResponse,
  Filter,
  DescribeCodingCIBuildStepRequest,
  DescribeTeamResponse,
  CodingCIBuild,
  CreateCodingCIJobData,
  CIJobSchedule,
  CodingCIJob,
  CreateArtifactRepositoryResponse,
  DescribeCodingCIBuildsResponse,
};
