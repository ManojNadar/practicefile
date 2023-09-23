let nums = [1, 2, 3, 1, 1, 3];
// let nums = [1, 2, 3];
// let nums2 = [1, 1, 1, 1];

let result = [];

function goodpairs(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        // result.push([i, j]);
        result.push([nums[i], nums[j]]);
        console.log(result);
      }
    }
  }
  return result.length;
}

console.log(goodpairs(nums));
