let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(entry => {
  console.log(entry[0].charAt(0).toUpperCase() + entry[0].slice(1) + ' is a ' + entry[1].age + '-year-old ' + entry[1].gender + '.');
})