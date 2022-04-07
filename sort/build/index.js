"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const testArray = new NumbersCollection_1.NumbersCollection([0, 1, 1241, 1623, -213, 919]);
const sorter = new Sorter_1.Sorter(testArray);
sorter.sort();
console.log(testArray.data);
