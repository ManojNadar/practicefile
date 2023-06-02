// Prime Nunber

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  //   for (let i = 2; i <= Math.sqrt(n); i++) {
  //     if (n % i === 0) {
  //       return false;
  //     }
  //   }
  return true;
}

console.log(isPrime(119));

// Big-O = O(n) - linear
// as the n value increases the loop increases
