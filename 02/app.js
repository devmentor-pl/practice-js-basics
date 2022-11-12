
/* rozwiązanie z pętlą for */
const x = parseInt(prompt('Please enter a number from 1 to 9'))
let resultMultiplication;

if( x < 1 && x >= 10) {
    alert('invalid number');
} else {
    multiplication()
}

function multiplication() {
    for(let i = 1; i < 10; i++) { 
       resultMultiplication = x * i
       console.log(i + ' x ' + x + ' = ' + i * x)
}};



/* rozwiązanie z pętlą while  */

const y = parseInt(prompt('Please enter a number from 1 to 9'));
const z = parseInt(prompt('Enter an index'));

const exponentiation = function (y, z) {
    let i = 0;
    let result = 1;
    let string = '';

    while(i < z) {
        i++;
        result *= y;
        if(string === '') {
            string = y;
        } else {
            string += '*' + y;
        }
    } console.log(string, ' = ' , result);
}

exponentiation();

