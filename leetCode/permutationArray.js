// Build Array from Permutation

var arr = [5, 4, 3, 4, 5, 3];

// var newArr = arr.map((e) => {
//   return arr[e];
// });
// console.log(newArr);

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    console.log(arr[i], arr[j]);
  }
}
