function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createArray(min, max) {
  const arr = [];

  for (let i = 0; i < 20; i++) {
    arr.push(randomNumber(min, max));
  }

  return arr;
}

function sortAndSlice(arr) {
  return arr.sort((a, b) => a - b).slice(10);
}

function getAverage(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

const array = createArray(10, 200);
const array2 = sortAndSlice(array);
const avg = getAverage(array2);

console.log(array);
console.log(array2);
console.log(avg);
