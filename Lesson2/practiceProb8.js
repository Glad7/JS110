let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a', 'e', 'i', 'o', 'u'];

let objVals = Object.values(obj);

objVals.forEach(val => {
  val.forEach(innerVal => {
    innerVal.split('').filter(letter => vowels.includes(letter)).forEach(vow => console.log(vow));
  });
});
