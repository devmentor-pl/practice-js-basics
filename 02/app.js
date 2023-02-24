
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