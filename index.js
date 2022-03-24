class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items.indexOf(pos);
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max.apply(Math, this.items);
      // or:
      // return this.items[this.length -1];
    }
  }

  min() {
    if (!this.length /*this.items.length === 0*/) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min.apply(Math, this.items);
      // or:
      // return this.items[0];
    }
  }

  // bonus iterations

  sum() {
    const sum = this.items.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const average = this.items.reduce((a, b) => a + b, 0) / this.items.length;
      return average;
    }
  }
}

module.exports = SortedList;
