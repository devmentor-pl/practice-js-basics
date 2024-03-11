
/* rozwiązanie z pętlą for */
const x = 4;
const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrOfResults = [];

for (let i=0; i < arrOfNumbers.length; i++) {
    let result = arrOfNumbers[i] * x;
    let mathOperation = `${x} x ${arrOfNumbers[i]}`
    
    console.log(mathOperation, " = ", result);
}



/* rozwiązanie z pętlą while  */