'use strict';

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
  getCodeLine,
};
