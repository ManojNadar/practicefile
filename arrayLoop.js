// SUM OF ARRAY

let arr = [2, 4, 8, 10, 12, 20];

//**************** */ METHOD 1 FOR LOOP

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//************** */ METHOD 2 REDUCE() (HOF)

// let val = arr.reduce((a, b) => {
//   console.log(a + b);
//   return a + b;
// }, 5);     // here 5 is starting value it will include in that array (OPTIONAL)
// console.log(val);

//******************* */ METHOD 3 FOREACH() LOOP

// let add = 0;

// arr.forEach((val) => {
//   add += val;
// });
// console.log(add);

// **************** METHOD 4 eval()

// let add3 = eval(arr.join("+"));
// console.log(add3);
