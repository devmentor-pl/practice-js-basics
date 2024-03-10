const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const sumResult = getSum(a, b, c);
console.log(sumResult);



function getSum(a, b, c) {
  
  const numbers = [a, b, c];
  

  numbers.sort((a, b) => b - a);
  const sum = numbers[0] + numbers[1];
  return sum;
}


const isEven = function (n) {
  if (typeof n === 'number') {
    if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }

  } else {
    return null;
  }
};

const even = isEven(sumResult);
console.log(even);



function showInfo(firstValue, secondValue) {
  switch (secondValue) {

    case null:

      console.log('Podany argument ' + sumResult + ' nie jest liczbą');
      break;

    case true:
      console.log('Podany argument ' + sumResult + ' jest parzysty');
      break;
    case false:
      console.log('Podany argument ' + sumResult + ' jest nieparzysty');
      break;
    default:
      alert('Błąd');
      break;
  }

}
showInfo(sumResult, even);






function randomNumber(min, max) {
  return Math.round((Math.random() * (max - min)) + min);
}