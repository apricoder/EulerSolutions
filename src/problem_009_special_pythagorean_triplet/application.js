const findPythagoreanTripletWithSum = (s) => {
  for (let a = 1; a < s - 2; a++) {
    for (let b = s - 2; b > 1; b--) {
      if (match(a, b, s)) {
        const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        return {a, b, c, s};
      }
    }
  }

  throw new Error(`Couldn't find pythagorean triplet with sum:`, s);
};

const match = (a, b, sum) => {
  return a === (sum / 2 - b) / (1 - b / sum);
};

module.exports = {
  findPythagoreanTripletWithSum,
  match
};