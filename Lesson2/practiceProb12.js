let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(nestedArr => {
  return nestedArr.filter(num => num % 3 === 0);
});

console.log(newArr);