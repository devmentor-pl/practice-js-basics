const arr = [];

const createArr = function (min, max) {
  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(randomNumber);
    arr.push(randomNumber);
  }
  console.log(arr);
  return arr;
};

const getHighestNumbers = function (array) {
  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr);
  const arr3 = arr.slice(0, 10);
  // console.log(arr3);
  return arr3;
}

const getAvarage = function (array) {
  const reducer = arr4.reduce((acc, curr) => acc + curr);
  if (arr4.length === 0) {
    return 0;
  }
  const avGradeSub = reducer / arr4.length;
  return avGradeSub;
}

const arr2 = createArr(10, 200);
// console.log(arr2);
const arr4 = getHighestNumbers(arr2);
const finalarr = getAvarage(arr4);
console.log(arr4);
console.log(finalarr);