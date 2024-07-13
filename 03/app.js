const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x, y, z) {
  x = Math.round(x);
  y = Math.round(y);
  z = Math.round(z);
  const min = Math.min(x, y, z);
  if (min === x) {
    return y + z;
  } else if (min === y) {
    return z + x;
  }

  return x + y;
}

const isEven = function isEven(x) {
  if (typeof x !== "number") {
    return null;
  } else if (x % 2 === 0) {
    return true;
  }
  return false;
};

function showInfo(x, y) {
  switch (y) {
    case null:
      console.log("Podany argument " + x + " nie jest liczbą");
      break;
    case true:
      console.log("Podany argument " + x + " jest parzysty");
      break;
    case false:
      console.log("Podany argument " + x + " jest nieparzysty");
      break;
    default:
      console.log("Nieprawidłowa wartość drugiego parametru");
      break;
  }
}

let sum = getSum(a, b, c);
console.log(sum);

let even = isEven(sum)

showInfo(sum, even)

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
