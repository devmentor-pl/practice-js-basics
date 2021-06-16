/* rozwiązanie z pętlą for */
/*const x = prompt("Podaj liczbe");

for (let i = 1; i <= 9; i++) {
  console.log(x * i);
}
*/
/* rozwiązanie z pętlą while  */

const a = parseInt(prompt("Podaj podstawe potegi"));
const n = parseInt(prompt("Podaj wykladnik potegi"));
let power = 1;

/*
let j = 0;
while (j < n) {
  power *= a;
  console.log(power);
  j++;
}*/

const getResult = function (a, n) {
  if (isNaN(a) || isNaN(n)) {
    console.log("Podane dane to nie liczby");
  } else {
    let j = 0;
    while (j < n) {
      power *= a;
      j++;
    }
    return power;
  }
};

console.log(getResult(a, n));
