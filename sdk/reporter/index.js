'use strict';

const kafka = require('kafka-node');

const { LOG_LEVELS, createLog } = require('./logger');

class ErrorReporter {
  constructor(host, topic, baseOptions = {}) {
    const client = new kafka.KafkaClient({ kafkaHost: host });
    this.producer = new kafka.Producer(client);
    this.topic = topic;
    this.baseOptions = baseOptions;
  }

  async report(options = {}) {
    if (!LOG_LEVELS[options.LogLevel]) {
      return false;
    }
    const log = createLog(this.baseOptions, options);
    return this.update(log);
  }

  async update(body) {
    const payloads = [
      {
        topic: this.topic,
        messages: JSON.stringify(body),
      },
    ];

    const result = await new Promise((res, rej) => {
      this.producer.on('ready', () => {
        this.producer.send(payloads, (err, data) => {
          if (err) {
            rej(err);
          }
          res(data);
        });
      });
    });
    return result;
  }
}

module.exports = ErrorReporter;
