
/* rozwiązanie z pętlą for */

const x = prompt("Tabliczka mnożenia dla (podaj wartość od 1 do 9): ");
if(x>=1 && x<=9){
    for(var y=1; y<=9; y++){
        console.log(`${x} x ${y} = ${y*x}`);
    }
}
else{
    console.log(`Wprowadź wartości od 1 do 9 dla tabliczki mnożenia`)
}
console.log(`\n`);

// var y=1;
// while(y<=9){
//     console.log(`${y} x ${x} = ${y*x}`);
//     y++;}

/* rozwiązanie z pętlą while  */
var a = prompt("Podaj podstawę potęgowania (wartość dodatnią): "),
    n = prompt("Podaj wykładnik potęgowania (wartość dodatnią): "),
    exponentiation = a**n;
var na="",
    y=1;
n=parseInt(n);
a=parseInt(a);

if(a > 0 && n > 0){
    while(y<=n){
        na = na +`${a} `;
        if(y<n){
            na = na + `* `;
        }
        if(a==1 && n==1){
            na = "1 * 1";
        }
        n--;
    }
    console.log(na + " = " + exponentiation);
}
// else if(a==0 && n==0){
//     na = "0 * 0";
//     console.log(na + " = " + exponentiation);
// }
else if(a==0 && n>0){
    while(y<=n){
        na = na +`${a} `;
        if(y<n){
            na = na + `* `;
        }
        y++
    }
    console.log(na + " = " + exponentiation);
}
else if(a>=0 && n==0){
    na = a + "^0";
    console.log(na + " = " + exponentiation);
}
else
{
    console.log("Wprowadź dodatnie wartości dla potęgowania");
}


