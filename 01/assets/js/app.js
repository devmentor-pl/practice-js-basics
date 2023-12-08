const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

const c = parseFloat(a);

console.log(typeof c);


let addValues = c + b;
let subtractValues = c - b;
let multiplyValues = Math.round(c * b * 100) / 100;
let divideValues =  Math.round(c / b * 100) / 100;;

console.log(addValues);
console.log(subtractValues);
console.log(multiplyValues);
console.log(divideValues);

const valuesArray = [addValues, subtractValues, multiplyValues, divideValues];

valuesArray.forEach(function(num){
    if(num>20){
        console.log(`${num} jest większy od 20`);
    } else {
        console.log(`${num} jest mniejsze od 20`);

    }
})


