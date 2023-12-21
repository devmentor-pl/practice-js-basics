// function 1
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomArray(a, b) {
  const array = [];
  // const arrayLength = randomNumber(a, b);
  const arrayLength = 20;
  for (let i=0; i < arrayLength; i++) {
    array.push(randomNumber(a, b));
  }
  console.log(array)
  return array;
}

const array = randomArray(10,200)

// function 2
function sortNumbers (num1, num2) {
  return num2 - num1;
}

function sortArray (arr) {
  const sortedArr = arr.sort(sortNumbers);
  const arrSliced = sortedArr.slice(0, 10);
  console.log(arrSliced);
  return arrSliced;
}

const slicedArray = sortArray (array);

// function 3
function average(arr) {
  const length = arr.length;
  const sum = arr.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  return console.log("Średnia art. liczb z tablicy = " + (sum / length));
} 

average(slicedArray)





