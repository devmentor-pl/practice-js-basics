
/* rozwiązanie z pętlą for */


const x = prompt('Podaj liczbę!');
let result = 1;
if(x >= 1 && x <= 9) {
    for(let i=1; i<=9; i++) {
        result = i * x;
        console.log(`${i} * ${x} = ${result}`);
    }
}
else {
    alert('Podana wartość nie mieści się w przedziale od 1 do 9');
}


/* rozwiązanie z pętlą while  */
const y = prompt('Podaj liczbę!')
let res = 1;
let j = 1;
if(y >= 1 && y <= 9) {
while(j<=9){
    res = j * y;
    console.log(`${j} * ${y} = ${res}`);
    j++;
    }
}
else {
    alert('Podana wartość nie mieści się w przedziale od 1 do 9');
}