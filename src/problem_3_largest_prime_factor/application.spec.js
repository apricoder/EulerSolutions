const application = require('./application');
const expect = require('chai').expect;

describe('problem 3: largest prime factor', () => {

  it('finds largest prime factor of 133', () => {
    expect(application.findLargestPrimeFactor(133)).to.equal(19);
  });

  it('finds largest prime factor of 7791', () => {
    expect(application.findLargestPrimeFactor(7791)).to.equal(53);
  });

  xit('prints largest prime factor of 600851475143', () => {
    const primeFactor = application.findLargestPrimeFactor(600851475143);
    console.log('Largest prime factor of 600851475143 is ', primeFactor);
    expect(primeFactor).to.equal(6857);
  });

});
