let arr = [5, 8, 6, 10];

let sum = 0;

let result = [];
for (let i = 0; i < arr.length; i++) {
  (sum += arr[i]), arr[i + 1];
  result.push(sum);
}
console.log(result);
