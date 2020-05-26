'use strict';

/**
 * @inner
 */
class AbstractModel {
  /**
   * @inner
   */
  deserialize() {}

  /**
   * 将object转化为json格式的string
   * @return {string}
   */
  toJsonString() {
    return JSON.stringify(this);
  }

  /**
   * 将json格式的string转化为object
   * @param  {string} dataString
   */
  fromJsonString(dataString) {
    const params = JSON.parse(dataString);
    this.deserialize(params);
  }
}
module.exports = AbstractModel;
