/* rozwiązanie z pętlą for */
const x = Number(prompt("Podaj liczbę!"));
validateNumer(x);
const isNumberValid = x > 0 && x < 10;
if (!isNumberValid) throw new Error("given number not in range from 1 to 9");

for (let i = 1; i < 10; i++) {
  console.log(`${x} x ${i} = ${x * i}`);
}

/* rozwiązanie z pętlą while  */
// const a = Number(prompt("Podaj podstawę!"));
// const n = Number(prompt("Podaj wykładnik"));
// validateNumer(a);
// validateNumer(n);
// alert(`Wynik potęgowania ${a} i ${n} to ${Math.pow(3, 4)}`);

function validateNumer(number) {
  const isNumberType = typeof number === "number" && !isNaN(number);
  if (!isNumberType) throw new Error("parameter is not a number type");
}
