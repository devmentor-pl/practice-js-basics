const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(numOne, numTwo, numThree) {
  const arr = [parseInt(numOne), parseInt(numTwo), parseInt(numThree)];
  arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
}

function checkIsEven(num) {
  if (typeof num === "number" && !isNaN(num)) {
    return num % 2 === 0;
  } else {
    return null;
  }
};

const isEven = checkIsEven;

const showInfo = (value, checkIsEven) => {
  switch (checkIsEven) {
    case true:
      console.log(`Podany argument ${value} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${value} jest nieparzysty`);
      break;
    default:
      console.log(`Podany argument ${value} nie jest liczbą`);
      break;
  }
};


// Implementacja 
const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);


function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
