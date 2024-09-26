const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

const sum = getSum(a, b, c);

function getSum(num1, num2, num3) {
  const num1Int = parseInt(num1);
  const num2Int = parseInt(num2);
  const num3Int = parseInt(num3);

  const numbers = [num1Int, num2Int, num3Int];
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0] + numbers[1];
}

const isEven = function (num) {
  if (typeof num !== "number") {
    return null;
  }

  return num % 2 === 0;
};

const even = isEven(sum);

function showInfo(value, isEven) {
  switch (isEven) {
    case null:
      console.log("Podany argument " + value + " nie jest liczbą");
      break;
    case true:
      console.log("Podany argument " + value + " jest parzysty");
      break;
    case false:
      console.log("Podany argument " + value + " jest nieparzysty");
      break;
    default:
      alert("Podano błędne dane!");
      break;
  }
}

console.log(a, b, c);
console.log(sum);
console.log(even);
showInfo(sum, even);