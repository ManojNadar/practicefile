let arr = [5, 20, 30, 40, 80];

// console.log(arr);
// console.log(arr.splice(1, 2, 2000)); // it will show the deleted element from an array
// console.log(arr);
function insertElement(arr) {
  let newItem = 2000;
  let position = 2;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      console.log(arr[i]);
    }
    if (i === position) {
      arr[i] = newItem;
    }
  }
  return arr;
}

let newArr = insertElement(arr);
console.log(newArr);
