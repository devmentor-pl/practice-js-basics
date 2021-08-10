const arr = createArray(1, 200);
const largest = getLargest(arr);
const average = getAvg(largest);
console.log(arr, largest, average);

function createArray(min, max) {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return arr;
}

function getLargest(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });

  return arr.slice(0, 10);
}

function getAvg(arr) {
  const sum = arr.reduce(function (acc, curr) {
    return acc + curr;
  });
  return sum / arr.length;
}
