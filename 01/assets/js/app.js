const a = '4.2';
const b = 9;
const aNum = parseFloat(a)

// typeof check
console.log(typeof a, typeof b)

// arithmetic operators
const add = aNum + b;
const subtract = aNum - b;
const multiply = (aNum*10 * b)/10;
const divide = (b !== 0) ? (aNum / b) : 'You cannot divide by 0';
const returnRest = (aNum !== 0) ? (b*10 % (aNum*10))/10 : 'You cannot divide by 0';

// increment and decrement operators
let i = aNum;
let incr = ++i;
let d = b;
let decr = --d;
console.log('inkrementacja: ' + incr, 'dekrementacja: ' + decr)

console.log('dodawanie ' + add, 'odejmowanie ' + subtract, 'mnożenie ' + multiply, 'dzielenie ' + divide, 'reszta z dzielenia ' + returnRest);

const results = [add, subtract, multiply, divide, returnRest]

for(res of results) {
  console.log(checkEquality(res, 20))
} //skąd mi się bierze "gratisowe" undefined, gdy jedna ze zmiennych równa się 0?

function checkEquality(num, x) {
  if(typeof num === 'number') {
    if (num > x) {
      return `${num} is more than ${x}`
    } else if (num === x) {
      return `${num} is equal to ${x}`
    } else {
      return `${num} is less than ${x}`
    }
  } else {console.log('You tried to divide by 0 somewhere there!')}
}
