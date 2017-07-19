const largestAdjacentNumbersProduct = (digit, adjacencyLength) => {
  let maxWeight = 0;
  let maxWeightIndex = - 1;
  for (let i = 0; i < digit.length - adjacencyLength; i++) {
    const chunk = digit.substring(i, i + adjacencyLength);
    const weight = productOf(chunk);
    if (weight > maxWeight) {
      maxWeight = weight;
      maxWeightIndex = i;
    }
  }

  if (maxWeightIndex >= 0) {
    const maxWeightChunk = digit.substring(maxWeightIndex, maxWeightIndex + adjacencyLength);
    return productOf(maxWeightChunk);
  } else {
    throw new Error(`Can't find largest adjacent numbers product`);
  }
};

const productOf = (chunk) => {
  if (chunk.indexOf('0') === -1) {
    return numberArrFrom(chunk).reduce((weight, next) => weight * next);
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
  largestAdjacentNumbersProduct,
  productOf,
  numberArrFrom
};