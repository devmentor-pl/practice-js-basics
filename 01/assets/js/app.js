const a = '4.2';
const b = 9;


console.log(typeof a, typeof b)

const aNumber = Number(a)

const addResult = aNumber + b;
const subtractResult = aNumber - b;
const multiplyResult = Number((aNumber * b).toFixed(2));
const divideResult = Number((aNumber / b).toFixed(2))
const moduloResult = aNumber % b;

const results = { addResult, subtractResult, multiplyResult, divideResult, moduloResult }

const resultsMoreThanTwenty = checkIfMoreThanTwenty(results)

console.log(resultsMoreThanTwenty)


function checkIfMoreThanTwenty() {
    const lessThanTwenty = []
    const moreThanTwenty = []

    for (let key in results) {
        if (results[key] > 20) {
            moreThanTwenty.push(' ' + key + " = " + results[key])
        } else {
            lessThanTwenty.push(' ' + key + " = " + results[key])
        }
    }
    return "Wyniki większe od 20: " + moreThanTwenty + ". Wyniki mniejsze od 20: " + lessThanTwenty
}

