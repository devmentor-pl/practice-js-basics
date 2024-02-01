const a = '4.2';
const b = 9;

console.log(a, b);
console.log(typeof(a));
console.log(typeof(b));

// Dziala to nawet jezeli jest zmienna 'a' jako string ale dla bezpieczenstwa zamienie ja na number.
const aAsNumber = parseFloat(a);
const addition = aAsNumber + b;
console.log(addition);

const substraction = aAsNumber - b;
console.log(substraction);

const multiplication = aAsNumber * b;
console.log(multiplication);

const division = aAsNumber / b;
console.log(division);

const remainder = aAsNumber % b;
console.log(remainder);

function checkResults(a, b) {
    const addition = aAsNumber + b;
    const substraction = aAsNumber - b;
    const multiplication = aAsNumber * b;
    const division = aAsNumber / b;
    const remainder = aAsNumber % b;

    if (addition > 20) {
        console.log("Addition is greater than 20");
    } else {
        console.log("Addition is not greater than 20");
    }

    if (substraction > 20) {
        console.log("Substraction is greater than 20");
    } else {
        console.log("Substraction is not greater than 20");
    }

    if (multiplication > 20) {
        console.log("Multiplication is greater than 20");
    } else {
        console.log("Multiplication is not greater than 20");
    }

    if (division > 20) {
        console.log("Division is greater than 20");
    } else {
        console.log("Division is not greater than 20");
    }

    if (remainder > 20) {
        console.log("Remainder is greater than 20");
    } else {
        console.log("Remainder is not greater than 20");
    }
}
checkResults(a,b);