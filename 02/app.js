
/* rozwiązanie z pętlą for */
const x = parseInt(prompt("podaj liczbę"));

if(x>=1 && x<10){
    for(let i=1;i<10;i++){
     let result = x * i;
    console.log( x,  "x",  i,  "=", result);
}
}
else{
    console.log('podaj liczbę z przedziału 1-9')
}




/* rozwiązanie z pętlą while  */
const a = parseInt(prompt("podaj podstawę"))
const n = parseInt(prompt("podaj wykładnik"))
let j= 1;
while( j <= n ) {
    j++
let result2= a ** n;
let power= "a *" * j;
console.log( power, '=', result2);

}