import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const testArray = new NumbersCollection([0, 1, 1241, 1623, -213, 919]);
const sorter = new Sorter(testArray);
sorter.sort();
// console.log(testArray.data);

const shouldCheck = new NumbersCollection([-1.2, 3, 0, 0.9, -0.9, 24]);
const sorted = new Sorter(shouldCheck);
console.log(sorted);
sorted.sort();
console.log(shouldCheck.data);
