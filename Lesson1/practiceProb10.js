let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//**************
//My solution:
//**************
let lowestAge = Object.values(ages).sort()[0];
console.log(lowestAge);

//**************
//LS's solution:
//**************
let agesArr = Object.values(ages);
console.log(Math.min(...agesArr));