const range = require('../commons/range');

const countMultiplesSum = (max, numbers) => {
  return numbers
    .map(n => range(n, max, n))
    .reduce((acc, next) => acc.concat(next))
    .filter((val, index, arr) => arr.indexOf(val) === index)
    .reduce((acc, next) => acc + next);
};

module.exports = {
  countMultiplesSum
};