class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.length === 0 ? 0 : this.items.reduce((acc, val) => acc + val);
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortesdList');
    } else {
      return this.items.reduce((acc, val) => acc + val) / this.length;
    }
  }
}

module.exports = SortedList;
