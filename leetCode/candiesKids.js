// // Math.max method solution 1

// function kidsWithCandies() {
//   let candies = [2, 3, 5, 1, 3];
//   let extraCandies = 3;
//   let result = [];

//   for (let i = 0; i < candies.length; i++) {
//     let maxNumber = Math.max(...candies);
//     // console.log(maxNumber);

//     if (candies[i] + extraCandies >= maxNumber) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }

//   return result;
// }

// console.log(kidsWithCandies());

// Math.max method solution 2

function kidsWithCandies() {
  let candies = [2, 3, 5, 1, 3];
  let extraCandies = 3;

  let maxCandies = Math.max(...candies);

  let allCandy = candies.map((candy) => {
    return candy + extraCandies >= maxCandies;
  });
  return allCandy;
}

console.log(kidsWithCandies());

// let candies = [2, 3, 5, 1, 3];
// console.log(Math.max(...candies));
