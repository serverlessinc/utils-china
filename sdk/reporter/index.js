'use strict';

const kafka = require('kafka-node');

const { LOG_LEVELS, createLog } = require('./logger');

class Reporter {
  constructor(host, topic, baseOptions = {}) {
    this.producerReady = false;
    const client = new kafka.KafkaClient({ kafkaHost: host });
    this.producer = new kafka.Producer(client);
    // prevent error event emit to process
    client.on('error', (e) => {
      console.log(e);
    });
    this.producer.on('error', (e) => {
      console.log(e);
    });
    this.producer.on('ready', () => {
      this.producerReady = true;
    });
    this.topic = topic;
    this.baseOptions = baseOptions;
  }

  async report(options = {}) {
    if (!LOG_LEVELS[options.logLevel || options.LogLevel]) {
      return false;
    }
    const log = createLog(this.baseOptions, options);
    return this.update(log);
  }

  async waitProducerReady() {
    let count = 0;
    while (!this.producerReady && count < 25) {
      await new Promise((res) => {
        setTimeout(() => {
          res();
        }, 200);
      });
      count++;
    }
    if (this.producerReady) {
      return true;
    }
    console.log('kafka client connect timeout');
    return false;
  }

  async update(body) {
    const payloads = [
      {
        topic: this.topic,
        messages: JSON.stringify(body),
      },
    ];
    const producerReady = await this.waitProducerReady();
    if (!producerReady) {
      return 'connect timeout';
    }
    const result = await new Promise((res, rej) => {
      this.producer.send(payloads, (err, data) => {
        if (err) {
          rej(err);
        }
        res(data);
      });
    });
    return result;
  }

  async closeClient() {
    const result = await new Promise((res) => {
      this.producer.close(() => {
        res();
      });
    });
    return result;
  }
}

module.exports = Reporter;
