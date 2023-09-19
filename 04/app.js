// Create X random numbers
const createArr = function (min, max) {
  if (min > max) {
    throw new Error(
      'Liczba minimalna nie może być większa niż liczba maksymalna'
    );
  }
  const numbersArr = [];
  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbersArr.push(randomNumber);
  }
  return numbersArr;
};

const arrLargest = createArr(1, 100);
console.log('X losowych liczb');
console.log(arrLargest);

// Sort X numbers from largest to smallest
arrLargest.sort(function (a, b) {
  return b - a;
});
console.log('Posortowane X liczb');
console.log(arrLargest);

// Get X largest numbers
const firstTenElements = arrLargest.slice(0, 10);
console.log('Posortowane max X liczb');
console.log(firstTenElements);

// Calculate the arithmetic

const getAvg = function (arr) {
  let sum = 0;
  let arrElements = 0;

  arr.forEach(function (element) {
    sum += element;
    arrElements++;
  });

  if (arrElements === 0) {
    return 0;
  } else {
    return sum / arrElements;
  }
};
console.log('Średnia arytmetyczna');
console.log(getAvg(firstTenElements));

// Zadanie 4
console.log('<_______Zadanie 4_______>');
console.log('X losowych liczb');
const taskArr = createArr(10, 200);
console.log(taskArr);

// Sort X numbers from largest to smallest
taskArr.sort(function (a, b) {
  return b - a;
});
console.log('Posortowane X liczb');
console.log(taskArr);

// Get X largest numbers
const firstTenTaskEle = taskArr.slice(0, 10);
console.log('Posortowane max X liczb');
console.log(firstTenTaskEle);

// Calculate the arithmetic
console.log(getAvg(taskArr));
