
/* rozwiązanie z pętlą for */
multiplication();

function multiplication () {
  const x = prompt('Podaj liczbę!');
  if (!(1 <= x && x <= 9)) {
    alert("Liczba powinna być z przedziału od 1 do 9.");
    return multiplication();
  } else {
    for (let i = 1; i <= 9; i++) {
      console.log(x + " x " + i + " = " + x * i);
    }
  }
}

/* rozwiązanie z pętlą while  */