// 1.

const createArray = (a, b) => {
  const emptyArr = [];

  for (let i = 0; i < 20; i++) {
    let randomNumbers = Math.round(Math.random() * (b - a) + a);
    emptyArr.push(randomNumbers);
  }
  return emptyArr;
};

const arr = createArray(1, 100);
console.log('Tworzymy tablice:', arr);

// 2.

const getLargest = function (arrToSort) {
  const sortArr = arrToSort.sort(function (a, b) {
    return b - a;
  });

  const theBiggestNumbers = sortArr.slice(-20, 10);
  return theBiggestNumbers;
};

const largest = getLargest(arr);
console.log('Wybieramy 10 największych liczb z posortowanej malejąco tablicy:', largest);

// 3.
const getAvg = (arr) => {
  const initValue = 0;
  const sumWithInitValue = arr.reduce((acc, currValue) => acc + currValue, initValue);

  const arithmeticAvg = sumWithInitValue / arr.length;

  return arithmeticAvg;
};

const avg = getAvg([1, 2, 3, 4, 5]);
console.log('Średnia arytmetyczna tablicy:', avg);

4;

const getArr = (a, b) => {
  const emptyArray = [];

  for (let i = 0; i < 20; i++) {
    let randomNum = Math.round(Math.random() * (b - a) + a);
    emptyArray.push(randomNum);
  }

  return emptyArray;
};

const newArr = getArr(10, 200);
console.log('Nowa tablica:', newArr);

const getTenBiggest = (sortNumbers) => {
  const sortArr = sortNumbers.sort(function (a, b) {
    return b - a;
  });

  const getBiggestTen = sortArr.slice(-20, 10);
  console.log(getBiggestTen);

  initValue = 0;
  const sumBiggestTen = getBiggestTen.reduce((acc, curr) => acc + curr, initValue);
  console.log(sumBiggestTen);
  const avgBiggestTen = sumBiggestTen / getBiggestTen.length;
  console.log(avgBiggestTen);

  return avgBiggestTen;
};

const biggestTen = getTenBiggest(newArr);
console.log('Średnia arytmetyczna 10 największych liczb:', biggestTen);
