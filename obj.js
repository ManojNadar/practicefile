let obj = {
  name: "manoj",
  num: 321,
  add: {
    city: "mum",
    state: "mah",
    location: "domb",
  },
};

// obj.add.location = "thane";

// console.log(obj);

let newObj = { ...obj, location: "sion" };
console.log(obj);
console.log(newObj);
