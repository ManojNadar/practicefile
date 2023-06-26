// only for sorted array

let array = [2, 3, 3, 4, 5, 6, 6, 7, 7, 8];

for (let i = 0; i < array.length; ) {
  if (array[i] === array[i + 1]) {
    array.splice(i, 1);
  } else {
    i++;
  }
}

console.log(array);
