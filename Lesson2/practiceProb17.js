alphanumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function uuidGenerator() {
  let section = '';

  for(let i = 0; i < 8; i++) {
    section += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
  }
  
  for(let i = 0; i < 3; i++) {
    section += '-'
    for(let j = 0; j < 4; j++) {
      section += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
    }
  }
  section += '-';
  for(let i = 0; i < 12; i++) {
    section += alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
  }
  return section;
}


console.log(uuidGenerator());
