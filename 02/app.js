
/* rozwiązanie z pętlą for */
const x = 4;
const multi = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(calculateResultForMultiplication(x, multi));

function calculateResultForMultiplication(number, multipliers) {
    for(let i = 0; i < multipliers[multipliers.length-1]; i++) {
        showResultOfMultiplication(number, multipliers[i], number*multipliers[i]); 
    }
}

function showResultOfMultiplication(num, multi, res) {
    console.log(`${num} x ${multi} = ${res}`);
}


/* rozwiązanie z pętlą while  */