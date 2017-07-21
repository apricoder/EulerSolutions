const application = require('./application');
const expect = require('chai').expect;

describe('problem 10: summation of primes', () => {

  it('sums all primes below 10', () => {
    const limit = 10;
    const sum = application.sumPrimesBelow(limit);
    console.log('Sum of all prime numbers below', limit, 'is',  sum);
    expect(sum).to.equal(17);
  });

  xit('sums all primes below 1000000', () => {
    const limit = 1000000;
    const sum = application.sumPrimesBelow(limit);
    console.log('Sum of all prime numbers below', limit, 'is',  sum);
    expect(sum).to.equal(37550402023);
  });

  xit('sums all primes below 2000000', () => {
    const limit = 2000000;
    const sum = application.sumPrimesBelow(limit);
    console.log('Sum of all prime numbers below', limit, 'is',  sum);
    expect(sum).to.equal(142913828922);
  });

});