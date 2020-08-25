'use strict';
const assert = require('assert');
const util = require('util');
const { coding, common } = require('../../library');

const ClientProfile = common.ClientProfile;
const HttpProfile = common.HttpProfile;
const Credential = common.Credential;
const Client = coding.v20191021.Client;
const Models = coding.v20191021.Models;

class JenkinsFileSteps {
  constructor(...args) {
    this.shells = [];
    if (args.length) {
      const idx = args.length - 1;
      this.tab = `${args[idx]}  `;
    } else {
      this.tab = '  ';
    }
    this.script = null;
  }

  addScriptCode(c) {
    assert(this.script == null, 'Multiple occurrences of the script section');
    this.script = c;
  }

  addShell(s) {
    this.shells.push(s);
    return true;
  }

  toString() {
    const size = this.shells.length;
    let result = util.format('%ssteps {\n', this.tab);
    for (let i = 0; i < size; i++) {
      result += util.format("%s  sh '%s'\n", this.tab, this.shells[i]);
    }
    if (this.script) {
      result += util.format('%s  script {\n %s \n}\n', this.tab, this.script);
    }
    result += util.format('%s}\n', this.tab);
    return result;
  }
}

class JenkinsFileStage {
  constructor(name, ...args) {
    this.name = name;
    this.steps = null;
    this.environments = {};
    if (args.length) {
      const idx = args.length - 1;
      this.tab = `${args[idx]}  `;
    } else {
      this.tab = '  ';
    }
  }

  addEnvironment(name, val) {
    this.environments[name] = val;
  }

  addSteps() {
    assert(this.steps == null, 'Multiple occurrences of the steps section');
    this.steps = new JenkinsFileSteps(this.tab);
    return this.steps;
  }

  toString() {
    let env = '';
    if (Object.keys(this.environments).length) {
      env = util.format('%s  environment {\n', this.tab);

      Object.keys(this.environments).forEach((key) => {
        env += util.format("%s    %s = '%s'\n", this.tab, key, this.environments[key]);
      });

      // for(const key in this.environments) {
      //     env += util.format('%s    %s = \'%s\'\n', this.tab, key, this.environments[key]);
      // }
      env += util.format('%s  }\n', this.tab);
    }

    const steps = this.steps.toString();
    return util.format('%sstage("%s") {\n%s%s%s}\n', this.tab, this.name, env, steps, this.tab);
  }
}

class JenkinsFileStages {
  constructor(...args) {
    this.stages = [];
    if (args.length) {
      const idx = args.length - 1;
      this.tab = `${args[idx]}  `;
    } else {
      this.tab = '  ';
    }
  }

  addStage(name) {
    const stage = new JenkinsFileStage(name, this.tab);
    this.stages.push(stage);
    return stage;
  }

  toString() {
    const size = this.stages.length;
    let result = util.format('%sstages {\n', this.tab);
    for (let i = 0; i < size; i++) {
      result += util.format('%s\n', this.stages[i].toString());
    }
    result += util.format('%s}\n', this.tab);
    return result;
  }
}

class JenkinsFilePipeline {
  constructor() {
    this.tab = '';
    this.options = {};
    this.stages = null;
    this.environments = {};
    this.agent = 'any';
  }

  addEnvironment(name, val) {
    this.environments[name] = val;
  }

  addStages() {
    assert(this.stages == null, 'Multiple occurrences of the stages section');
    this.stages = new JenkinsFileStages(this.tab);
    return this.stages;
  }

  toString() {
    let env = '';
    if (Object.keys(this.environments).length) {
      env = '  environment {\n';
      Object.keys(this.environments).forEach((key) => {
        env += util.format("    %s = '%s'\n", key, this.environments[key]);
      });
      env += '  }\n';
    }
    return util.format(
      'pipeline {\n  agent %s\n%s\n%s}\n',
      this.agent,
      env,
      this.stages.toString()
    );
  }
}

class Ci {
  constructor({ secret_id: secretId, secret_key: secretKey, options }) {
    this.secretKey = secretKey;
    this.secretId = secretId;
    this.options = options;
    assert(options, 'Options should not is empty');

    const cred = options.tmptoken
      ? new Credential(secretId, secretKey, options.tmptoken)
      : new Credential(secretId, secretKey);

    const httpProfile = new HttpProfile();
    httpProfile.reqTimeout = 30;
    const clientProfile = new ClientProfile('HmacSHA256', httpProfile);

    const client = new Client(cred, options.region, clientProfile);
    client.sdkVersion = 'ServerlessFramework';
    this.client = client;
  }

  createProject({ name, alias, description, options = {} }) {
    const req = new Models.CreateProjectWithTemplateRequest();
    req.Name = name;
    req.DisplayName = alias;
    req.GitReadmeEnabled = options.gitReadmeEnabled || true;
    req.VcsType = options.vcsType || 'git';
    req.Shared = options.shared || 0;
    req.ProjectTemplate = options.template || 'DEV_OPS';
    req.GitIgnore = options.gitIgnore || 'no';
    req.Description = description || '';
    req.CreateSvnLayout = options.createSvnLayout || false;
    req.Invisible = options.Invisible || false;
    req.Label = options.Label || 'SLS';

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      this.client.CreateProjectWithTemplate(req, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }

  createCodingCIJob(jobName, projectId, depotId, envs) {
    assert(jobName, 'param jobName required');
    assert(projectId, 'param projectId required');

    const pipeline = new JenkinsFilePipeline();
    const stages = pipeline.addStages();

    let stage = stages.addStage('初始化Nodejs环境');
    let steps = stage.addSteps();
    steps.addShell('env');
    steps.addShell('date');
    steps.addShell('echo TENCENT_SECRET_ID=$TENCENT_SECRET_ID > .env');
    steps.addShell('echo TENCENT_SECRET_KEY=$TENCENT_SECRET_KEY >> .env');
    steps.addShell('echo TENCENT_TOKEN=$TENCENT_TOKEN >> .env');
    steps.addShell('echo SERVERLESS_PLATFORM_VENDOR=tencent >> .env');
    steps.addShell('echo SERVERLESS_PLATFORM_STAGE=$SERVERLESS_PLATFORM_STAGE >> .env');

    const npmshell =
      "''cat > npm.sh << EOF\r\n#! /bin/bash\r\n" +
      'rootPath=\\\\`pwd\\\\`\r\n' +
      'function read_dir(){\r\n' +
      '  for file in \\\\`ls \\\\$1\\\\`\r\n' +
      '  do\r\n' +
      "    if [ -d \\\\$1'/'\\\\$file ]; then\r\n" +
      "      if [ \\\\$file != 'node_modules' ]; then\r\n" +
      "        read_dir \\\\$1'/'\\\\$file\r\n" +
      '      fi\r\n' +
      '    else\r\n' +
      "      if [ \\\\$file = 'package.json' ]; then\r\n" +
      '        cd \\\\$1\r\n' +
      '        npm install\r\n' +
      '        cd \\\\$rootPath\r\n' +
      '      fi\r\n' +
      '    fi\r\n' +
      '  done\r\n' +
      '}\r\n' +
      "read_dir \\\\$1\r\nEOF''";
    steps.addShell(npmshell);
    steps.addShell('cat npm.sh && ls -la');

    stage = stages.addStage('安装Serverless');
    steps = stage.addSteps();
    steps.addShell('npm config ls');
    steps.addShell('npm set registry https://registry.npmjs.org/');
    steps.addShell('npm install -g serverless');
    steps.addShell('sls -v');

    stage = stages.addStage('下载代码');
    steps = stage.addSteps();
    steps.addShell('wget $CODE_URL_COS -O code.zip');
    steps.addShell('ls -l && file code.zip');
    steps.addShell('unzip -n code.zip');

    stage = stages.addStage('Serverless Deploy');
    steps = stage.addSteps();
    steps.addShell('chmod +x ./npm.sh && ./npm.sh `pwd`');
    steps.addShell('serverless deploy --debug');

    const req = new Models.CreateCodingCIJobRequest();
    req.ProjectId = projectId;
    req.Name = jobName;
    req.ExecuteIn = 'CVM';
    req.TriggerMethodList = ['REF_CHANGE', 'MR_CHANGE'];
    req.HookType = 'DEFAULT';
    req.JenkinsFileFromType = 'STATIC';
    req.JenkinsFileStaticContent = pipeline.toString();
    req.AutoCancelSameRevision = true;
    req.AutoCancelSameMergeRequest = true;
    req.TriggerRemind = 'ALWAYS';
    req.JobFromType = 'SERVERLESS';
    if (depotId) {
      req.DepotType = 'CODING';
      req.DepotId = depotId;
    } else {
      req.DepotType = 'NONE';
      req.DepotId = 0;
    }

    req.EnvList = [];

    Object.keys(envs).forEach((k) => {
      req.EnvList.push({
        Name: k,
        Value: envs[k],
        Sensitive: false,
      });
    });

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      this.client.CreateCodingCIJob(req, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }

  triggerCodingCIJobBuild(jobId, envs) {
    const req = new Models.TriggerCodingCIBuildRequest();
    req.JobId = jobId;
    req.Revision = 'master';
    req.ParamList = [];

    Object.keys(envs).forEach((k) => {
      req.ParamList.push({
        Name: k,
        Value: envs[k],
        Sensitive: false,
      });
    });

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      this.client.TriggerCodingCIBuild(req, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }

  describeCodingCIBuildStatus(buildId) {
    const req = new Models.DescribeCodingCIBuildStageRequest();
    req.BuildId = buildId;
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      this.client.DescribeCodingCIBuildStage(req, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }

  describeCodingCIBuildLog(buildId, offset) {
    const req = new Models.DescribeCodingCIBuildLogRequest();
    req.BuildId = buildId; // TriggerCodingCIBuildResponse.Data.CodingCIBuild.Id
    req.Start = offset || 0;
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      this.client.DescribeCodingCIBuildLog(req, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }
}

module.exports = Ci;
