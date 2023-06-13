// synchronous

// function one() {
//   setTimeout(() => {
//     console.log("one");
//   }, 3000);
// }
// function two() {
//   setTimeout(() => {
//     console.log("two");
//   }, 2000);
// }

// function oneTwo() {
//   one();
//   two();
// }
// oneTwo();

// Async Await

async function prom() {
  let one = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise 1");
    }, 5000);
  });

  let two = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise 2");
    }, 7000);
  });
  //   console.log("Waiting for First Promise.....");
  //   console.log("First Promise got...");
  let promOne = await one;
  console.log(`${promOne} 5000ms`);
  //   console.log("Second Promise waiting...");
  let promTwo = await two;
  console.log(`${promTwo} 7000ms`);
  //   console.log("Second Promise got");
}

function normal() {
  console.log("iam normal");
}

async function bothPromise() {
  normal();
  await prom();
}

bothPromise();
