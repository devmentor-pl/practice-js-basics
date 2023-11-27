const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

const sum =TwoNumbers(a, b, c)

console.log(a, b, c);

function TwoNumbers(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    const numbers = [a, b, c];
    numbers.sort(function(a,b)){
        return b-a;
    }
    return numbers[0] + [1];
}
console.log('Two biggest numbers: ' + sum);

const isEven = function(num){
    if
}





function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}