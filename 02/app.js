
/* rozwiązanie z pętlą for */

// const x = parseInt(prompt('podaj liczbę z zakresu od 1 do 9'));
// let result;


// if (x >= 10 || x < 1) {
//         alert('nie podałeś liczby z zakresu od 1 do 9');
// } else {
//         multiplicationTable()
// }

// function multiplicationTable () {
//         for(let i = 1; i < 10; i++) { 
//         result = x * i
//         console.log(`${x} x ${i} = ${result}`)
// }};




/* rozwiązanie z pętlą while  */

const a = parseInt(prompt('Podaj liczbę z przedziału od 1 do 9'))
const n = parseInt(prompt('podaj wykładnik'));

(a >= 10 || a < 1) ? alert('podałeś złą liczbę w podstawie') : console.log(multiplicationTable2());

function multiplicationTable2 () {
        let count = 0;
        let result2 = 1;

        while(count < n) {
                result2 *= a
                count++ 
        }
        return result2
}








