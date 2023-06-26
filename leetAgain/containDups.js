let arr = [8, 7, 5];
let arr2 = [8, 8, 5];

let flag = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      flag = true;
      console.log(true);
    }
  }
}

if (!flag) {
  console.log(false);
}
