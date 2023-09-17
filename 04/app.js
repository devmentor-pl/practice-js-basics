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

const arr = createArr(1, 100);
console.log(arr);

const getLargest = function (arr) {};
