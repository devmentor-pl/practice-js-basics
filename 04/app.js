const min = 10;
const max = 200;

const drawedArray = draw(min, max);
const sortedArray = sortFromHighest(drawedArray);
const average = countAverage(sortedArray);

console.log(sortedArray);
console.log(average);

function draw(min, max) {
  const numbers = [];
  for (let i = 0; i < 20; i++) {
    numbers.push(Math.round(Math.random() * (max - min) + min));
  }
  return numbers;
}

function sortFromHighest(array) {
  let sorted = array.map(function (value) {
    return value;
  });
  sorted = sorted.sort(function (a, b) {
    return b - a;
  }).slice(0, 10);

  return sorted;
}

function countAverage (array) {
  const sum = array.reduce(function (a , b) {
    return a + b;
  });

  const average = sum / array.length;

  return average;
}