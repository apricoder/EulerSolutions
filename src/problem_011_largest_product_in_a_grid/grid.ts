import * as _ from 'lodash';

export class Grid extends Array<Array<number>> {

  static parse(rawGrid: string): Grid {
    return new Grid(...rawGrid
      .split('\n')
      .map(line => line
        .split(' ').filter(c => c).map(c => +c)
      )
    );
  }

  columns() {
    return new Grid(...Object.keys(this)
      .map(k => +k)
      .map(key => this
        .map(row => row[key])
      )
    );
  }

  rows() {
    return this;
  }

  leftDiagonals() {
    const leftTriangle = this.leftTriangle();
    const complementTriangle = Grid.reverseGrid(this).leftTriangle().slice(0, -1);
    const rightTriangle = Grid.reverseGrid(complementTriangle);
    return leftTriangle.concat(rightTriangle);
  }

  rightDiagonals() {
    const reversedRows = new Grid(...this.map(line => line.slice().reverse()));
    return reversedRows.leftDiagonals();
  }

  private static reverseCopy<T>(array: Array<T>) {
    return array.slice().reverse();
  }

  private static reverseGrid(grid: Grid | Array<Array<number>>): Grid {
    return new Grid(...Grid.reverseCopy(grid).map(Grid.reverseCopy));
  }

  private leftTriangle() {
    return _.range(0, this.length)
      .map(i => _.range(0, i + 1).map(j => this[j][i - j]))
      .reduce((acc: number[][], arr) => acc.concat([arr]), []);
  }
}