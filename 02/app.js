
/* rozwiązanie z pętlą for */
// const x = 4;
const x = getNumber('Podaj liczbę z zakresu 0 - 9');

function getNumber(numberFromUser){
    const x = prompt(numberFromUser)
        if(checkNumber(x)){
            return x;
        }
}

function checkNumber(numb){
    if(numb >= 1 && numb <=9){
        return true;
    }
    else {
       alert('Podano zla liczbe! Podaj liczbe z zakresu 1 - 9');
       getNumber();
    }
}

for(i=1;i<=9;i++){
    let result=0;
    result = i * x;
    console.log(i + ' x ' + x + ' = ' + result);
 }


/* rozwiązanie z pętlą while  */