const a = "4.2";
const b = 9;

const aInt = parseInt(a);

console.log(typeof a);
console.log(typeof b);

console.log(a, b);

sum = 14.2;
diff = -5;
multipl = 52;
div = 2;
modulo = 0.6;

if (sum !== aInt + b) {
  sum = aInt + b;
}

if (diff !== aInt - b) {
  diff = aInt - b;
}

if (multipl !== aInt * b) {
  multipl = aInt * b;
}

if (div !== aInt / b) {
  div = aInt / b;
}

if (modulo !== aInt % b) {
  modulo = aInt % b;
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
