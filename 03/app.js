const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const sum =TwoNumbers(a, b, c)

console.log(a, b, c);

function TwoNumbers(a, b, c) {
    
}







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}