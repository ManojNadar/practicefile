let arr = [5, 4, 3, 5, 4, 3];

let val = 3;

let newArr = [];

for (let i = 0; i < val; i++) {
  newArr.push(arr[i], arr[i + val]);
}

console.log(newArr);
