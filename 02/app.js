
/* rozwiązanie z pętlą for */
const x = getNumber();

for(i=0;i<9;i++){
    const multiplying = x * (i+1);
    console.log(x+' * '+(i+1)+' = '+multiplying);
}

/* rozwiązanie z pętlą while  */

function getNumber() {
    let number = prompt('Podaj liczbę!');
    if (number>0 && number <10) {
        return number
    }
    else {
        return getNumber();
    }
}