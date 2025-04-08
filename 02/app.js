
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');
if(x >= 1 && x <= 9){
    for(let i = 1; i < 10; i++){
        const res = x * i;
        console.log(x + " * " + i + " = " +res); 
    }
}
else{
    console.log("Przekroczyłeś przedział! ");
}



/* rozwiązanie z pętlą while  */

const a = prompt("Wpisz podstawę: ");
let n = prompt("Wpisz wykładnik: ");
let res = 1;
let res1 = "";

while(n > 0){
    res *= a;
    if(n === 1){
        res1 += a + " = " + res;
    }
    else{
        res1 += a + " * ";
    }
    console.log(res)
    
    n--;
}
console.log(res1)