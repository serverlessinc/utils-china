'use strict';
/**
 * check ci environment
 */

class Environment {
  static get Type() {
    return Object.freeze({
      Github: 1,
      // some type ...
    });
  }

  githubChecker() {
    const envs = [
      'GITHUB_RUN_ID',
      'GITHUB_ACTION',
      'GITHUB_SHA',
      'GITHUB_WORKFLOW',
      'GITHUB_EVENT_NAME',
      // user custom setting
      'GLOBAL_ACCELERATOR_NA',
    ];
    const len = envs.length;
    for (let i = 0; i < len; i++) {
      const key = envs[i];
      if (process.env[key]) {
        return true;
      }
    }
    return false;
  }

  checker(type) {
    const provides = {
      1: this.githubChecker,
    };

    return provides[type] || null;
  }

  useGlobalStore() {
    return this.checkEnvironment(Environment.Type.Github);
  }

  checkEnvironment(type) {
    if (!this.checker(type)) {
      return false;
    }

    return this.checker(type)();
  }
}

module.exports = Environment;
