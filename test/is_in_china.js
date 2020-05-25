'use strict';

const Others = require('../sdk/others');

class OthersAction {
  async getIsInChina() {
    const isInChina = new Others.IsInChina();
    const inChina = await isInChina.inChina();
    console.log(inChina);
  }
}

new OthersAction().getIsInChina();
