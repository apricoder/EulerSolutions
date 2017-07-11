const findLargestPalindromeProductOfNumbersWithLength = (length) => {

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

module.exports = {
  findLargestPalindromeProductOfNumbersWithLength,
  findLargestNumberWithLength,
  findSmallestNumberWithLength
};