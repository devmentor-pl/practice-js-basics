function createArray(min, max) {
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    isNaN(min) ||
    isNaN(max)
  ) {
    throw new Error("min and max must be valid numbers.");
  }

  if (min > max) {
    throw new Error("min must be less than or equal to max.");
  }

  const array = [];

  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.random() * (max - min) + min;
    array.push(Math.round(randomNumber));
  }

  return array;
}

function getLargest(array) {
  return array.sort((a, b) => b - a).slice(0, 10);
}

function getAvg(array) {
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  return sum / array.length;
}

const arr = createArray(10, 200);
const largest = getLargest(arr);
const avg = getAvg(largest);

console.log(avg);
