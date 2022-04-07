import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const testArray = new NumbersCollection([0, 1, 1241, 1623, -213, 919]);
const sorter = new Sorter(testArray);
sorter.sort();
console.log(testArray.data);
