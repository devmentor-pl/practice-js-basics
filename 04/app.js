function createArray(min, max) {
  const arr = [];

  for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * (max - min)) + min;
    arr.push(random);
  }

  return arr;
}

function getLargest(numsArr) {
  const biggestNumArr = numsArr.sort((a, b) => b - a).slice(0, 10);
  return biggestNumArr;
}

function getAvg(numsArr) {
  const avg = numsArr.reduce((acc, cur) => acc + cur, 0) / numsArr.length;
  return avg.toFixed(2);
}

const arr = createArray(1, 100);
console.log(arr);
const largest = getLargest(arr);
console.log(largest);
const avg = getAvg(largest);
console.log(avg);
