import {Grid} from "./grid";
export class SetAnalyzer {

  public static findSetWithLargestProductInAGrid(grid: Grid, setLength: number) {
    const columns = grid.columns();
    const rows = grid.rows();
    const leftDiagonals = grid.leftDiagonals();
    const rightDiagonals = grid.rightDiagonals();
    const directionSets = [columns, rows, leftDiagonals, rightDiagonals]
      .map(grid => {
        const gridSets = grid.map(line => SetAnalyzer.findSetWithLargestProduct(line, setLength));
        return SetAnalyzer.largestSetOf(gridSets);
      });

    return SetAnalyzer.largestSetOf(directionSets);
  }

  public static findSetWithLargestProduct(numbers: number[], setLength: number): IProductSet {
    let product = SetAnalyzer.productOf(numbers.slice(0, setLength));
    let maxProduct = product;
    let setStart = 0;

    for (let i = 0; i < numbers.length - setLength; i++) {
      const prevFirst = numbers[i];
      const nextLast = numbers[i + setLength];

      if (nextLast) product *= nextLast;
      else { product = 0; continue; }

      if (prevFirst) product /= prevFirst;
      else product = SetAnalyzer.productOf(numbers.slice(i + 1, i + 1 + setLength));

      if (product > maxProduct) {
        maxProduct = product;
        setStart = i + 1;
      }
    }

    return {
      set: numbers.slice(setStart, setStart + setLength),
      product: maxProduct
    };
  }

  public static productOf(numbers: number[]) {
    return numbers.reduce((product, number) => product * number);
  }

  public static largestSetOf(sets: IProductSet[]) {
    return sets.sort((a, b) => b.product - a.product)[0];
  }

}

export interface IProductSet {
  set: number[];
  product: number;
}
