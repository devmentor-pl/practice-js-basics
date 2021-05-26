const a = '4.2';
const b = 9;
const n = 20;

console.log(a, b);

console.log( typeof a, typeof b);


// dodawanie
const add = parseFloat(a) + b;
console.log("dodawanie:" + add, typeof add);

// odejmowanie
const subtraction = parseFloat(a) - b;
console.log("odejmowanie:" + subtraction , typeof subtraction);

// mnożenie
const multiplication = parseFloat(a) * b;
console.log("mnożenie:" + multiplication,typeof multiplication);

// dzielenie
const division = a / b;
console.log("dzielenie:" + division, typeof division);

// konkatenacja
const concatenation = a + b;
console.log("konkatenancja:" + concatenation , typeof concatenation);

// reszta
const rest = parseFloat(a) % b;
console.log("reszta:" + rest , typeof rest)



const result = [add, subtraction, multiplication, division, rest, concatenation];
const moreThan = [];
const lessThan = [];

console.log(result);


for(const key in result) {

    if( result[key] > n ) {
       moreThan.push( result[key] );
    }
    else {
        lessThan.push( result[key] );
    }
}

console.log('more than n' , moreThan);
console.log('more than n' , lessThan);




