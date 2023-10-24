const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}
function getSum(a,b,c){
    let array = [a,b,c];
    array.sort(function()) {
        return a + b;
    }
   
}
console.log(getSum);