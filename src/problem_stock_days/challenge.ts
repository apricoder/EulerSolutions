import * as _ from 'lodash';

export const getSellableIndexes = (prices: number[]) => {
  const reversedPrices = _.reverse(prices.slice());

  const sellableIndexes: number[] = [];
  reversedPrices.forEach((price, ri) => {
    if (ri === reversedPrices.length) {
      return;
    }

    if (price > reversedPrices[ri + 1]) {
      sellableIndexes.push(prices.length - (ri + 1));
    }
  });

  return _.reverse(sellableIndexes);
};

export const getBestSellingIndexes = (prices: number[], sellingIndexes: number[]): number[] => {
  const reversedOrderSellableIndexes = _.reverse(sellingIndexes);
  let maxSellingPrice = 0;
  const bestSellingIndexes: number[] = [];
  reversedOrderSellableIndexes.forEach(riv => {
    if (prices[riv] > maxSellingPrice) {
      maxSellingPrice = prices[riv];
      bestSellingIndexes.push(riv);
    }
  });

  return _.reverse(bestSellingIndexes);
};

export const calculateMaxProfit = (prices: number[]): number => {
  const sellableIndexes = getSellableIndexes(prices);
  const bestSellingIndexes = getBestSellingIndexes(prices, sellableIndexes);

  let totalSpent = 0;
  let totalEarned = 0;
  let stocksHeld = 0;
  let balance = 0;

  prices.forEach((price, i) => {
    console.log(`[${i + 1}] day ----------------------------`);

    if (_.includes(bestSellingIndexes, i)) {
      console.log(`[S] - decision - sell ${stocksHeld} stocks for price ${prices[i]}`);
      const sellAmount = stocksHeld * prices[i];
      totalEarned += sellAmount;
      stocksHeld = 0;
    } else {

      if (i < _.last(bestSellingIndexes)!) {
        console.log(`[B] - decision - buy 1 stock for price ${prices[i]}`);
        totalSpent += prices[i];
        stocksHeld += 1;
      } else {
        console.log(`[H] - decision - hold`);
      }

    }

    balance = totalEarned - totalSpent;
    console.log(`> holding ${stocksHeld} stocks`);
    console.log(`> total spent = ${totalSpent}`);
    console.log(`> total earned = ${totalEarned}`);
    console.log(`> balance = ${balance}`);
  });

  return balance;
};
