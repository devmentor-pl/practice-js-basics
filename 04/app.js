function getNumbers(min, max) {
  const arr = [];
  const lengthArr = 20;
  for (let i = 0; i < lengthArr; i++) {
    arr.push(createRandomNumbers(min, max))
  }
  return arr;
}

function createRandomNumbers(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

const result = getNumbers(1, 30);
console.log(result);


function sortNumbers(getNumbersResult) {
  const leftNumbers10 = getNumbersResult.sort(function (a, b) {
    return a - b;
  }).slice(-10);
  return leftNumbers10;
}
console.log(sortNumbers(result));

const sortedLeftNumbers10 = sortNumbers(result);

function showAvgNumbers(numbers) {
  const avg = numbers.reduce(function (prev, acc) {
    return (prev + acc) / numbers.length;
  }, 0)
  return avg;
}

const sumAvgNumbers = showAvgNumbers(sortedLeftNumbers10)
console.log(sumAvgNumbers);


//4.

const newArr = getNumbers(10, 200);
console.log(newArr);

const newArrSort = sortNumbers(newArr);
console.log(newArrSort);

const sumNewArrAvg = showAvgNumbers(newArrSort)
console.log(sumNewArrAvg);