const createArr = function (min, max) {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    arr.push(randomNumber);
  }
  return arr;
};

const myArr = createArr(10, 200);
console.log(myArr);

const sortArray = function (array) {
  const shortArr = array
    .sort(function (a, b) {
      return b - a;
    })
    .slice(10);
  return shortArr;
};

const myArr2 = sortArray(myArr);
console.log(myArr2);

const getAverage = function (array) {
  const sum = array.reduce((acc, curr) => acc + curr);
  console.log(sum);
  console.log(array.length);
  return sum / array.length;
};

const myArr3 = getAverage(myArr2);
console.log(myArr3);
