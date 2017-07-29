const evenFibonacciNumbersSumBelow = (max) => {
  let curr = 1, prev = 0, sum = 0;
  while (curr < max) {
    if (curr % 2 === 0) sum += curr;
    curr = curr + prev;
    prev = curr - prev;
  }
  return sum;
};

module.exports = {
  evenFibonacciNumbersSumBelow
};