import { Counter } from './js/coin_counter.js';

const counter = new Counter(86);

const arr = [25, 10, 5, 1];

//const otherArr = arr;

console.log(arr);
console.log(counter.countCoins(101, [...arr]));
console.log(arr);
//[...arr] = [25, 10, 5, 1]

// console.log(otherArr);
// console.log(counter.countCoins(86, otherArr));
// console.log(otherArr);
// console.log(arr);