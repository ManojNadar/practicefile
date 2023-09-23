// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var nums = [2, 7, 11, 15];
var target = 9;
let final = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == target) {
      final.push(i, j);
    }
  }
}
console.log(final);

for (let i = nums.length - 1; i > 0; i--) {
  for (let j = nums.length; j > i + 1; j--) {
    if (nums[j] + nums[i] === target) {
      final.push(nums[j], nums[i]);
    }
  }
}
console.log(final);
