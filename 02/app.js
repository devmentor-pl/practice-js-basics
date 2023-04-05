
/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!');
const multi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const userValue = userValueValidation(getValueFromUser());

// console.log(calculateResultForMultiplication(userValue, multi));



function calculateResultForMultiplication(number, multipliers) {
    for(let i = 0; i < multipliers[multipliers.length-1]; i++) {
        showResultOfMultiplication(number, multipliers[i], number*multipliers[i]); 
    }
}

function showResultOfMultiplication(num, multi, res) {
    console.log(`${num} x ${multi} = ${res}`);
}

function getValueFromUser() {
    const x = parseInt(prompt('Podaj liczbę!'));
    return x;
    
}

function userValueValidation(val) {
    let value = val;
    while(value < 1 || value > 9 || typeof value === "NaN") {
        value = getValueFromUser();
    }

    return value;
}


/* rozwiązanie z pętlą while  */

const a = 3;

const userValue = userValueValidation(getValueFromUser());
calculatePowers(userValue, multi);

function calculatePowers(number, exponents) {
    let i = 0;
    while(i < exponents[exponents.length-1]) {
        let numberPower = Math.pow(number, exponents[i]);
        showResultOfPowerness(number, exponents[i], numberPower);
        i++;
    }
}

function showResultOfPowerness(num, exp, res) {
    let result = `${num}`;
    for(exp-1; exp > 0; exp--) {
        result += ` * ${num}`;
    }
    result += ` = ${res}`;
    console.log(result);
}