/*let x = prompt('podaj liczbę w przedziale 1-9');
let xInt= parseInt(x);

if(xInt>0 && xInt<10) 
{
    for(let i= 1; i<10; i++)
    {
    result= i* xInt;
    fullResult= i + ' * ' + xInt + ' = ' + result;
    console.log(fullResult);
    }     
} 
else 
{
    badResult="tylko liczby w przedziale 1-9"
    alert(badResult);
}

console.log('pętla while- potęgi');*/
//pętla while- potęgi

let a = prompt('liczby');
let aInt = parseInt(a);
let n = prompt('liczby2');
let nInt = parseInt(n);

while(aInt>0 && aInt<10 && nInt > 0 && nInt < 10) 
{
    console.log(Math.pow(aInt, nInt));
    aInt++;
}


/* rozwiązanie z pętlą while  */