//******************* */ MAP

// let mapArr = [2, 5, 6, 9, 7, 6];

// let newMap = mapArr.map((element, index, array) => {
//   //   return element;
//   //   return index;
//   //   return array;
//   //   return element * 2;
//   //   return index * 2;
// });
// console.log(newMap);

// ****************FILTER

// let filtArr = [5, 8, 68, 4, 3, 11, 54, 100];

// let filterArray = filtArr.filter((element, index) => {
//   //   return element > 10;
//   //   return element;
//   //   return index > 2;
// });

// console.log(filterArray);

// **************REDUCE

// let redVal = [2, 6, 8, 4, 10, 9, 22, 74];

// //accumulative,current calue
// let reducingArr = redVal.reduce((acc, curr) => {
//   //   return acc + curr;
//   //   return acc;
//   //   return curr;
// }, 10);

// console.log(reducingArr);

// ****************MAP FILTER REDUCE CHAINING

// let allInOne = [2, 3, 5, 4, 9, 2, 4, 6];

// let newArr = allInOne
//   .map((e) => {
//     return e + 5;
//   })
//   .filter((e) => {
//     return e < 10;
//   })
//   .reduce((acc, curr) => {
//     return acc + curr;
//   });
// console.log(newArr);

// ***********************FOR EACH
// is not chainable

// let arr = [5, 10, 55, 22, 3];

// arr.forEach((element, index, array) => {
//   //   console.log(element);
//   //   console.log(index);
//   //   console.log(array);
//   //   return element;
// });
// console.log(newArr);

// *************** SORT METHOD

// let arr = [5, 1, 11, 6, 3, 7];

// this method checks every first number of an element
// arr.sort();
// console.log(arr);

// arr.sort((a, b) => {
//   return a - b; // ascending
// });

// arr.sort((a, b) => {
//   return b - a; //descending
// });

// console.log(arr);

// ************CONCAT METHOD

// let arr1 = [2, 5, 6, 8];
// let arr2 = [10, 5, 3, 8];
// // #1
// // let arr3 = arr1.concat(arr2);
// // #2
// // let arr3 = [arr1, arr2];
// // #3
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let newArr = arr1 + "," + arr2;
// console.log(newArr);

// ***********************EVERY METHOD

// let arr = [2, 5, 6, 8, 7, 9];

// let everyArr = arr.every((element) => {
//   //   return element >= 2;
//   //   return element < 2;
// });

// console.log(everyArr);

// ******************SOME METHOD

// let arr = [2, 5, 6, 8, 7, 9];

// let someArr = arr.some((element) => {
//   //   return element < 1;
// });
// console.log(someArr);

// *************INCLUDES METHOD

// let arr = [5, 8, 3, 6];

// console.log(arr.includes(7));
// console.log(arr.includes(8));

// ****************JOIN METHOD

// let arr = [5, 8, 3, 6];
// console.log(arr.join());
// console.log(arr.join("-"));

// let newArr = arr.join("-");
// console.log(typeof newArr);
// console.log(arr.join("+"));

// ****************FIND METHOD

// let arr = [5, 8, 6, 7, 9, 10, 20, 30, 54, 10];

// let findArr = arr.find((element) => {
//   //   return element < 10;
//   return element === 10;
// });
// console.log(findArr);

// ****************FINDINDEX METHOD

// let arr = [5, 8, 6, 7, 9, 10, 20, 30, 54, 10];

// let findIndex = arr.findIndex((element) => {
//   return element === 10;
// });

// console.log(findIndex);

// ***********************INDEXOF

// let arr = [5, 8, 6, 7, 9, 10, 20, 30, 54, 12, 5, 6, 865, 4];

// console.log(arr.indexOf(30));
// console.log(arr.length);
// console.log(arr.indexOf(arr.length));

// ***********************LASTINDEXOF

// let arr = [5, 8, 6, 7, 9, 10, 20, 30, 6, 54];

// console.log(arr.lastIndexOf(6));

// ***********************FILL

// array.fill(value, start, end);

// let arr = [10, 20, 30, 6, 54];

// let newArr = arr.fill("hi");
// console.log(arr);
// arr.fill(30);
// console.log(arr);
// arr.fill(3, 2, 5);
// console.log(arr);

// arr.fill()

// ********************SLICE METHOD

// let arr = [10, 20, 30, 6, 54];

// console.log(arr.slice(1, 3)); // starts from 1 and ends on 2

// *********************REVERSE METHOD

// let arr = [10, 20, 30];

// console.log(arr.reverse());

//PUSH POP SHIFT UNSHIFT METHODS

// ****************FLAT METHOD

// let arr1 = [
//   [1, 2, 3],
//   [5, 4, 9],
// ];

// console.log(arr1);
// let arr2 = [
//   [1, 2, 3],
//   [5, 4, 9],
//   [9, 4, 9],
//   [5, 8, 4],
//   [1, 4, 9],
//   [3, 4, [99, 33]],
// ];

// console.log(arr2);

// let arr3 = [
//   [1, 2, 3],
//   [5, 4, 9],
//   [9, [55, 99, [66, 88, 650, [888, 1000]]], 9],
//   [5, 8, 4],
//   [1, 4, 9],
//   [3, 4, [99, 33]],
// ];
// console.log(arr3);

// let newArr = arr1.flat();
// let newArr = arr2.flat(2);
// let newArr = arr3.flat(Infinity);
// console.log(newArr);

//******************** ARRAYFROM

// let str = "manoj";
// let makeArr = Array.from(str);
// console.log(makeArr);

// let arr = [5, 2, 3];
// let newArr = Array.from(arr, (x) => {
//   return x + x;
// });

// console.log(newArr);

//  ================ at Method

// let atArr = [53, 1, 4];

// console.log(atArr.at(2));

// ********************ISARRAY

// let arr = [1, 3];
// console.log(Array.isArray(arr));
// let str = "hi";
// console.log(Array.isArray(str));

// ********************JOIN

// let arr = ["hello", "welcome"];
// console.log(arr.join());
// console.log(arr.join("-"));

// ****************REVERSE
// console.log(arr.reverse());

// ***********KEYS

// let iteration = arr.keys();

// for (let key of iteration) {
//   console.log(key);
// }

// ************ArrayoF

// console.log(Array.of("hello", "hi", "welcome", "greeting"));

// *****************REDUCERIGHT

// const array1 = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const result = array1.reduceRight((accumulator, currentValue) =>
//   accumulator.concat(currentValue)
// );

// console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]
