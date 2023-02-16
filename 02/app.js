/* rozwiązanie z pętlą for */
/*const x = prompt("Podaj liczbę!");
let result = 1;

if (x >= 1 && x <= 9) {
  for (let i = 1; i <= 9; i++) {
    result = x * i;

    console.log(x, "*", i, "=", result);
  }
} else alert("podaj liczbę z przedziału 1-9");
 */

/* rozwiązanie z pętlą while  */

const a = prompt("Podaj liczbę podstawy!");
const n = prompt("Podaj liczbę wykładnika!");
let number = 0;

//while (number <= n) {
//number++;

//if (a > 1 && a < 9 && n > 1 && n < 9) {
//let result = Math.pow(a, n);
//console.log(result);
//} else {
//console.log("wprowadziłeś złe dane wybierz liczby z przedziału 1-9");
//}
//}

// 2 ^ 3 = 2*2*2 = 8

if (a > 1 && a < 9 && n > 1 && n < 9) {
  let str = "";

  while (number < n) {
    number++;

    if (str === "") {
      str = a;
    } else str = str + " * " + a;
  }

  str = str + " = " + a ** n;
  console.log(str);
}
