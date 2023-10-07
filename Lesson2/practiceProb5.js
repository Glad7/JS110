let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAge = 0;

for(let [key, value] of Object.entries(munsters)) {
  if(value.gender === 'male')
    totalAge += value.age;
}

console.log(totalAge);