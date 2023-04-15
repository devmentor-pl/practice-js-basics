const arr = createArray(1, 200);
const largest = getLargest(arr);
const avg = getAvg(arr);

console.log('Utworzona tablica z 20 losowych liczb:', arr);
console.log('10 największych liczb:', largest);
console.log('Średnia arytmetyczna z 10 największych liczb:', avg);

function createArray(min, max) {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(num);
  }
  return arr;
}

function getLargest(arr) {
  arr.sort((a, b) => b - a);
  return arr.slice(0, 10);
}

function getAvg(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return Math.round(sum / arr.length);
}