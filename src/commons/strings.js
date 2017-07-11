const _ = require('lodash');

const reverse = (string) => {
  if (!_.isString(string)) throw new Error(`Invalid string passed:`, string);
  let reversed = '';
  for (let i = string.length; i--;) reversed += string[i]
  return reversed;
};

module.exports = {
  reverse
};