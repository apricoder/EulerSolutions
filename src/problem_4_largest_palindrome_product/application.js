const range = require('../commons/range');
const strings = require('../commons/strings');
const _ = require('lodash');

const findLargestPalindromeProductOfNumbersWithLength = (length) => {
  const min = findSmallestNumberWithLength(length);
  const max = findLargestNumberWithLength(length);
  const _range = range(min, max);

  const palindromes = [];
  for (let i = _range.length - 1; i--;) {
    for (let j = i; j--;) {

    }
  }
};

const findLargestNumberWithLength = (length) => {
  if (length > 0) return Math.pow(10, length) - 1;
  else throw new Error(`Invalid number length:`, length);
};

const findSmallestNumberWithLength = (length) => {
  if (length === 1) return 0;
  else if (length > 1) return Math.pow(10, length - 1);
  else throw new Error(`Invalid number length:`, length);
};

const isPalindrome = (number) => {
  const numberString = number.toString();
  const reversedNumberString = strings.reverse(numberString);
  return numberString === reversedNumberString;
};

module.exports = {
  findLargestPalindromeProductOfNumbersWithLength,
  findLargestNumberWithLength,
  findSmallestNumberWithLength,
  isPalindrome
};