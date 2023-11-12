const a = "4.2";
let b = 9;

console.log(a, b);

console.log(typeof a, typeof b); // sprawdzenie typu

// Operatory arytmetyczne

const add = parseInt(a) + b;
const sub = a - b;
const multi = a * b;
const split = a / b;
const perc = b % a;
let incr = ++b;
let decr = --b;

const result = {
  varA: a,
  varB: b,
  add: add,
  sub: sub,
  multi: multi,
  split: split,
  perc: perc,
  incr: incr,
  decr: decr,
};

console.table(result);

const isValueGreaterThanTwenty = (res) =>
  res > 20 ? ` ${res} is bigger than 20` : `${res} is smaller than 20`;

console.log(isValueGreaterThanTwenty(result.add));
console.log(isValueGreaterThanTwenty(result.sub));
console.log(isValueGreaterThanTwenty(result.multi));
console.log(isValueGreaterThanTwenty(result.split));
console.log(isValueGreaterThanTwenty(result.perc));
console.log(isValueGreaterThanTwenty(result.incr));
console.log(isValueGreaterThanTwenty(result.decr));
