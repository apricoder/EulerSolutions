const sumPrimesBelow = (limit) => {
  let primes = [2];
  let n = 3;

  while (n < limit) {
    let primeLimit = Math.sqrt(n);
    let isPrime = true;
    for (
      let primeIndex = 0, p = primes[primeIndex];
      p <= primeLimit;
      primeIndex += 1, p = primes[primeIndex]
    ) {
      if (n % p === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(n);
    }

    n += 2;
  }

  return primes.reduce((sum, next) => sum + next);
};

module.exports = {
  sumPrimesBelow
};