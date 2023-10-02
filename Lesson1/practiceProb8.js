let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

//******************
//My solution:
//******************
let flintstones2 = Object.entries(flintstones);

let obj = {};

flintstones2.forEach(keyValue => {
  let [key, value] = keyValue;
  obj[value] = Number(key);
});

console.log(obj);

//******************
//Launch School's Solution (simpler):
//******************

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

console.log(flintstonesObj);