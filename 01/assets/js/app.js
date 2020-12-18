const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

// Add everything to array
const arr = [];

// Addition
const add = a +b;
arr.push(add);

//Subtraction
const sub = a - b;
arr.push(sub);

//Division
const division = a / b;
arr.push(division);

// Multiplication
const multi = a *b;
arr.push(multi);

// Remainder 
const remainder = a % b; 
arr.push(remainder);

// Exponentation
const exponentation = a **b;
arr.push(exponentation);


const checkResult = arr.map(function(element) {
    if(element > 20) {
        return 'Higher';
    } else {
        return 'Lower than 20';
    }
});

for(const element of arr) {
    console.log(`${element}`);
}

console.log(checkResult);