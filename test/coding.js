'use strict';
const assert = require('assert');
const { coding, common } = require('../library');

const ClientProfile = common.ClientProfile;
const HttpProfile = common.HttpProfile;
const Credential = common.Credential;
const Client = coding.v20191021.Client;
const Models = coding.v20191021.Models;

class TestCoding {
  constructor(secretId, secretKey, tmptoken, region) {
    assert(secretId, 'secret id not allow empty');
    assert(secretKey, 'secret key not allow empty');

    const cred = tmptoken
      ? new Credential(secretId, secretKey, tmptoken)
      : new Credential(secretId, secretKey);

    const httpProfile = new HttpProfile();
    httpProfile.reqTimeout = 30;
    const clientProfile = new ClientProfile('HmacSHA256', httpProfile);

    const client = new Client(cred, region, clientProfile);
    client.sdkVersion = 'ServerlessFramework';
    this.client = client;
  }

  async test() {
    const req = new Models.DescribePackageListRequest();
    req.TeamId = 'RepositoryName';
    req.ProjectId = 'ProjectId';
    req.RepositoryName = 'RepositoryName';
    /*
    this.client.DescribePackageList(req, (err, response) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(response);
    });
    */
  }
}

function main() {
  const secretId = process.env.SECRET_ID;
  const secretKey = process.env.SECRET_KEY;
  const region = process.env.REGION || 'ap-guangzhou';
  const tmptoken = process.env.TOKEN || null;

  const testCoding = new TestCoding(secretId, secretKey, tmptoken, region);
  testCoding.test();
}

main();
