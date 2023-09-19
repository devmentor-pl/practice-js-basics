
/* rozwiązanie z pętlą for */
const str = prompt('Podaj liczbę (1-9)!'); //  nie wiem czy nie lepiej poprostu: const x = parseInt(prompt('Podaj liczbę (1-9)!'));`
const x = parseInt(str); //ogólnie to bez jawnej konwersji też zadziała poprawnie dlatego sie zastanwiam czy wogóle potrzeba robić tu tą konwersje jawną
let res;

if ((x>0)&&(x<10)) {
    for (let y=1; y<10; y++){
        res=x*y;
        console.log(x+' x '+y+' = '+res); // można by też odrazu bez użycia zmiennej res "console.log(x+' x '+y+' = '+ x*y);"
    }
}
else{
    console.log('Wprowadzone dane nie są liczbą przedziału 1-9');
}

/* rozwiązanie z pętlą while  */

const str_a = prompt('Podaj podstawę potęgowania');
const str_n = prompt('Podaj wykładnik potęgowania');

const a = parseInt(str_a);  // dla tego przykładu zakładam że podstawa i wykładnik są liczbami całkowitymi a nie konicznie tak przecież musi być
const n = parseInt(str_n);  

if ((!isNaN(a))&&(!isNaN(n))){
    if (a!==0){
        if (n!==0){
            let result_txt = str_a;
            let result_int = a;
            let i = 1;
            while (i<n){
                result_txt+='*'+str_a;
                result_int*=a;
                i++;
            }
            console.log(result_txt+' = '+result_int);
        }
        else{
                console.log(a+' do potęgi 0 wynosi 1');
            }
    }
    else{
        console.log('0 do potęgi '+n+' wynosi 0');
    }
}
else{
    console.log('Niepoprawne dane wejśćiowe');
}