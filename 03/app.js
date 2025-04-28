const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
  a = Math.floor(Number(a));
  b = Math.floor(Number(b));
  c = Math.floor(Number(c));

  let max1, max2;

  if (a >= b && a >= c) {
    max1 = a;
    max2 = Math.max(b, c);
  } else if (b >= a && b >= c) {
    max1 = b;
    max2 = Math.max(a, c);
  } else {
    max1 = c;
    max2 = Math.max(a, b);
  }
  return max1 + max2;
}

const sum = getSum(a, b, c);
console.log(sum);

const isEven = function (num) {
  if (typeof num !== 'number') {
    return null;
  }
  return num % 2 === 0;
};

function showInfo(value, isEven) {
  switch (isEven) {
    case null:
      console.log('Podany argument ' + value + ' nie jest liczą');
      break;
    case true:
      console.log('Podany argument ' + value + ' jest parzysty');
      break;
    case false:
      console.log('Podany argument ' + value + ' jest nieparzysty');
      break;
  }
}
const even = isEven(sum);

showInfo(sum, even);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
