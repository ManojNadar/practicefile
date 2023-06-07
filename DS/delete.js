var arr = [3, 12, 53, 566, 242, 6, 23, 659];
function deleteArr(arr) {
  var position = 2;

  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
}
deleteArr(arr);
