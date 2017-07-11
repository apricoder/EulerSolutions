const range = require('./range');
const expect = require('chai').expect;

describe('commons: range', () => {

  it('returns a range of numbers between bounds', () => {
    const _range = range(0, 5);
    expect(_range).to.deep.equal([0, 1, 2, 3, 4]);
  });

  it('returns a range of numbers between bound with given step', () => {
    const _range = range(0, 5, 2);
    expect(_range).to.deep.equal([0, 2, 4]);
  });

  it('includes given lower bound to range', () => {
    const _range = range(0, 5);
    expect(_range).to.contain(0);
  });

  it('excludes given upper bound', () => {
    const _range = range(0, 5);
    expect(_range).not.to.contain(5);
  });

});