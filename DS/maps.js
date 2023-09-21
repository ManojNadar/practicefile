let data = new Map();
// console.log(data);   //empty
// console.log(typeof data); // Object

// add data to the map obj

data.set("name", "manoj");
data.set("age", 26);
data.set("skill", "JS");
data.set("Graduate", true);
// data.set("Graduate", false); // same key won't be added to the obj it will update the value
// console.log(data);
// console.log(data.size);

// get data

// console.log(data.get("name"));
// console.log(data.get("age"));

// delete item
// data.delete("Graduate"); // delete an key value pair form the obj
// console.log(data);

//clear all the data from the obj
// data.clear()

// has property
// console.log(data.has("name")); // it returns true or false value

// show all data in obj

// data.forEach((value, key) => {
//   let myData = "";
//   myData += key + "-" + value;
//   console.log(myData);
// });

//************ALL THE KEYS OF OBJ */

// for (item of data.keys()) {
//   console.log(item);
// }

//************ALL THE VALUES OF OBJ */

// for (item of data.values()) {
//   console.log(item);
// }

// BOTH KEYS AND VALUES in SEPERATE ARRAYS
for (item of data.entries()) {
  console.log(item);
}
