let x = prompt('podaj liczbę w przedziale 1-9');
let xInt= parseInt(x);

if(xInt>0 && xInt<10) 
{
    //let i = 1; =>potrzebne przy wykorzystaniu pętli while
    for(let i= 1; i<10; i++) //while(i < 10)
    {
    result= i* xInt; //identyczna część dla pętli while i for
    fullResult= i + ' * ' + xInt + ' = ' + result; // jw 
    //i++; => potrzebne przy wykorzystaniu pętli while
    console.log(fullResult);
    }     
} 
else 
{
    badResult="tylko liczby w przedziale 1-9"
    alert(badResult);
}
/* rozwiązanie z pętlą while  */
console.log('pętla while- potęgi');
//pętla while- potęgi

let a = prompt('liczby');
let aInt = parseInt(a);
let n = prompt('liczby2');
let nInt = parseInt(n);
if(aInt>0 && aInt<10 && nInt > 0 && nInt < 10)
{
    let j = 0;
    let result = 1;
    let str = '';
while(j < nInt)
{
    result = result * aInt;
    
    if(j === 0) 
    {
        str = aInt;
    }
    else
    {
        str = str + ' * ' + aInt;
    }
    j++;
}
console.log(result);
console.log(str + ' = ' + result)
}
else
{
    console.log('złe dane');
}

