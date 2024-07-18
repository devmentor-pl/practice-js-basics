
/* rozwiązanie z pętlą for */

const x = prompt('Podaj liczbę!');

for (let i = 1; i <= 9; i++) {
    const result = x * i;
    console.log(`${x} * ${i} = ${result}`);
}


/* rozwiązanie z pętlą while  */




// Funkcja do sprawdzenia, czy wprowadzona wartość jest liczbą
function isNumber(value) {
  return !isNaN(value) && value.trim() !== '';
}

// Funkcja do obliczania potęgi i wyświetlania wyniku
function calculatePower() {
  let base = prompt("Podaj podstawę (a):");
  let exponent = prompt("Podaj wykładnik (n):");

  // Sprawdzanie, czy wprowadzone wartości są liczbami
  if (!isNumber(base) || !isNumber(exponent)) {
    console.log("Proszę wprowadzić poprawne liczby.");
    return;
  }

  base = Number(base);
  exponent = Number(exponent);

  let result = 1;
  let expression = '';

  // Pętla while do obliczania potęgi
  let count = 0;
  while (count < exponent) {
    result *= base;
    expression += (count === 0 ? base : ' * ' + base);
    count++;
  }

  // Wyświetlanie wyniku
  console.log(`${expression} = ${result}`);
}

// Wywołanie funkcji
calculatePower();