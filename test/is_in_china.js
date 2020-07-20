'use strict';

const Others = require('../sdk/others');

class OthersAction {
  async getIsInChina() {
    const isInChina = new Others.IsInChina();
    const inChina = await isInChina.inChina();
    console.log(inChina);
  }

  checkEnv() {
    const envChceker = new Others.Environment();
    console.log(envChceker.useGlobalStore());
  }
}

new OthersAction().checkEnv();
new OthersAction().getIsInChina();
