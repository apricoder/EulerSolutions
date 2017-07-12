'use strict';

const application = require('./application');
const expect = require('chai').expect;

describe('problem 6: sum square difference', () => {

  it('calculates square difference for range from 1 to 6', () => {
    const delta = application.calculateSquareDifference(1, 6);
    console.log('square difference for range from 1 to 6 is', delta);
    expect(delta).to.equal(350);
  });

  it('calculates square difference for range from 1 to 10', () => {
    const delta = application.calculateSquareDifference(1, 10);
    console.log('square difference for range from 1 to 10 is', delta);
    expect(delta).to.equal(2640);
  });

  it('calculates square difference for range from 1 to 20', () => {
    const delta = application.calculateSquareDifference(1, 20);
    console.log('square difference for range from 1 to 20 is', delta);
    expect(delta).to.equal(41230);
  });

  it('calculates square difference for range from 1 to 100', () => {
    const delta = application.calculateSquareDifference(1, 100);
    console.log('square difference for range from 1 to 100 is', delta);
    expect(delta).to.equal(25164150);
  });

  it('currently supports only ranges with even count of numbers', () => {
    expect(() => application.calculateSquareDifference(1, 5)).to.throw(Error);
  });

});
