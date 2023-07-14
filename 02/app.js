/* rozwiązanie z pętlą for */
// const x = prompt("Podaj liczbę");

// if (x <= 9 && x > 0) {
//   for (let i = 1; i < 10; i++) {
//     let result = x * i;
//     console.log(`${x} x ${i} = ${result}`);
//   }
// }
// else if (isNaN(x)) {
//     console.log("Możesz wpisywać tylko liczby, spróbuj jeszcze raz!")
// }
//  else {
//   console.log("Twoja liczba nie należy do przedziału, podaj liczby od 1 do 9");
// }



/* rozwiązanie z pętlą while  */


let a = prompt("Podaj podstawe");
let n = prompt("Podaj wykładnik");


let i = 0;
let string = "";

if (a > 0 && n > 0 && a < 10 && n < 10) {
    while (i < n) {
       if (i === 0) {
        string+= ` ${a}`;
       }
       else 
       {string += ` * ${a}`};
       i++;
    }
    string += ` = ${Math.pow(a,n)}`;
    console.log(string);
}
else if (isNaN(a)) {
    console.log("Możesz wpisywać tylko liczby, spróbuj jeszcze raz!")
}
else console.log("Twoja liczba nie należy do przedziału, podaj liczby od 1 do 9")

