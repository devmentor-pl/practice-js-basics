const a = '4.2';
const b = 9;

console.log(typeof a);
console.log(typeof b);

const arr = [];


// DODAWANIE
const sum = parseFloat(a) + b;
console.log(sum);
arr.push(sum)

// ODEJMOWANIE
const substraction = parseFloat(a) - b;
console.log(substraction);
arr.push(substraction)

// MNOŻENIE
const multiply = parseFloat(a) * b;
console.log(multiply);
arr.push(multiply)

// DZIELENIE
const division = parseFloat(a) / b;
console.log(division);
arr.push(division)

// RESZTA Z DZIELENIA
const mod = parseFloat(a) % b;
console.log(mod);
arr.push(mod)

// console.log(arr);


for (let i=0; i < arr.length; i++) {

    if (arr[i] < 20) {
        console.log(`${arr[i]} jest mniejszy niż 20`);
    } else {
        console.log(`${arr[i]} jest większy niż 20`);
    }
}


