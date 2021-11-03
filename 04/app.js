let arr = [];
let sum = 0;
let avgResult = 0;

function createArray(min, max) {
  for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (max - min)));
  }
  return arr;
}

function getLargest(array) {
  array.sort(function (a, b) {
    return b - a;
  });
  return array.slice(0, 10);
}

function getAvg(arrayAvg) {
  arrayAvg.forEach(function (item, index, array) {
    sum += item;
    avgResult = sum / array.length;
  });
}

const finalArr = createArray(10, 200);
console.log(arr);
const largest = getLargest(arr);
console.log(largest);
const avg = getAvg(largest);
console.log(avgResult);
