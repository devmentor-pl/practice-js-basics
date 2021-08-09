const a = "4.2";
const b = 9;

console.log(typeof a);
console.log(typeof b);

console.log(a, b);

sum = 14.2;
diff = -5;
multipl = 52;
div = 2;
modulo = 0.6;

if (sum !== parseInt(a) + b) {
  sum = parseInt(a) + b;
}

if (diff !== parseInt(a) - b) {
  diff = parseInt(a) - b;
}

if (multipl !== parseInt(a) * b) {
  multipl = parseInt(a) * b;
}

if (div !== parseInt(a) / b) {
  div = parseInt(a) / b;
}

if (modulo !== parseInt(a) % b) {
  modulo = parseInt(a) % b;
}

function isMoreThan20(el) {
  if (parseInt(el) > 20) {
    console.log(`${el} jest większe niż 20`);
  } else {
    console.log(`${el} jest mniejsze niż 20`);
  }
}

isMoreThan20(sum);
isMoreThan20(diff);
isMoreThan20(multipl);
isMoreThan20(div);
isMoreThan20(modulo);
