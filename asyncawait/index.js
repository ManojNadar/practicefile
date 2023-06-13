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
      resolve("promise 1"); // execute 2nd
    }, 6000);
  });

  let two = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise 2"); //execute last
    }, 5000);
  });
  //   console.log("Waiting for First Promise.....");
  //   console.log("First Promise got...");
  let promOne = await one;
  console.log(`${promOne} 6000ms`);
  //   console.log("Second Promise waiting...");
  let promTwo = await two;
  console.log(`${promTwo} 5000ms`);
  //   console.log("Second Promise got");
}

function normal() {
  console.log("iam normal");
}

async function bothPromise() {
  normal(); //execute 1st
  await prom();
}

bothPromise();

// async function prom() {
//   setTimeout(() => {
//     console.log("promise 1");
//   }, 3000);

//   let two = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("promise 2");
//     }, 4000);
//   });

//   let promTwo = await two;
//   console.log(`${promTwo} await 3000ms`);
// }

// function normal() {
//   console.log("iam normal");
// }

// async function bothPromise() {
//   normal();
//   await prom();
// }

// bothPromise();
