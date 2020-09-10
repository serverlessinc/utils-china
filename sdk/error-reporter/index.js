'use strict';

const { Client } = require('@elastic/elasticsearch');
const { LOG_LEVELS, createLog } = require('./logger');
const { formatTime } = require('./utils');
const uuidv4 = require('uuid').v4;

class ErrorReporter {
  constructor({ node, username, password }) {
    this.logName = 'ServelessFramework';
    this.type = 'sls-log';
    this.client = new Client({
      node,
      auth: {
        username,
        password,
      },
    });
  }

  report(options = {}) {
    if (!LOG_LEVELS[options.LogLevel]) {
      return false;
    }
    const log = createLog(options);
    const logName = `${this.logName}-${formatTime()}`;
    const logId = uuidv4();
    return this.update({
      index: logName,
      id: logId,
      type: this.type,
      body: log,
    }).catch((e) => {
      console.log(e);
    });
  }

  async update({ index, id, type, body }) {
    const data = {
      doc: body,
      doc_as_upsert: true,
    };
    const res = await this.client.update({
      id,
      index,
      type,
      body: data,
    });
    return res;
  }
}

module.exports = ErrorReporter;
