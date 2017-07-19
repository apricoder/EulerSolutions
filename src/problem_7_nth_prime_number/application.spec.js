'use strict';

const application = require('./application');
const expect = require('chai').expect;

describe('problems 7: finding prime numbers', () => {

  it('finds 1 prime number', () => {
    const prime = application.primeNumberWithIndex(0);
    expect(prime).to.equal(2);
  });

  it('finds 4 prime number', () => {
    const prime = application.primeNumberWithIndex(3);
    expect(prime).to.equal(7);
  });

  it('finds 6 prime number', () => {
    const prime = application.primeNumberWithIndex(5);
    expect(prime).to.equal(13);
  });

  it('finds 14 prime number', () => {
    const prime = application.primeNumberWithIndex(13);
    expect(prime).to.equal(43);
  });

  it('finds 20 prime number', () => {
    const prime = application.primeNumberWithIndex(19);
    console.log('20 prime number is:', prime);
    expect(prime).to.equal(71);
  });

  it('finds 25 prime number', () => {
    const prime = application.primeNumberWithIndex(24);
    console.log('25 prime number is:', prime);
    expect(prime).to.equal(97);
  });

  it('finds 26 prime number', () => {
    const prime = application.primeNumberWithIndex(25);
    console.log('26 prime number is:', prime);
    expect(prime).to.equal(101);
  });

  it('finds 101 prime number', () => {
    const prime = application.primeNumberWithIndex(100);
    console.log('101 prime number is:', prime);
    expect(prime).to.equal(547);
  });

  it('finds 601 prime number', () => {
    const prime = application.primeNumberWithIndex(600);
    console.log('601 prime number is:', prime);
    expect(prime).to.equal(4421);
  });

  it('finds 1001 prime number', () => {
    const prime = application.primeNumberWithIndex(1000);
    console.log('1001 prime number is:', prime);
    expect(prime).to.equal(7927);
  });

  it('finds 10001 prime number', () => {
    const prime = application.primeNumberWithIndex(10000);
    console.log('10001 prime number is:', prime);
    expect(prime).to.equal(104743);
  });

  xit('finds 50001 prime number', () => {
    const prime = application.primeNumberWithIndex(50000);
    console.log('50001 prime number is:', prime);
    expect(prime).to.equal(611957);
  });

});
