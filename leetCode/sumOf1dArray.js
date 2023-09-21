let nums = [1, 2, 3, 4];

let newArr = [];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  // newArr.push((nums[i] += nums[i + 1]));

  (sum += nums[i]) + nums[i + 1];
  newArr.push(sum);
}

console.log(newArr);

//solution 2 function based

// var runningSum = function (nums) {
//   let newValue = [];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     (sum += nums[i]) + nums[i + 1];
//     newValue.push(sum);
//   }

//   return newValue;
// };

// console.log(runningSum(nums));
