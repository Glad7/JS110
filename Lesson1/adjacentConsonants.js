let vowels = ['a', 'e', 'i', 'o', 'u'];

function sortConsonantsArr(arr) {
  let arrToSort = [];
  let arrReturn = [];

  //makes 2d array of each element being [string, number of adjacent consonants]
  for(let i = 0; i < arr.length; i++) {
    arrToSort.push([arr[i]]);
    arrToSort[i].push(getConsonantCount(arr[i]));
  }

  //sort by most adjacent consonants
  arrToSort.sort((a,b) => b[1] - a[1]);
  
  //construct final array to return
  arrToSort.forEach((element) => arrReturn.push(element[0]));

  console.log(arrReturn);
}

function getConsonantCount(str) {
  //remove spaces from string
  str = str.split(' ').join('').toLowerCase();

  let count = 0;
  let strTemp = '';

  //algorithm that gets most adjcacent consonants
  for(let i = 0; i < str.length; i++) {
    if(!vowels.includes(str[i])) {
      strTemp += str[i];
    }
    else
      strTemp = '';
    if(strTemp.length > 1 && strTemp.length > count)
      count = strTemp.length;
  }
  return count;
}

sortConsonantsArr(['day', 'week', 'month', 'year']);