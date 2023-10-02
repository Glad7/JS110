let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//**************
//My solution (same as LS's):
//**************
let totalAges = 0;
Object.values(ages).forEach(num => totalAges += num);

console.log(totalAges);

//**************
//Alternate solution from LS:
//**************
console.log(Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0));