'use strict';

const strings = require('./strings');
const expect = require('chai').expect;

describe('commons: strings', () => {

  it('reverses string', () => {
    expect(strings.reverse('mama')).to.equal('amam');
  });

  it('reverses empty string', () => {
    expect(strings.reverse('')).to.equal('');
  });

  it('throws an error on reversing null string', () => {
    expect(() => strings.reverse()).to.throw(Error);
  });

  it('throws an error on reversing not a string', () => {
    expect(() => strings.reverse(15)).to.throw(Error);
  });

});