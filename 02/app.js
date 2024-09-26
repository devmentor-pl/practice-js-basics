
/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!');
// const checkMultiplying = (num) => {
//   for (let y = 1; y <= 9; y++) {
//     console.log(`${x} x ${y} = ${x * y}`);
//   }
// };

// checkMultiplying(x);




/* rozwiązanie z pętlą while  */
let z = 1

const pow = (base, power) => {
  let result = '';
  while (z <= power) {
    result = result.concat(`${base} * `)
    z++;
    if (z === power) {
      return result = result.concat(`${base} = ${Math.pow(base, power)}`)
    }
  }
}

const calc = () => {
  const base = parseInt(prompt('Podaj podstawę!'));

  if (!isNaN(base) && base !== 0) {
    const power = parseInt(prompt('Podaj wykładnik!'));

    if (!isNaN(power) && power !== 0) {
      alert(pow(base, power));
    } else {
      alert('wprowadzone dane muszą być liczbą różną od 0!');
      calc();
    }
  } else {
    alert('wprowadzone dane muszą być liczbą różną od 0!');
    calc();
  }
}

calc();