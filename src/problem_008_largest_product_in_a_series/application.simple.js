/**
 * The simple way to calculate max product of serial digits.
 *
 * @param {String} number - a source number from which serial digits product is calculated from
 * @param {Number} digitsCount - count of serial digits in number to calculate product from
 * @returns {Number} largest product of {digitsCount} serial digits from {number}
 */
const largestSerialDigitsProduct = (number, digitsCount) => {
  let maxProduct = 0;
  for (let i = 0; i < number.length - digitsCount; i++) {
    const chunk = number.substring(i, i + digitsCount);
    const product = productOf(chunk);
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
};

const productOf = (chunk) => {
  if (chunk.indexOf('0') === -1) {
    return numberArrFrom(chunk).reduce((product, next) => product * next);
  } else {
    return 0;
  }
};

const numberArrFrom = (chunk) => {
  return chunk
    .split('')
    .map(c => +c);
};

module.exports = {
  largestSerialDigitsProduct,
  productOf,
  numberArrFrom
};