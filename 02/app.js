
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę: ');

if(x >= 1 && x <= 9){
for (let i = 0; i <= 9; i++) {
    console.log(`${x}*${i} to ${x*i}`);
}
} else {
    alert('Błąd!');
}



/* rozwiązanie z pętlą while  */

let a = 3;
let x = 4;
let i = 1;
let sum = 3;
while(i <= x) {
    console.log(sum);
    sum = sum*a;
    i++;
}