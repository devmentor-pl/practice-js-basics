/* rozwiązanie z pętlą for */
const x = prompt("Podaj liczbę");

if (x < 1 || x > 9) {
  alert("Błędna liczba");
} else {
  for (let i = 1; i < 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
}

/* rozwiązanie z pętlą while  */

const a = prompt("Podaj podstawę");
const n = prompt("Podaj wykładnik");

let str = "";

let i = 0;
while (i <= n) {
  str += `${a} * `;
  i++;
}

console.log(`${str}= ${a ** n}`);
