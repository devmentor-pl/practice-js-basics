const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);



//1.Funkcja getSum

function getSum(a, b, c) {
  const num1 = parseInt(a);
  const num2 = parseInt(b);
  const num3 = parseInt(c);

  const numbers = [num1, num2, num3];

  numbers.sort(function (a, b) {
    return b - a;
  });


  const sum = numbers[0] + numbers[1];

  return sum;
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


//2.Funkcja isEven

function isEven(number) {
  if (typeof number !== "number") return null;
  else if (number % 2 === 0) return true;
  else return false;
}

//3.Funkcja showInfo


function showInfo(value, type) {
  switch (type) {
    case null:
      console.log("Podany argument " + value + " nie jest liczbą");
      break;

    case true:
      type = true;
      console.log("Podany argument " + value + " jest parzysty");

      break;

    case false:
      type = false;
      console.log("Podany argument " + value + " nie jest parzysty");

      break;
  }
}

const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even)





