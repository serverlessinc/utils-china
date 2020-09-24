'use strict';

const dayjs = require('dayjs');

function formatTime(time, format = 'YYYY-MM-DD') {
  let d = time || new Date();
  try {
    if (!(d instanceof Date)) {
      d = new Date(d);
    }
  } catch (e) {
    // if time can not transfer to Date instance, using now date
    d = new Date();
  }

  return dayjs(d).format(format);
}

function getCodeLine() {
  try {
    throw new Error();
  } catch (error) {
    return (
      error.stack
        .split('\n')[2] // Grabs third line
        .trim() // Removes spaces
        .substring(3) // Removes three first characters ("at ")
        .replace(__dirname, '') // Removes script folder path
        // .replace('Object.<anonymous>', 'code') // Removes script folder path
        .replace(/\s\(./, ' at ') // Removes first parentheses and replaces it with " at "
        .replace(/\)/, '')
    ); // Removes last parentheses
  }
}

module.exports = {
  formatTime,
  getCodeLine,
};
