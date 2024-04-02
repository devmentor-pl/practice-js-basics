function createArray(min, max) {
  const newArray = [];
  for(let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    newArray.push(randomNumber);
  }
  return newArray;
}

const arr = createArray(10, 200);
console.log(arr);

function getTop10Numbers(array) {
  const sortedArray = array.sort(function(a, b) {
    return b - a;
  });
  const top10Numbers = sortedArray.slice(0, 10); // slice pobiera pierwsze 10 elementów
  return top10Numbers;
}

const top10Numbers = getTop10Numbers(arr);
console.log(top10Numbers);

function getAvg(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce(function(total, current) {
    return total + current;
  }, 0)

  const avg = sum / numbers.length;

  return avg;
}

const avgOfTop10 = getAvg(top10Numbers);
console.log(avgOfTop10);