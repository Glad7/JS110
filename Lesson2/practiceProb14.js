let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = Object.keys(obj).map((key) => {
  if(obj[key].type === 'fruit') {
    return obj[key].colors.map(color => {
      return color[0].toUpperCase() + color.slice(1);
    });
  } 
  else if(obj[key].type === 'vegetable')
    return obj[key].size.toUpperCase();
});

console.log(arr);