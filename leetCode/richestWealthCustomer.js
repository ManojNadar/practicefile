let accounts = [
  [1, 2, 3],
  [3, 8, 1],
];

// console.log(accounts[0].length);

function rich() {
  let richest = [];

  for (let i = 0; i < accounts.length; i++) {
    let findRich = accounts[i].reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    richest.push(findRich);
  }
  return Math.max(...richest);
}

console.log(rich());
