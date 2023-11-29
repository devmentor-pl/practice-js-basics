/*notatki: for (zainicjowanie_zmiennych; warunek_kończący_wykonywanie_pętli; 
zmiana_zmiennych) {  kod który zostanie wykonany pewną ilość razy} */

/* rozwiązanie z pętlą for */
const getNumber = function ()  
    let x = prompt('write number from 1 to 9')
    if (x === null || x.trim() === '') return
    else if (NaN(x)) {
        alert('its not a number!');

        return getNumber ()
    }
    else if (x < 1 || x > 9)
        alert('Number must be from 1 to 9')

        return getNumber()
    {
    return x    

} 

const number = getNumber()



/* rozwiązanie z pętlą while  */
/*notatki: while (wyrażenie_sprawdzające_zakończenie_pętli) {
 ...fragment kodu który będzie powtarzany...
}
*/

let a = Number(prompt('Number from 1 to 9'));
let n = Number(prompt('wykładnik z przedziału 1 do 9'));

if (a >= 1 && a < 10 && n >= 1 && n < 10) {

    let i = 0;
    let res = 1;
    let operation = '';

    while (i < n) {
        res *= a;
        if (i > 0) {
            operation += ' x ';
        }
        operation += a;
        i++;
    }

    operation += ' = ' + res;
    console.log(operation);

} else {
    alert('Error ! Think again ;-)');
}