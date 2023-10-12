let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(nestedArr => {
  if(typeof nestedArr[0] === 'string')
    return nestedArr.slice().sort();
  else
    return nestedArr.slice().sort((a, b) => a - b);
});

console.log(newArr);

