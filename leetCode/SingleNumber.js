let nums = [2, 2, 3, 2];

// Output: 3
var singleNumber = function (nums) {
  let obj = {};
  for (var k of nums) {
    obj[k] = obj[k] != null ? obj[k] + 1 : 1;
    console.log(obj);
  }
  for (var i in obj) {
    if (obj[i] === 1) return i;
    console.log(obj);
  }
};

console.log(singleNumber(nums));
