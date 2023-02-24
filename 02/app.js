
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

if( x <= 9 && x>0){
    for(let i=1; i<=9; i++){
        console.log(x + ' x ' + i + ' = ' + x*i);
     }
}else{
    console.log('Podaj liczbę od 1 do 9');
}

/* rozwiązanie z pętlą while  */

const a = 3;
const n = 4;
let counter = 1;
let result = 1;

while(counter<=n){
    result *=a;
    counter++;
}

console.log(a + ' x ' + a + ' x ' + a + ' x ' + a + ' = ' + result);
