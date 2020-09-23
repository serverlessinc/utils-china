'use strict';

require('dotenv').config();
const { isRealnameAuth } = require('../sdk/account');

async function main() {
  const res = await isRealnameAuth({
    secretId: process.env.TENCENT_SECRET_ID,
    secretKey: process.env.TENCENT_SECRET_KEY,
    // token: process.env.TENCENT_TOKEN,
  });
  console.log(res);
}

main();
