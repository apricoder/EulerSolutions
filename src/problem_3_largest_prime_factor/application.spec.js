const application = require('./application');
const expect = require('chai').expect;

describe('application', () => {

  it('finds largest prime factor of 133', () => {
    expect(application.findLargestPrimeFactor(133)).to.equal(19);
  });

  it('finds largest prime factor of 7791', () => {
    expect(application.findLargestPrimeFactor(7791)).to.equal(53);
  });

  it('prints largest prime factor of 600851475143', () => {
    console.log("Largest prime factor of 600851475143 is "
      + application.findLargestPrimeFactor(600851475143) // 6857
    );
  });

});
