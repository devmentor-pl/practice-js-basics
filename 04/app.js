const min = 10;
const max = 200;

// const randomNumber = Math.round(Math.random() * (max - min) + min);

function createArray(min, max) {
  const numbers = [];
  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.round(Math.random() * (max - min) + min);
    numbers.push(randomNumber);
  }
  return numbers;
}
const numbers = createArray(min, max);
console.log(numbers);

function getLargest(numbers) {
  const largest = numbers.sort((a, b) => b - a).slice(0, 10);
  return largest;
}
const largest = getLargest(numbers);
console.log(largest);

function getAvg(largest) {
  const sumArr = largest.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const avg = sumArr / largest.length;
  return avg;
}

const avg = getAvg(largest);
console.log(avg);
