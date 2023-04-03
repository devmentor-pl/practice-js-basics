const createArray = function (min, max) {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    const getRandomNumber = Math.round(Math.random() * (max - min) + min);
    arr.push(getRandomNumber);
  }
  return arr;
};

const getLargest = function (numbers) {
  const sortedArray = arr.sort(function (a, b) {
    return a - b;
  });

  const largestNums = sortedArray.slice(10);
  return largestNums;
};

const getAvg = function (array) {
  const newArray = array.reduce((a, b) => {
    return a + b;
  }, 0);

  const avg = newArray / array.length;
  return avg;
};

// --------------- PRZYKŁAD ---------------

// const arr = createArray(1, 100);
// const largest = getLargest(arr);
// const avg = getAvg(largest);
// console.log(avg);

// --------------- 4 zadanie ---------------

const arr = createArray(10, 200);
const largestTenNums = getLargest(arr);
const avg = getAvg(largestTenNums);
console.log(avg);
