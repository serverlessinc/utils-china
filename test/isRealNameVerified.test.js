'use strict';

require('dotenv').config();
const { isRealNameVerified } = require('../sdk/account');

async function main() {
  const res = await isRealNameVerified({
    secretId: process.env.TENCENT_SECRET_ID,
    secretKey: process.env.TENCENT_SECRET_KEY,
    // token: process.env.TENCENT_TOKEN,
  });
  console.log(res);
}

main();
