import { expect } from 'chai';
import { calculateMaxProfit, getBestSellingIndexes, getSellableIndexes } from './challenge';

describe(`stock strategy`, () => {

  // it(`calculates max profit for [1, 2, 3, 4, 5]`, () => {
  //   expect(calculateMaxProfit([ 1, 2, 3, 4, 5 ])).to.equal(4 * 5 - (1 + 2 + 3 + 4));
  // });

  describe(`get sellable indexes`, () => {

    it(`gets sellable indexes of [5, 3, 4, 3, 2, 4, 5, 6, 7, 8, 2, 3, 6, 5, 4]`, () => {
      //                    s        s  s  s  s  s     s  s
      const prices = [5, 3, 4, 3, 2, 4, 5, 6, 7, 8, 2, 3, 6, 5, 4];
      const sellableIndexes = getSellableIndexes(prices);
      expect(sellableIndexes).to.deep.equal([ 2, 5, 6, 7, 8, 9, 11, 12 ]);
    });

    it(`gets best selling indexes of [11, 9, 8, 9, 8, 7, 9, 10, 9, 8, 5, 3, 7, 4, 7, 10, 12, 14, 8, 2, 3, 4, 9, 7, 6]`, () => {
      // sellable points:       s        s  s               s     s  s   s   s         s  s  s
      const prices = [11, 9, 8, 9, 8, 7, 9, 10, 9, 8, 5, 3, 7, 4, 7, 10, 12, 14, 8, 2, 3, 4, 9, 7, 6];
      // best-selling points:                                                ^               ^

      const sellableIndexes = getSellableIndexes(prices);
      expect(sellableIndexes).to.deep.equal([ 3, 6, 7, 12, 14, 15, 16, 17, 20, 21, 22 ]);

      const bestSellingIndexes = getBestSellingIndexes(prices, sellableIndexes);
      expect(bestSellingIndexes).to.deep.equal([ 17, 22 ]);
    });

    it(`calculates max profit for prices [11, 9, 8, 9, 8, 7, 9, 10, 9, 8, 5, 3, 7, 4, 7, 10, 12, 14, 8, 2, 3, 4, 9, 7, 6]`, () => {
      // sellable points:       s        s  s               s     s  s   s   s         s  s  s
      const prices = [11, 9, 8, 9, 8, 7, 9, 10, 9, 8, 5, 3, 7, 4, 7, 10, 12, 14, 8, 2, 3, 4, 9, 7, 6];
      // best-selling points:                                                ^               ^

      const maxProfit = calculateMaxProfit(prices);
      expect(maxProfit).to.equal(121);
    });

    it(`should sell on the last day if prices are just rising [1, 2, 3, 4, 5, 6, 7, 8, 9]`, () => {
      const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const maxProfit = calculateMaxProfit(prices);
      expect(maxProfit).to.equal(36);
    });

    it(`should not buy if prices are just falling [9, 8, 7, 6, 5, 4, 3, 2, 1]`, () => {
      const prices = [9, 8, 7, 6, 5, 4, 3, 2, 1];

      const maxProfit = calculateMaxProfit(prices);
      expect(maxProfit).to.equal(0);
    });


  });

});
