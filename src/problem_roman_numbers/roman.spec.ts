import { expect } from 'chai';
import { fromRoman, getSignCombos, subtractableSigns, fromDecimal } from './roman';

describe(`roman / decimal converter`, () => {

  describe(`convert roman to decimal`, () => {

    it(`checks the subtractable signs`, () => {
      expect(subtractableSigns).to.deep.equal([ 'I', 'X', 'C', 'M' ]);
    });

    it(`gets the subtractable combos`, () => {
      expect(getSignCombos('I')).to.deep.equal([
        { 'IV': 4 },
        { 'IX': 9 },
      ]);

      expect(getSignCombos('X')).to.deep.equal([
        { 'XL': 40 },
        { 'XC': 90 },
      ]);
    });

    it(`converts a simple roman number`, () => {
      expect(fromRoman('I')).to.equal(1);
      expect(fromRoman('V')).to.equal(5);
      expect(fromRoman('X')).to.equal(10);
    });

    it(`converts combo roman numbers`, () => {
      expect(fromRoman('IV')).to.equal(4);
      expect(fromRoman('IX')).to.equal(9);
      expect(fromRoman('XL')).to.equal(40);
      expect(fromRoman('XC')).to.equal(90);
      expect(fromRoman('CD')).to.equal(400);
      expect(fromRoman('CM')).to.equal(900);
    });

    it(`converts complex roman numbers`, () => {
      expect(fromRoman('XIV')).to.equal(14);
      expect(fromRoman('LIX')).to.equal(59);
      expect(fromRoman('XXXIII')).to.equal(33);
      expect(fromRoman('XCIX')).to.equal(99);
      expect(fromRoman('MCDXLIV')).to.equal(1444);
      expect(fromRoman('MMCMXCIX')).to.equal(2999);
    });

  });

  describe(`convert decimal to roman`, () => {

    it(`converts perfect match decimals to roman`, () => {
      expect(fromDecimal(1)).to.eq('I');
      expect(fromDecimal(5)).to.eq('V');
      expect(fromDecimal(10)).to.eq('X');
      expect(fromDecimal(50)).to.eq('L');
      expect(fromDecimal(100)).to.eq('C');
      expect(fromDecimal(500)).to.eq('D');
      expect(fromDecimal(1000)).to.eq('M');
    });

    it(`converts perfect match decimals to combo roman`, () => {
      expect(fromDecimal(4)).to.eq('IV');
      expect(fromDecimal(9)).to.eq('IX');
      expect(fromDecimal(40)).to.eq('XL');
      expect(fromDecimal(90)).to.eq('XC');
      expect(fromDecimal(400)).to.eq('CD');
      expect(fromDecimal(900)).to.eq('CM');
    });

    it(`converts decimals to combined roman`, () => {
      expect(fromDecimal(14)).to.eq('XIV');
      expect(fromDecimal(44)).to.eq('XLIV');
      expect(fromDecimal(99)).to.eq('XCIX');
    });

    it(`converts decimals to complex roman`, () => {
      expect(fromDecimal(3)).to.eq('III');
      expect(fromDecimal(7)).to.eq('VII');
      expect(fromDecimal(8)).to.eq('VIII');
      expect(fromDecimal(13)).to.eq('XIII');
    });

    it(`converts decimals to complex roman`, () => {
      expect(fromDecimal(3449)).to.eq('MMMCDXLIX');
      expect(fromDecimal(1996)).to.eq('MCMXCVI');
      expect(fromDecimal(1848)).to.eq('MDCCCXLVIII');
      expect(fromDecimal(1404)).to.eq('MCDIV');
    });

  });

});
