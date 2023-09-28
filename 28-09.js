// remove duplicate character

// function removeDuplicate(str) {
//   return [...new Set(str)].join("");
// }

// const str = "hello";
// const uniqueStr = removeDuplicate(str);

// console.log(uniqueStr); // ohel

// var a = 5;

// {
//   let a = 10;
//   console.log(a);
// }

// console.log(a);

// function aaa() {
//   var a = 10;
//   console.log(a);
// }

// aaa();

// let a = 10 + "10";
// let b = "10" + 10;
// let c = "10" - "10";

// console.log(a);
// console.log(b);
// console.log(c);

// 226 == "226"   // true
// 226 === "226"   // false

// (function () {
//   //Do something;
//   console.log("run");
// })();

// let obj = {
//   name: "rocky",
// };

// function greet(age, number) {
//   console.log(this.name, age, number);
// }

// // greet.call(obj, 25, 32659);
// // greet.apply(obj, [25, 32659]);

// let newObj = greet.bind(obj, 30, 7896);

// newObj();

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(5)(6)(7));

// let a;

// console.log(a);

// console.log(b);

// let nam = "santosh";

// console.log(nam.charAt(3));

// Promise

// let p1 = new Promise((resolve, reject) => {
//   resolve(2);
// });

// // p1.then((val) => {
// //   console.log(val);
// // }).catch((err) => {
// //   console.log(err);
// // });

// let p2 = new Promise((resolve, reject) => {
//   resolve(5);
// });

// // p2.then(() => {
// //   console.log("p2 fetched");
// // }).catch((err) => {
// //   console.log(err);
// // });

// let allPromise = Promise.all([p1, p2])
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(allPromise);

// let array = [1, 2, 3, 4, 5, 6];

// // console.log(array.slice(0, 3));

// array.splice(0, 2, "hello");
// console.log(array);

// const func = a => console.log(a)

// func(10)

// const url = "https://www.google.com/search?q=geeks for geeks";
// const encodedURL = encodeURI(url);
// console.log(encodedURL)

// const url = "https://www.google.com/search?q=geeks%20for%20geeks";
// const decodedURL = decodeURI(url);
// console.log(decodedURL)

// function add(a, b = 2) {
//   console.log(a, b);
// }

// add(1,10);

// let array = ["a", "b", "c"];

// for (let i of array) {
//   console.log(i);
// }

// let obj = {
//   name: "manoj",
//   topic: "js",
// };

// for (let i in obj) {
//   console.log(i, obj[i]);
//   console.log(obj);
// }

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a, b);
