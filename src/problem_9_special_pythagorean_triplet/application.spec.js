const application = require('./application');
const expect = require('chai').expect;

describe('problem 9: special pythagorean triplet', () => {

  xit('finding pythagorean triplet with a² + b² = c² and a + b + c = 1000', () => {
    const s = 1000;
    const triplet = application.findPythagoreanTripletWithSum(s);
    const printableTriplet = JSON.stringify(triplet);
    console.log(`pythagorean triplet with a² + b² = c² and a + b + c = ${s}: ${printableTriplet}`);
    expect(triplet).to.deep.equal({a: 200, b: 375, c: 425, s: 1000});
  });

  it('finds product of pythagorean triplet with a² + b² = c² and a + b + c = 1000', () => {
    const s = 1000;
    const triplet = application.findPythagoreanTripletWithSum(s);
    const tripletProduct = triplet.a * triplet.b * triplet.c;
    console.log(
      `product in pythagorean triplet with a² + b² = c² and a + b + c = ${s}` +
      ` is ${triplet.a} x ${triplet.b} x ${triplet.c} = ${tripletProduct}`);
    expect(tripletProduct).to.deep.equal(200 * 375 * 425);  // 31875000
  });

  it('checks if given numbers match formula', () => {
    const a = 1500;
    const b = 2000;
    const s = 1000;
    const match = application.match(a, b, s);
    expect(match).to.true;
  });

  it(`checks if given numbers don't match formula`, () => {
    const a = 1000;
    const b = 2000;
    const s = 1000;
    const match = application.match(a, b, s);
    expect(match).to.false;
  });

});