// Fibonacci

function Fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    // fib[2] = fib[2 - 1] + fib[2 - 2];
  }

  return fib;
}

console.log(Fibonacci(3));
console.log(Fibonacci(4));
console.log(Fibonacci(5));

// Big-O = O(n) - linear
// as the n value increases the loop increases
