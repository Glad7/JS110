let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  sumA = a.filter(num => num % 2 === 1).reduce((accum, curr) => accum + curr, 0);
  sumB = b.filter(num => num % 2 === 1).reduce((accum, curr) => accum + curr, 0);
  return sumA - sumB;
});

console.log(arr);