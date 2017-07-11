const application = require('./application');
const expect = require('chai').expect;

describe('problem 1: multiples of 3 and 5', () => {

  it('sums multiples of 3 below 10', () => {
    const numbers = [3];
    const limit = 10;
    const sum_of_multiples_of_3_below_10 = 3 + 6 + 9;
    const sum = application.countMultiplesSum(limit, numbers);
    expect(sum).to.equal(sum_of_multiples_of_3_below_10)
  });

  it(`doesn't include max number if it's a multiple`, () => {
    const numbers = [5];
    const limit = 10;
    const sum_of_multiples_of_5_below_10 = 5;   // not including 10
    const sum = application.countMultiplesSum(limit, numbers);
    expect(sum).to.equal(sum_of_multiples_of_5_below_10)
  });

  it('sums multiples of 3 and 5 below 10', () => {
    const numbers = [3, 5];
    const limit = 10;
    const sum_of_multiples_of_3_and_5_below_10 = 3 + 5 + 6 + 9;
    const sum = application.countMultiplesSum(limit, numbers);
    expect(sum).to.equal(sum_of_multiples_of_3_and_5_below_10)
  });

  it('sums multiples of 3 and 5 below 1000', () => {
    const numbers = [3, 5];
    const limit = 1000;
    const sum_of_multiples_of_3_and_5_below_1000 = 233168;
    const sum = application.countMultiplesSum(limit, numbers);
    expect(sum).to.equal(sum_of_multiples_of_3_and_5_below_1000)
  });

});
