
/* rozwiązanie z pętlą for */
const x = parseInt(prompt("podaj liczbę"));

if (x >= 1 && x < 10) {
    for (let i = 1; i < 10; i++) {
        let result = x * i;
        console.log(x, "x", i, "=", result);
    }
}
else {
    console.log('podaj liczbę z przedziału 1-9')
}




/* rozwiązanie z pętlą while  */
const a = parseInt(prompt("podaj podstawę"))
const n = parseInt(prompt("podaj wykładnik"))
let j = 1;
let str = '';
while (j <= n) {

    if (j > 1) {
        str = str + "*";
    }
    str = str + a;
    j++

}
let result2 = a ** n;
console.log(str, '=', result2);

