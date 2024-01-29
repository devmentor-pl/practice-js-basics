function createArray(min, max) {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    let number = Math.round(Math.random() * (max - min) + min);
    arr.push(number);
  }
  return arr;
}

function getLargest(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  const newArray = arr.slice(0, 10);
  return newArray;
}

function getAvg(arr) {
  const sum = arr.reduce(function (acc, num) {
    return acc + num;
  });
  console.log(sum);
  const result = sum / arr.length;
  return result;
}

const arr = createArray(1, 200);
console.log(arr);

const largest = getLargest(arr);
console.log(largest);

const avg = getAvg(largest);
console.log(avg);
