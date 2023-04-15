const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a, typeof b);

const num1 = getNumber(a);
const num2 = getNumber(b);

function getNumber(num) {
  return parseFloat(num);
}

const res1 = num1 + num2;
console.log(res1);

const res2 = num1 - num2;
console.log(res2);

const res3 = num1 * num2;
console.log(res3.toFixed(2));

const res4 = num1 / num2;
console.log(res4.toFixed(2));

const results = [res1, res2, res3, res4];

results.forEach(function (element) {
  if (element > 20) {
    console.log("Wynik " + element.toFixed(2) + " jest większy od 20!");
  } else {
    console.log("Wynik " + element.toFixed(2) + " jest mniejszy od 20!");
  }
});