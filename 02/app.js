
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

let a = prompt('Podaj podstawę: ');
let b = prompt('Podaj wykładnik: ');
let j = 1;
let sum = a;
while(j <= b) {
    console.log(sum);
    sum = sum*a;
    j++;
}



