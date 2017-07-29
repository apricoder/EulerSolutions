'use strict';

/**
 * Switch between application.optimized and application.simple
 * to compare performance
 */
const application = require('./application.optimized');
const expect = require('chai').expect;

describe('problems 8: finding largest product in a series', () => {

  const thousandDigitNumber =
    '73167176531330624919225119674426574742355349194934' +
    '96983520312774506326239578318016984801869478851843' +
    '85861560789112949495459501737958331952853208805511' +
    '12540698747158523863050715693290963295227443043557' +
    '66896648950445244523161731856403098711121722383113' +
    '62229893423380308135336276614282806444486645238749' +
    '30358907296290491560440772390713810515859307960866' +
    '70172427121883998797908792274921901699720888093776' +
    '65727333001053367881220235421809751254540594752243' +
    '52584907711670556013604839586446706324415722155397' +
    '53697817977846174064955149290862569321978468622482' +
    '83972241375657056057490261407972968652414535100474' +
    '82166370484403199890008895243450658541227588666881' +
    '16427171479924442928230863465674813919123162824586' +
    '17866458359124566529476545682848912883142607690042' +
    '24219022671055626321111109370544217506941658960408' +
    '07198403850962455444362981230987879927244284909188' +
    '84580156166097919133875499200524063689912560717606' +
    '05886116467109405077541002256983155200055935729725' +
    '71636269561882670428252483600823257530420752963450';

  it('gets 2 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 2);
    console.log(`Largest product of 2 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(81);
  });

  it('gets 3 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 3);
    console.log(`Largest product of 3 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(648);
  });

  it('gets 4 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 4);
    console.log(`Largest product of 4 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(5832);
  });

  it('gets 5 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 5);
    console.log(`Largest product of 5 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(40824);
  });

  it('gets 6 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 6);
    console.log(`Largest product of 6 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(285768);
  });

  it('gets 7 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 7);
    console.log(`Largest product of 7 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(2571912);
  });

  it('gets 13 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 13);
    console.log(`Largest product of 13 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(23514624000);
  });

  it('gets 18 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 18);
    console.log(`Largest product of 18 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(25406375500800);
  });

  it('gets 25 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 25);
    console.log(`Largest product of 25 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(94810963968000000);
  });

  it('gets 30 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 30);
    console.log(`Largest product of 30 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(374476218826752000000);
  });

  it('gets 32 serial digits largest product', () => {
    const largestProduct = application.largestSerialDigitsProduct(thousandDigitNumber, 32);
    console.log(`Largest product of 32 serial digits in given 1000-digit number is: ${largestProduct}`);
    expect(largestProduct).to.equal(2.097066825429811e+22);
  });

  it(`counts weight of number chunk by it's sum`, () => {
    const weight = application.productOf('1234');
    expect(weight).to.equal(24);
  });

  it('converts chunk to numbers array', () => {
    const numbers = application.numberArrFrom('1234');
    expect(numbers).to.deep.equal([1, 2, 3, 4]);
  });

});
