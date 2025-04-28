function createArray(min, max) {
  const arr = [];

  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(randomNumber);
  }
  return arr;
}
const arr = createArray(1, 100);
console.log(arr);

function getLargest(arr) {
  return [...arr].sort((a, b) => b - a).slice(0, 10);
}

const largest = getLargest(arr);
console.log(largest);

function getAvg(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
