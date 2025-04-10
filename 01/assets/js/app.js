const a = '9.2';
const b = 30;

console.log(a, b);

console.log("zmienna a jest typu: " + typeof a);
console.log("zmienna b jest typu: " + typeof b);

const aInt = parseFloat(a);

const addResult = aInt + b;
const subResult = aInt - b;
const multiplyResult = aInt * b;
const divResult = aInt / b;
const moduloResult = aInt % b;

console.log("Dodawnie: " + addResult + "\nOdejmowanie: " + subResult + "\nMnożenie: " + multiplyResult + "\nDzielenie: " + divResult + "\nReszta z dzielenia: " + moduloResult);

const results = [addResult, subResult, multiplyResult, divResult, moduloResult];

for(let i = 0; i < results.length; i++){
    results[i] < 20 ? console.log(results[i] + " wynik mniejszy od 20") : console.log(results[i] + " wynik większy od 20");
}