let arr = [3, 2, 2, 3];

let val = 3;

let res = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != val) {
    res.push(arr[i]);
  }
}

console.log(res);
