'use strict';

const range = require('../commons/range');

/**
 * @description
 * Gets range of numbers between given bounds and calculates difference of
 * [square of sum of range numbers] and [sum of squares of range numbers].
 * See simplified sample calculation in example.
 *
 * Implemented calculation is done using this formula
 * Δ = (n[1] + n[l])^2 * l/2 * (l/2 - 1) + Σ[k=1, k <= l/2] <- 2 * n[k] * n[l-k+1]
 * where n[x] is x-th number of range and l is length of range
 *
 * @requires range with even count of numbers
 *
 * @param {Number} [min=1] - Lower edge of range (including)
 * @param {Number} max - Upper edge of range (including)
 * @returns {Number} Difference of [square of sum of range numbers] and [sum of squares of range numbers]
 *
 * @example
 * calculateSquareDifference(6)
 *  => (1 + 2 + 3 + 4 + 5 + 6)^2 - (1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2)
 *  => 21^2 - (1 + 4 + 9 + 16 + 25 + 36)
 *  => 441 - 91
 *  => 350
 */
const calculateSquareDifference = (min = 1, max) => {

  // numbers range
  const n = range(min, max + 1);

  // range length
  const l = n.length;

  // currently only ranges with even count of numbers are fully
  // valid because of calculations on opposite numbers described below
  if (l % 2) throw new Error('Only ranges with even count of numbers supported');

  // half of range length
  const h = l / 2;

  // square of opposite numbers pair sum
  // ----------------------------------------------------------------------
  // opposite numbers are numbers with the same distance to closer range edge
  // for example, in range [1, 2, 3, 4, 5, 6] 1 and 6 are opposite, as they
  // both have distance 0 to range edge, as well as 2 and 5 or 3 and 4
  // note that the sum of any of opposite numbers pair is the same number
  const oppSumSquare = Math.pow(n[0] + n[l - 1], 2);

  // sum of doubled opposite numbers products
  const oppsProductsSum = range(0, h).reduce((sum, k) => sum + 2 * n[k] * n[l - k - 1], 0);

  // Δ = (n[1] + n[l])^2 * l/2 * (l/2 - 1) + Σ[k=1, k <= l/2] <- 2 * n[k] * n[l-k+1]
  // Δ = {_oppSumSquare} * {h} * ({h} - 1) + {___________oppsProductsSum___________}
  return oppSumSquare * h * (h - 1) + oppsProductsSum;
};

module.exports = {
  calculateSquareDifference
};