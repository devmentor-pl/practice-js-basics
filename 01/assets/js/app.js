const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof a, typeof b);

// const aNumber = parsingToFloat(a);
// console.log(aNumber);
// console.log(aNumber+b);
// console.log(aNumber-b);
// console.log(aNumber*b);
// console.log(aNumber/b);
// console.log(aNumber%b);

function parsingToFloat(value) {
    return parseFloat(value);
}

function checkingValueForParsingToFloat(a, b) {
    let values = [];
    if(typeof a === "string") {
        values.push(parsingToFloat(a));
    } else if(typeof a === "number") {
        values.push(a);
    };

    if(typeof b === "string") {
        values.push(parsingToFloat(b));
    } else if(typeof b === "number") {
        values.push(b);
    };
    return values;
    
}

function checkResult(a, b) {
    const values = checkingValueForParsingToFloat(a, b);
    const results = {
        1: values[0] + values[1],
        2: values[0] - values[1],
        3: values[0] * values[1],
        4: values[0] / values[1],
        5: values[0] % values[1],
    };

    for(const key in results) {
        showResult(key, results[key]);
        if(results[key] > 20) {
            showCommunicate(1, results[key]);
        } else if (results[key] < 20) {
            showCommunicate(2, results[key]);
        }
    }

}

function showResult(key, val) {
    console.log(`Wynik ${key} działania: ${val}`);
}

function showCommunicate(val, result) {
    const communicates = {
        1: `Wynik działania ${result} jest większy od 20`,
        2: `Wynik działania ${result} jest mniejszy od 20`
    };
    console.log(communicates[val]);
}

checkResult(a, b);