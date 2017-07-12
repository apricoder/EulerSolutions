'use strict';

const math = require('./math');
const expect = require('chai').expect;

describe('commons: math', () => {
  
  describe('finding euclidean greatest common divider', () => {
    
    it('finds gcd of 6 and 9 => 3', () => {
      expect(math.euclideanGcd(6, 9)).to.equal(3);
    });

    it('finds gcd of 6 and 12 => 6', () => {
      expect(math.euclideanGcd(6, 12)).to.equal(6);
    });

    it('finds gcd of 6, 9 and 12 => 3', () => {
      expect(math.euclideanGcd(6, 9, 12)).to.equal(3);
    });

    it('finds gcd of 6 and 1 => 1', () => {
      expect(math.euclideanGcd(6, 1)).to.equal(1);
    });

    it('finds gcd of 840 and 396 => 12', () => {
      expect(math.euclideanGcd(840, 396)).to.equal(12);
    });

    it(`throws exception when trying to find gcd of zero numbers`, () => {
      expect(() => math.euclideanGcd()).to.throw(Error);
    });

    it(`throws exception when trying to find gcd of less than 2 numbers`, () => {
      expect(() => math.euclideanGcd(1)).to.throw(Error);
    });

    it(`throws exception when trying to find gcd of non-numbers`, () => {
      expect(() => math.euclideanGcd('not', 'a', 'number')).to.throw(Error);
    });

  });

  describe('finding recursive greatest common divider', () => {

    it('finds gcd of 6 and 9 => 3', () => {
      expect(math.recursiveGcd(6, 9)).to.equal(3);
    });

    it('finds gcd of 6 and 12 => 6', () => {
      expect(math.recursiveGcd(6, 12)).to.equal(6);
    });

    it('finds gcd of 6, 9 and 12 => 3', () => {
      expect(math.recursiveGcd(6, 9, 12)).to.equal(3);
    });

    it('finds gcd of 6 and 1 => 1', () => {
      expect(math.recursiveGcd(6, 1)).to.equal(1);
    });

    it('finds gcd of 840 and 396 => 12', () => {
      expect(math.recursiveGcd(840, 396)).to.equal(12);
    });

    it(`throws exception when trying to find gcd of zero numbers`, () => {
      expect(() => math.recursiveGcd()).to.throw(Error);
    });

    it(`throws exception when trying to find gcd of less than 2 numbers`, () => {
      expect(() => math.recursiveGcd(1)).to.throw(Error);
    });

    it(`throws exception when trying to find gcd of non-numbers`, () => {
      expect(() => math.recursiveGcd('not', 'a', 'number')).to.throw(Error);
    });

  });

  describe('finding smallest common multiple using recursive gcd', () => {

    it('finds scm of 6, 10 and 15 => 30', () => {
      expect(math.scm(6, 10, 15)).to.equal(30);
    });

    it('finds scm of 840 and 396 => 27720', () => {
      expect(math.scm(840, 396)).to.equal(27720);
    });

    it(`throws exception when trying to find scm of less than 2 numbers`, () => {
      expect(() => math.scm(1)).to.throw(Error);
    });

    it(`throws exception when trying to find scm of non-numbers`, () => {
      expect(() => math.scm('not', 'a', 'number')).to.throw(Error);
    });

  });

});
