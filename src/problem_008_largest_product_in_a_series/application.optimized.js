/**
 * @description
 * <p>
 *   Optimized way to calculate max product of serial digits. Instead of recounting
 *   each serial digits product, multiplications are reduced to only recalculating
 *   changed part of a product.
 * </p>
 *
 * <p>
 *   For example when comparing products of [1, 2, 3, 4] and [2, 3, 4, 5], instead of
 *   comparing 1 * 2 * 3 * 4 and 2 * 3 * 4 * 5, in this implementation we calculate
 *   product of 1 * 2 * 3 * 4 and then multiply it by 5 (new number from the next set)
 *   and divide it by 1 (the first number of the previous set). This helps to reduce
 *   a number of multiplications by {digitsCount} - 2 on each set of digits.
 * </p>
 *
 * @param {String} number - a source number from which serial digits product is calculated from.
 * @param {Number} digitsCount - count of serial digits in number to calculate product from.
 * @returns {number} largest product of {digitsCount} serial digits from {number}.
 *
 * @see specific behavior for zeros in sets
 */
const largestSerialDigitsProduct = (number, digitsCount) => {
  let maxProduct = 0;
  let product = productOf(number.substring(0, digitsCount));
  for (let i = 0; i < number.length - digitsCount; i++) {
    const prevFirst = +number[i];
    const nextLast = +number[i + digitsCount];

    if (nextLast) product *= nextLast;
    else { product = 0; continue; }

    if (prevFirst) product /= prevFirst;
    else product = productOf(number.substring(i + 1, i + 1 + digitsCount));

    if (product > maxProduct) maxProduct = product;
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