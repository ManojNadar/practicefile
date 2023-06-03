// remove Duplicate number form the array and sort the array ascending

let arr = [3, 2, 9, 8, 9, 2];

let newArr = [...new Set(arr)];
// console.log(newArr);

newArr.sort((a, b) => {
  //   debugger;
  return a - b;
});

console.log(newArr);
