function getArr(min, max, arrLength = 20) {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(Math.trunc(Math.random() * (max - min) + min));
  }
  return arr;
}

function getLargest(arr) {
  return arr.sort((a, b) => (a > b ? -1 : 1)).slice(0, 10);
}

function getAvg(arr) {
  acc = arr.reduce((acc, val) => acc + val);
  return acc / arr.length;
}

const newArr = getArr(10, 200);
console.log(newArr);
const largest = getLargest(newArr);
console.log(largest);
const avg = getAvg(largest);
console.log(avg);
