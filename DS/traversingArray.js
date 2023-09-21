var arr = [235, 234, 212, 35, 35, 52, 23, 324, 52, 3, 5535, 35, 32, 34];

// method 1

// function traversing(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// traversing(arr);

// method 2

// function traversing(arr) {
//   for (item of arr) {
//     console.log(item);
//   }
// }

// traversing(arr);

// methods 3

// function traversing(arr) {
//   let newArr = arr.map((item) => {
//     console.log(item);
//   });
// }

// traversing(arr);

// method 4

// function traversing(arr) {
//   arr.forEach((item) => {
//     console.log(item);
//   });
// }

// traversing(arr);

// print array[elements] index

function traversing(arr) {
  for (item in arr) {
    console.log(item);
  }
}

traversing(arr);
