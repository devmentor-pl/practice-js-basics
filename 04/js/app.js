// 1. Funkcja z 20 eleemtami

function createArr(min, max) {
  const newArr = [];

  for (let i = min; i <= min + 19; i++) {
    let maxNum = Math.round(Math.random() * max);

    newArr.push(maxNum);
  }

  return newArr;
}

const arr = createArr(10, 200);
console.log(arr);

// 2. Funkcja sortująca

function getLargest(arrayToSort) {
  arrayToSort.sort(function (a, b) {
    return b - a;
  });

  return arrayToSort.slice(0, 10);
}

const largest = getLargest(arr);
console.log(largest);

// 3 średnia arytmetyczna

function getAvg(array) {
  let sum = 0;
  array.forEach(function (num) {
    sum = (sum + num) / 10;
  });

  return sum;
}

const avg = getAvg(largest);
console.log(avg);
