/* rozwiązanie z pętlą for */
const x = prompt("Type number: ");

if (x && !isNaN(x)) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${x} x ${i} = ${Number(x) * i}`);
  }
} else {
  console.error("Invalid input");
}

/* rozwiązanie z pętlą while  */
let a;
let n;

while (!a || isNaN(a)) {
  a = Number(prompt("Podstawa: "));
}

while (!n || isNaN(n) || n <= 1) {
  n = Number(prompt("Wykladnik:"));
}

let counter = 0;
let text = "";

while (counter < n) {
  text += a;

  if (counter !== n - 1) text += " * ";
  else text = text + " = " + Math.pow(a, n);

  counter++;
}

console.log(text);
