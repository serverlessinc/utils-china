'use strict';

class IsInChina {
  inChina() {
    let result;
    if (
      process.env.SERVERLESS_PLATFORM_VENDOR === 'tencent' ||
      process.env.SLS_GEO_LOCATION === 'cn'
    ) {
      result = true;
    } else if (process.env.SERVERLESS_PLATFORM_VENDOR === 'aws') {
      result = false;
    } else {
      result = new Intl.DateTimeFormat('en', { timeZoneName: 'long' })
        .format()
        .includes('China Standard Time');
    }

    return { IsInChina: result };
  }
}

module.exports = IsInChina;
