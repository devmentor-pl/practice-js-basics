const a = "4.2";
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

function showNumbers(num1, num2) {
  let arr = [];
  const concat = a + b;
  arr.push(concat);
  const sum = parseFloat(a) + b;
  arr.push(sum);
  const diff = parseFloat(a) - b;
  arr.push(diff);
  const prod = (parseFloat(a) * b).toFixed(2);
  arr.push(prod);
  const quot = (parseFloat(a) / b).toFixed(2);
  arr.push(quot);
  const mod = b % parseFloat(a);
  arr.push(mod);

  arr.forEach(function (el) {
    if (el < 20) {
      console.log(el + " jest mniejszy od 20");
    } else {
      console.log(el + " jest większy od 20");
    }
  });
}

showNumbers(a, b);
