const application = require('./application');
const expect = require('chai').expect;

describe('problem 2: even fibonacci numbers', () => {

  it('gets even fibonacci numbers sum below 5', () => {
    expect(application.evenFibonacciNumbersSumBelow(3)).to.equal(2);
  });

  it('gets even fibonacci numbers sum below 10', () => {
    expect(application.evenFibonacciNumbersSumBelow(10)).to.equal(2 + 8);
  });

  it('gets even fibonacci numbers sum below 40', () => {
    expect(application.evenFibonacciNumbersSumBelow(40)).to.equal(2 + 8 + 34);
  });

  it('prints sum of even fibonacci numbers below 4 000 000', () => {
    console.log('Sum of even Fibonacci numbers below 4 000 000: '
      + application.evenFibonacciNumbersSumBelow(4000000) // 4613732
    );
  });

});
