import { expect } from 'chai';
import { subtract } from './challenge';

describe(`subtracting positive integers`, () => {

  describe(`positive result`, () => {

    it(`subtracts 4 - 2`, () => {
      expect(subtract('4', '2')).to.equal('2');
    });

    it(`subtracts 177 - 73`, () => {
      expect(subtract('177', '73')).to.equal('104');
    });

    it(`subtracts 177 - 83`, () => {
      expect(subtract('177', '83')).to.equal('94');
    });

    it(`subtracts 83 - 17`, () => {
      expect(subtract('83', '17')).to.equal('66');
    });

    it(`subtracts 200 - 1`, () => {
      expect(subtract('200', '1')).to.equal('199');
    });

    it(`subtracts 200000000000000000000000000000000000 - 1`, () => {
      expect(subtract('200000000000000000000000000000000000', '1')).to.equal('199999999999999999999999999999999999');
    });

    it(`subtracts 101 - 100`, () => {
      expect(subtract('101', '100')).to.equal('1');
    });

    it(`subtracts 100 - 100`, () => {
      expect(subtract('100', '100')).to.equal('0');
    });

    it(`subtracts 0 - 0`, () => {
      expect(subtract('0', '0')).to.equal('0');
    });
  });

  describe(`negative result`, () => {

    it(`flips sides if 2nd number longer than 1st`, () => {
      expect(subtract('1', '100')).to.equal('-99');
    });

    it(`flips sides if 2nd number is larger than 1st`, () => {
      expect(subtract('100', '200')).to.equal('-100');
    });

    it(`handles extreme negative result`, () => {
      expect(subtract('1', '2000000000000000000000000000000000000000000')).to.equal('-1999999999999999999999999999999999999999999');
    });

  });

  describe(`negative integer input`, () => {

    it(`throws when negative input provided`, () => {
      expect(() => subtract('-100', '100')).to.throw();
    });

  });

});
