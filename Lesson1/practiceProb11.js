let statement = "The Flintstones Rock";

letterObj = {};

//get rid of spaces
statement = statement.replace(/ /g, '');

let count = 0;
let currentLetter;

for(let i = 0; i < statement.length; i++) {
  currentLetter = statement[i];
  for(let j = 0; j < statement.length; j++) {
    if(statement[j] === currentLetter)
      count += 1;
  }
  letterObj[currentLetter] = count;
  count = 0;
}

console.log(letterObj);

/*Soltuion from LS below:

statement = "The Flintstones Rock";
let resultObj = {};

for(let i = 0; i < statement.length; i++) {
  let char = statement[i];
  if(char == ' ') continue;

  resultObj[char] = resultObj[char] || 0;
  resultObj[char] += 1;
}

console.log(resultObj);
*/