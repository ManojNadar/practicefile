// Factorial Number

// function Factorial(n) {
//   let fact = 1;

//   for (let i = 1; i <= n; i++) {
//     fact = fact * i; //2 6 24 120
//   }
//   //   console.log(fact);
//   return fact;
// }

// // console.log(Factorial(0));
// // console.log(Factorial(1));
// // console.log(Factorial(2));
// console.log(Factorial(3));
// console.log(Factorial(4));

// Big-O = O(n) - linear
// as the n value increases the loop increases

function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive case: calculate factorial of (n-1) and multiply it by n
  return n * factorial(n - 1);
}

// Example usage
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
