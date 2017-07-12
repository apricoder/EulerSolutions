'use strict';

const params = require('../commons/params');

const scm = (...numbers) => {
  params.requireOnlyNumbers(numbers);
  params.requireMinCount(2, numbers);
  if (numbers.length === 2) {
    const a = numbers[0];
    const b = numbers[1];
    return a * b / recursiveGcd(a, b);
  }

  return numbers.reduce((prev, next) => scm(prev, next));
};

const euclideanGcd = (...numbers) => {
  params.requireOnlyNumbers(numbers);
  params.requireMinCount(2, numbers);
  if (numbers.length === 2) {
    let a = numbers[0];
    let b = numbers[1];
    while (a !== b) {
      if (a > b) a -= b;
      if (b > a) b -= a;
    }
    return a;
  }
  return numbers.reduce((prev, next) => euclideanGcd(prev, next));
};

const recursiveGcd = (...numbers) => {
  params.requireOnlyNumbers(numbers);
  params.requireMinCount(2, numbers);
  if (numbers.length === 2) {
    let a = numbers[0];
    let b = numbers[1];
    if (b === 0) return a;
    return recursiveGcd(b, a % b);
  }
  return numbers.reduce((prev, next) => recursiveGcd(prev, next));
};

module.exports = {
  euclideanGcd,
  recursiveGcd,
  scm
};
