
function createRandomNumberArray(min, max) {
  let arr = [];
  
  for(let i = 0; i < 20; i++) {
    const num = Math.round(Math.random() * (max - min) + min);
    arr.push(num);
  }

  return arr;
};

function getLargestNum(arr) {
  return arr.sort((a, b) => b - a).slice(0, 10);
}

function getAverage(arr) {
  console.log(arr);
  return arr.reduce((prev, curr) => curr = prev + curr) / arr.length;
}

const randomNumberArray = createRandomNumberArray(10, 200);
const largestNumberArray = getLargestNum(randomNumberArray);

const average = getAverage(largestNumberArray);
console.log(average);
