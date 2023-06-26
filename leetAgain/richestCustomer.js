let arr = [
  [1, 6, 8],
  [3, 4, 2],
];

let rich = [];
for (let i = 0; i < arr.length; i++) {
  let findRich = arr[i].reduce((acc, curr) => {
    return acc + curr;
  });

  rich.push(findRich);
}

console.log(Math.max(...rich), "this customer is rich");
