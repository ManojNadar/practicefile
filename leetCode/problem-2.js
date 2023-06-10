// remove Duplicate number form the array and sort the array ascending

// var nums = [3, 2, 2, 3];
// var val = 3;

// function removeDuplicate(nums, val) {
//   let k = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] ==+ val) {
//       // console.log(nums[i]);
//       k.push(nums[i]);
//     }
//   }
//   return k;
// }
// let output = removeDuplicate(nums, val);
// console.log(output);

// *************************************
// var nums = [3, 2, 2, 3];
// var val = 3;

// function removeDuplicate(nums, val) {
//   let k = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < nums[i + 1]) {
//       k.push(nums[i]);
//     }
//   }

//   return k;
// }
// let output = removeDuplicate(nums, val);
// console.log(output);

var nums = [3, 2, 2, 3];
var val = 3;

function removeDuplicate(nums, val) {
  let k = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[i] = nums[i + 1];
      k.push(nums[i]);
    }
  }
  return k;
}
let output = removeDuplicate(nums, val);
console.log(output);
