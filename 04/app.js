
console.log(avg(maxTen(randomArray(10, 200))));


function randomArray(min, max) {
  let array = new Array(20);

  for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * (max - min) + min);
  }
  return array;
}

function maxTen(array) {
  let sortedArray = array.sort((a, b) => b - a);
  return sortedArray.slice(0, 10);
}

function avg(array) {
  const reducedArray = array.reduce(function (accumulator, currentValue) {
    accumulator = accumulator + currentValue;
    return accumulator;
  });
  const avg = reducedArray / array.length;
  return avg;
}


