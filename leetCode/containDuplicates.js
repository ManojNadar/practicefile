var nums = [1, 4, 2, 3, 3, 5];

// function containDup(nums) {
//   let mySet = new Set(nums); // remove all duplicates

//   if (nums.length === mySet.size) {
//     // check the length of the given array and new setted array
//     // if length doesnt match false else true
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(containDup(nums));

// solution 2

var containsDuplicate = function (nums) {
  return new Set(nums).size != nums.length;
};

console.log(containsDuplicate(nums));

//solution 3

// var nums = [1, 4, 2, 3, 3, 5];

// function containDuplicate(nums) {
//   let flag = false;
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         flag = true;
//         console.log(true);
//       }
//     }
//   }
//   if (!flag) {
//     console.log(false);
//   }
// }

// containDuplicate(nums);
