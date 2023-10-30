// ****************************************************************

// let input = 1000;

// function sum(input) {
//   let add = 0;
//   for (let i = 1; i <= input; i++) {
//     add += i;
//   }
//   return add;
// }
// console.log(sum(input));

// ****************************************************************

// let arr = [14, 0, 76, 0, 45, 0, 9, 4, 0, 5];
// shift all zeroes at the last
// Without changing index number of other elements

// function shiftZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }
//   }

//   return arr;
// }

// console.log(shiftZero(arr));

// ****************************************************************

// let nums = [14, 0, 76, 0, 45, 0, 9, 4, 0, 5];
// const moveZeroes = function (nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       j++;
//       console.log(nums);
//     } else {
//       [nums[i - j], nums[i]] = [nums[i], nums[i - j]];
//     }
//   }
//   return nums;
// };

// console.log(moveZeroes(nums));

// ****************************************************************

// find even number in range for loop

// let num = 50;

// function evenNum(num) {
//   for (let i = 1; i < num; i++) {
//     // console.log(i, "i");
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   //   return num;
// }

// evenNum(num);

// find even number in range while loop

// let num = 50;

// function evenNum(num) {
//   let i = 0;
//   while (i < num) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }

// evenNum(num);

// swapping number without using another variable

// let a = 10;
// let b = 5;

// [a, b] = [b, a];

// console.log(a, "a", b, "b");

// find prime number between 1 to 100

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       console.log(i, "i");
//       return false;
//     }
//   }

//   return true;
// }

// let num = 100;

// for (let i = 0; i <= num; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// reverse the number

// let num = 135;

// function reverseNum(num) {
//   let numStr = num.toString();
//   //   console.log(typeof numStr);
//   let reverseStr = "";

//   for (let i = numStr.length - 1; i > 0; i--) {
//     reverseStr += numStr[i];
//   }
//   console.log(reverseStr);
// }
// reverseNum(num);

// Write a program  for print 1 to 100 number using while loop?
// let n = 100;

// function num(n) {
//   let i = 1;
//   while (i <= n) {
//     console.log(i);
//     i++;
//   }
// }

// num(n);

// Sort an array without using ibuilt function

// let arr = [2, 1, 5, 3, 7, 4];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false;

//     for (let j = 0; j < arr.length - i - 1; j++) {
//       //   console.log(j);
//       // swapping the elements
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }

//     // if no elements are swapped
//     // that means our array is sorted
//     if (!swapped) break;
//   }

//   return arr;
// }

// console.log(bubbleSort(arr));

// remove deuplicate characters from hello

// let word = "helllllo";

// let str = "";

// for (let i of word) {
//   if (!str.includes(i)) {
//     str += i;
//   }
// }

// console.log(str);

// find min max

let arr = [1, 2, 3, 2, 1, 3, 4];

function minmax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { min, max };
}

console.log(minmax(arr));
