const a = '4.2';
const b = 9;
const n = 20;

console.log(a, b);


console.log('a jest typu' , typeof a);
console.log('b jest typu' , typeof b);

// Konkatenacja
concatenationResult = a + b;
console.log(concatenationResult , typeof concatenationResult);

// Dodawanie
additionResult = parseFloat(a) + b;
console.log(additionResult , typeof additionResult);

// Odejmowanie
subtractionResult = parseFloat(a) - b;
console.log(subtractionResult , typeof subtractionResult);

// Mnożenie
multiplicationResult = parseFloat(a) * b;
console.log(multiplicationResult.toFixed(2) , typeof multiplicationResult);

// Dzielenie
divisionResult = a / b;
console.log(divisionResult.toFixed(2) , typeof divisionResult);

// Reszta
moduloResult = parseFloat(a) % b;
console.log(moduloResult , typeof moduloResult)

// Pomijam inkrementacje/dekrementacje jako, że są to operatory arytmetyczne jednoargumentowe.

const result = [concatenationResult, additionResult, subtractionResult, multiplicationResult, divisionResult, moduloResult];
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

console.log('większe od n' , moreThan);
console.log('mniejsze od n' , lessThan);
