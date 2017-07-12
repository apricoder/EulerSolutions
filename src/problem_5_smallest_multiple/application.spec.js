'use strict';

const application = require('./application');
const expect = require('chai').expect;

describe('problem 5: smallest multiple', () => {

  it('finds smallest common positive multiple of numbers between 1 and 10', () => {
    const scm = application.findSmallestCommonMultipleOfNumbersBetween(1, 10);
    console.log(`Smallest common positive multiple of numbers between 1 and 10 is`, scm);
    expect(scm).to.equal(2520);
  });

  it('finds smallest common positive multiple of numbers between 1 and 20', () => {
    const scm = application.findSmallestCommonMultipleOfNumbersBetween(1, 20);
    console.log(`Smallest common positive multiple of numbers between 1 and 20 is`, scm);
    expect(scm).to.equal(232792560);
  });

});
