//  ------------- Bubble sort ------------- //

class Sorter {
  constructor(public collection: Array<number> | string) {}
  // after adding the union operator, ts will compare and make available
  // only those properties that an array and string share in common
  // therefore we now have a following error:
  // FIXME: Index signature in type 'string | number[]' only permits reading.ts(2542)

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // All of this only works if collection is number[]
        // If collection is an array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHandSide = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHandSide;
          }
        }

        // Only going to work if collection is a string
        // If collection is a string, do this logic instead:
        // ~~~logic to copare and swap characters in a string
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const sorter = new Sorter([-1, 2, 1, 0]);
sorter.sort();
console.log(sorter.collection);
