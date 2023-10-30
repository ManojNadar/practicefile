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

  return true;
}

let num = 100;

for (let i = 0; i <= num; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Big-O = O(n) - linear
// as the n value increases the loop increases
