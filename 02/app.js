/* rozwiązanie z pętlą for */
const x = prompt("Type number: ");

if (x) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${x} x ${i} = ${Number(x) * i}`);
  }
}

/* rozwiązanie z pętlą while  */
let a;
let n;

let counter = 0;
let text = "";

while (!a) {
  a = Number(prompt("Podstawa: "));

  while (!n || n <= 1) {
    n = Number(prompt("Wykladnik:"));

    while (counter < n) {
      text += a;

      if (counter !== n - 1) text += " * ";
      else text = text + " = " + Math.pow(a, n);

      counter++;
    }
  }
}
console.log(text);
