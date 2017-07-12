'use strict';

const params = require('./params');
const expect = require('chai').expect;

describe('commons: params', () => {

  it(`throws exception when non-number param found`, () => {
    expect(() => params.requireOnlyNumbers([1, 2, 3, 4, '5'])).to.throw(Error);
  });

  it(`doesn't throw exception when only number params passed`, () => {
    expect(() => params.requireOnlyNumbers([1, 2, 3, 4, 5])).to.not.throw(Error);
  });

  it(`throws exception if less than 5 params passed`, () => {
    expect(() => params.requireMinCount(5, [1, 2, 3, 4])).to.throw(Error);
  });

  it(`doesn't throw exception if 3 or more params passed`, () => {
    expect(() => params.requireMinCount(3, [1, 2, 3])).to.not.throw(Error);
  });

});
