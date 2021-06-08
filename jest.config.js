'use strict';

const { join } = require('path');

// eslint-disable-next-line
require('dotenv').config({ path: join(__dirname, '.env.test') });

const config = {
  verbose: true,
  silent: false,
  testTimeout: 60000,
  testEnvironment: 'node',
  testRegex: '/__tests__/.*\\.(test|spec)\\.(js|ts)$',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/lib/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

module.exports = config;
