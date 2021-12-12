const arr = [];

const createArr = function (min, max) {
  for (let i = 0; i < 30; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(randomNumber);
    arr.push(randomNumber);
  }
  console.log(arr);
  return arr;
};

const arrNew = createArr(10, 200);

const getHighestNumbers = function (array) {
  array.sort(function (a, b) {
    return a - b;
    
  });
  const arr2 = arr.slice(0, 10);
  return arr2;
}

const arrSliced = getHighestNumbers(arrNew);

const getAvarage = function (array) {
  const reducer = array.reduce((acc, curr) => acc + curr);
  if (arrSliced.length === 0) {
    return 0;
  }
  const avGradeSub = reducer / arrSliced.length;
  return avGradeSub;
}


// console.log(arr2);
const arrHighest = getHighestNumbers(arrNew);
const avg = getAvarage(arrSliced);
console.log(arrHighest);
console.log(avg);