const arr = createArray(1, 100);
console.log(arr);

function createArray(min, max) {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    const randomNum = Math.round(Math.random() * (max - min));
    arr.push(randomNum);
  }
  return arr;
}

function getLargest(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr.slice(0, 10);
}
const largest = getLargest(arr);
console.log(largest);

function getAvg(arr) {
  let add = arr.reduce(function (x, y) {
    return x + y;
  }, 0);
  return add / arr.length;
}

const avg = getAvg([1, 2, 3, 4, 5]);
console.log(avg);

const randomArr = createArray(10, 200);
console.log(randomArr);
const largestNums = getLargest(randomArr);
console.log(largestNums);
const arithmeticMean = getAvg(largestNums);
console.log(arithmeticMean);
