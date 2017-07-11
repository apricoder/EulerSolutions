let range = require('./../common/range');

const findLargestPrimeFactor = (number) => {
  const maxFactor = Math.sqrt(number);
  const largeFactors = range(2, maxFactor)
    .filter(index => divisionWithoutRemainder(number, index))
    .map(smallFactor => number / smallFactor);
  if (largeFactors.length) {
    const largestFactor = largeFactors[0];
    if (isPrime(largestFactor)) {
      return largestFactor;
    } else {
      return findLargestPrimeFactor(largestFactor);
    }
  } else {
    return 1;
  }
};

const divisionWithoutRemainder = (number, divider) => number % divider === 0;

const isPrime = (largestFactor) => findLargestPrimeFactor(largestFactor) === 1;

module.exports = {
  findLargestPrimeFactor
};