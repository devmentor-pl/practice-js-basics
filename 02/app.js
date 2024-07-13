/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

if (x >= 1 && x <=9) {
  for (let i = 1; i <= 9; i++) {
    console.log(x + " x " + i + " = " + x * i);
  }
} else {
    console.log('liczba nie mieści się w przedziale od 1 do 9')
}

/* rozwiązanie z pętlą while  */

let j = 1;
const a = prompt('Podaj podstawę potęgi');
const n = prompt('Podaj wykładnik potęgi');

if (typeof a === "number" && typeof n === "number") {
  if (a === 0 && n === 0) {
    console.log(
      "Takiego potęgowania nie zdefiniowano w standardowej arytmetyce"
    );
  } else {
    if (n === 0) {
      console.log("Każda liczba podniesiona do potęgi 0 daje wynik 1");
    } else {
      if (n === 1) {
        console.log(a + " = " + a);
      } else {
        var z=""
        
        while (j < n) {
          j++;
          z = z + " * " + a;
        }
        console.log(a + z + " = " + a ** n);
      }
    }
  }
}
