
/* rozwiązanie z pętlą for */


// const x = prompt('Podaj liczbę!');
// const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// if (x > 0 && x <= 9) {
//     for (let i=0; i < arrOfNumbers.length; i++) {
//         let result = arrOfNumbers[i] * x;
//         let mathOperation = `${x} x ${arrOfNumbers[i]}`
        
//         console.log(mathOperation, " = ", result);
//     }
// } else {
//     alert('Musisz wpisać liczbę z zakresu od 1 do 9!')
// }


/* rozwiązanie z pętlą while  */


const a = 3; //podstawa
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i=0;

while (i < n.length) {
    const result2 = Math.pow(a,(n[i]))
    // console.log(result2);
    const mathOperation2 = `${a}^${n[i]} = ${result2}`;
    console.log(mathOperation2);
    i++
}