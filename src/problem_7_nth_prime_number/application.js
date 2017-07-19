const primeNumberWithIndex = (index) => {
  let n = 5;
  let primes = [2, 3];

  while (primes.length <= index) {
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

  return primes[index];
};

module.exports = {
  primeNumberWithIndex
};