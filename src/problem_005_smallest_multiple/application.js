'use strict';

const range = require('../commons/range');
const math = require('../commons/math');

const findSmallestCommonMultipleOfNumbersBetween = (min, max) => {
  return math.scm(...range(min, max));
};

module.exports = {
  findSmallestCommonMultipleOfNumbersBetween
};
