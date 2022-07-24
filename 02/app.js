/* rozwiązanie z pętlą for */
const x = prompt("Podaj liczbę!");

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (x < 10) {
  for (let i = 0; i < num.length; i++) {
    res = x * num[i];
    console.log(res);
  }
} else {
  alert("Podana liczba jest większa niż 9!");
}
// /* rozwiązanie z pętlą while  */
const a = prompt("Podaj podstawę");
const b = prompt("Podaj wykładnik");
let counter = 0;
let res2 = 1;
let operation = "";

if (a < 10 && b < 10) {
  while (counter < b) {
    res2 = res2 * a;
    counter++;
    if (counter < b) {
      operation = operation + `${a} * `;
    } else {
      operation = operation + `${a} =`;
    }
  }
  console.log(operation, res2);
} else {
  alert("Podane liczby są większe od 9!");
}
