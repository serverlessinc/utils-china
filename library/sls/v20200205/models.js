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
 * ListInstances返回参数结构体
 * @class
 */
class ListInstancesResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload.
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * GetUploadUrls返回参数结构体
 * @class
 */
class GetUploadUrlsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload.
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * RunFinishComponent请求参数结构体
 * @class
 */
class RunFinishComponentRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object
     * @type {string || null}
     */
    this.Body = null;

    /**
     * App Name
     * @type {string || null}
     */
    this.AppName = null;

    /**
     * Stage Name
     * @type {string || null}
     */
    this.StageName = null;

    /**
     * Instance Name
     * @type {string || null}
     */
    this.InstanceName = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Body = 'Body' in params ? params.Body : null;
    this.AppName = 'AppName' in params ? params.AppName : null;
    this.StageName = 'StageName' in params ? params.StageName : null;
    this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
  }
}

/**
 * GetComponentAndVersions请求参数结构体
 * @class
 */
class GetComponentAndVersionsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * Component Name
     * @type {string || null}
     */
    this.ComponentName = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
  }
}

/**
 * PostPublishComponent返回参数结构体
 * @class
 */
class PostPublishComponentResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload.
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * RunComponent返回参数结构体
 * @class
 */
class RunComponentResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload.
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * GetComponentAndVersions返回参数结构体
 * @class
 */
class GetComponentAndVersionsResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * GetInstance请求参数结构体
 * @class
 */
class GetInstanceRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object
     * @type {string || null}
     */
    this.Body = null;

    /**
     * App Name
     * @type {string || null}
     */
    this.AppName = null;

    /**
     * Stage Name
     * @type {string || null}
     */
    this.StageName = null;

    /**
     * Instance Name
     * @type {string || null}
     */
    this.InstanceName = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Body = 'Body' in params ? params.Body : null;
    this.AppName = 'AppName' in params ? params.AppName : null;
    this.StageName = 'StageName' in params ? params.StageName : null;
    this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
  }
}

/**
 * SaveInstance返回参数结构体
 * @class
 */
class SaveInstanceResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload.
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * GetComponentVersion请求参数结构体
 * @class
 */
class GetComponentVersionRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * Component Name
     * @type {string || null}
     */
    this.ComponentName = null;

    /**
     * Component Version
     * @type {string || null}
     */
    this.ComponentVersion = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
    this.ComponentVersion = 'ComponentVersion' in params ? params.ComponentVersion : null;
  }
}

/**
 * PrePublishComponent请求参数结构体
 * @class
 */
class PrePublishComponentRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object
     * @type {string || null}
     */
    this.Body = null;

    /**
     * Component Name
     * @type {string || null}
     */
    this.ComponentName = null;

    /**
     * Component Version
     * @type {string || null}
     */
    this.ComponentVersion = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Body = 'Body' in params ? params.Body : null;
    this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
    this.ComponentVersion = 'ComponentVersion' in params ? params.ComponentVersion : null;
  }
}

/**
 * GetInstance返回参数结构体
 * @class
 */
class GetInstanceResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload.
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * GetComponentVersion返回参数结构体
 * @class
 */
class GetComponentVersionResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * GetUploadUrls请求参数结构体
 * @class
 */
class GetUploadUrlsRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object
     * @type {string || null}
     */
    this.Body = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Body = 'Body' in params ? params.Body : null;
  }
}

/**
 * RunComponent请求参数结构体
 * @class
 */
class RunComponentRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object
     * @type {string || null}
     */
    this.Body = null;

    /**
     * App Name
     * @type {string || null}
     */
    this.AppName = null;

    /**
     * Stage Name
     * @type {string || null}
     */
    this.StageName = null;

    /**
     * Instance Name
     * @type {string || null}
     */
    this.InstanceName = null;

    /**
     * Channel URL
     * @type {string || null}
     */
    this.Channel = null;

    /**
     * Role Name
     * @type {string || null}
     */
    this.RoleName = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Body = 'Body' in params ? params.Body : null;
    this.AppName = 'AppName' in params ? params.AppName : null;
    this.StageName = 'StageName' in params ? params.StageName : null;
    this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
    this.Channel = 'Channel' in params ? params.Channel : null;
    this.RoleName = 'RoleName' in params ? params.RoleName : null;
  }
}

/**
 * RunFinishComponent返回参数结构体
 * @class
 */
class RunFinishComponentResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload.
     * @type {string || null}
     */
    this.Body = null;

    /**
     * App Name
     * @type {string || null}
     */
    this.AppName = null;

    /**
     * Stage Name
     * @type {string || null}
     */
    this.StageName = null;

    /**
     * Instance Name
     * @type {string || null}
     */
    this.InstanceName = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.AppName = 'AppName' in params ? params.AppName : null;
    this.StageName = 'StageName' in params ? params.StageName : null;
    this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * PrePublishComponent返回参数结构体
 * @class
 */
class PrePublishComponentResponse extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object containing response payload.
     * @type {string || null}
     */
    this.Body = null;

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
    this.Body = 'Body' in params ? params.Body : null;
    this.RequestId = 'RequestId' in params ? params.RequestId : null;
  }
}

/**
 * PostPublishComponent请求参数结构体
 * @class
 */
class PostPublishComponentRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object
     * @type {string || null}
     */
    this.Body = null;

    /**
     * Component Name
     * @type {string || null}
     */
    this.ComponentName = null;

    /**
     * Component Version
     * @type {string || null}
     */
    this.ComponentVersion = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Body = 'Body' in params ? params.Body : null;
    this.ComponentName = 'ComponentName' in params ? params.ComponentName : null;
    this.ComponentVersion = 'ComponentVersion' in params ? params.ComponentVersion : null;
  }
}

/**
 * SaveInstance请求参数结构体
 * @class
 */
class SaveInstanceRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object
     * @type {string || null}
     */
    this.Body = null;

    /**
     * App Name
     * @type {string || null}
     */
    this.AppName = null;

    /**
     * Stage  Name
     * @type {string || null}
     */
    this.StageName = null;

    /**
     * Instance Name
     * @type {string || null}
     */
    this.InstanceName = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Body = 'Body' in params ? params.Body : null;
    this.AppName = 'AppName' in params ? params.AppName : null;
    this.StageName = 'StageName' in params ? params.StageName : null;
    this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
  }
}

/**
 * ListInstances请求参数结构体
 * @class
 */
class ListInstancesRequest extends AbstractModel {
  constructor() {
    super();

    /**
     * JSON stringified object
     * @type {string || null}
     */
    this.Body = null;

    /**
     * App Name
     * @type {string || null}
     */
    this.AppName = null;

    /**
     * Stage Name
     * @type {string || null}
     */
    this.StageName = null;
  }

  /**
   * @private
   */
  deserialize(params) {
    if (!params) {
      return;
    }
    this.Body = 'Body' in params ? params.Body : null;
    this.AppName = 'AppName' in params ? params.AppName : null;
    this.StageName = 'StageName' in params ? params.StageName : null;
  }
}

module.exports = {
  ListInstancesResponse,
  GetUploadUrlsResponse,
  RunFinishComponentRequest,
  GetComponentAndVersionsRequest,
  PostPublishComponentResponse,
  RunComponentResponse,
  GetComponentAndVersionsResponse,
  GetInstanceRequest,
  SaveInstanceResponse,
  GetComponentVersionRequest,
  PrePublishComponentRequest,
  GetInstanceResponse,
  GetComponentVersionResponse,
  GetUploadUrlsRequest,
  RunComponentRequest,
  RunFinishComponentResponse,
  PrePublishComponentResponse,
  PostPublishComponentRequest,
  SaveInstanceRequest,
  ListInstancesRequest,
};
