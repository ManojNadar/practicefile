//  Concatenation of Array

let nums = [1, 2, 1];

// solution 1

// function concatArr(nums) {
//   return [...nums, ...nums];
// }
// console.log(concatArr(nums));

// solution 2

// console.log(concatArr(nums));
// function concatArr(nums) {
//   return nums.concat(nums);
// }
// console.log(concatArr(nums));

// solution 3

// let ans = [];
// for (let i = 0; i < nums.length; i++) {
//   ans[i] = nums[i]; // it means copying all values from num to ans
//   ans[i + nums.length] = nums[i]; // now concating num with ans
// }

// console.log(ans);
