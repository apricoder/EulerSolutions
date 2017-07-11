'use strict';

const application = require('./application');
const expect = require('chai').expect;

describe('problem 4: largest palindrome product', () => {

  let largestPalindrome;

  xit('finds largest palindrome product of 1 digit numbers', () => {
    largestPalindrome = application.findLargestPalindromeProductOfNumbersWithLength(1);
    expect(largestPalindrome).to.equal(9);
  });

  xit('finds largest palindrome product of 2 digit numbers', () => {
    largestPalindrome = application.findLargestPalindromeProductOfNumbersWithLength(2);
    expect(largestPalindrome).to.equal(9009);
  });

  xit('finds largest palindrome product of 3 digit numbers', () => {
    largestPalindrome = application.findLargestPalindromeProductOfNumbersWithLength(3);
    console.log('Largest palindrome product of two 3 digit numbers is', largestPalindrome);  // 6857
  });

  describe('finding edge numbers with given length', () => {

    it('finds largest 2 digit number', () => {
      expect(application.findLargestNumberWithLength(2)).to.equal(99);
    });

    it('finds largest 5 digit number', () => {
      expect(application.findLargestNumberWithLength(5)).to.equal(99999);
    });

    it('finds largest 1 digit number', () => {
      expect(application.findLargestNumberWithLength(1)).to.equal(9);
    });

    it('finds smallest 4 digit number', () => {
      expect(application.findSmallestNumberWithLength(4)).to.equal(1000);
    });

    it('finds smallest 2 digit number', () => {
      expect(application.findSmallestNumberWithLength(2)).to.equal(10);
    });

    it('finds smallest 1 digit number', () => {
      expect(application.findSmallestNumberWithLength(1)).to.equal(0);
    });

    it('throws error if trying to find largest zero digit number', () => {
      expect(() => application.findLargestNumberWithLength(0)).to.throw(Error);
    });

    it('throws error if trying to find smallest zero digit number', () => {
      expect(() => application.findSmallestNumberWithLength(0)).to.throw(Error);
    });

  })

});
