const a = '4.2';
const b = 9;
const x = 20;

console.log(a, b);

console.log('a is type of: ' , typeof a);
console.log('b is type of: ' , typeof b);

additionRes = a + b;
console.log(additionRes);

subtractionRes = a- b;
console.log(subtractionRes);

multiplicationRes = a * b;
console.log(multiplicationRes);

divisionRes = a / b;
console.log(divisionRes);

moduloRes = a % b;
console.log(moduloRes);

const  res = [additionRes, subtractionRes, multiplicationRes, divisionRes, moduloRes];

const bigger = [];
const smaller = [];

for(const key in res) {

    if(res[key] > x) {
        bigger.push(res[key]);
    } else {
        smaller.push(res[key]);
    }
}

console.log('bigger than x: ' , bigger);
console.log('smaller than x: ' , smaller);
