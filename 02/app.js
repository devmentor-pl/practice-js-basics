/* rozwiązanie z pętlą for */
// const x = Number(prompt("Podaj liczbę od 1 do 9!"));

// if (x >= 1 && x <= 9 && x !== null) {
//   getResult(x);
// } else {
//   showError();
// }

// function getResult(num) {
//   for (let i = 1; i <= 9; i++) {
//     const res = num * i;
//     console.log(num + " x " + i + " = " + res);
//   }
// }

// function showError() {
//   console.error("Wprowadziłeś błędne dane! Podaj liczbę od 1 do 9!");
// }

/* rozwiązanie z pętlą while  */

const a = Number(prompt("Podaj a w zakresie od 1 do 100!"));
const n = Number(prompt("Podaj n w zakresie od 0 do 10!"));

(function mathPow(a, n) {
  if (a >= 1 && a <= 100 && n >= 0 && n <= 10) {
    if (n === 0) {
      console.log("Wynik potęgowania gdy n = 0 jest zawsze równe 1");
    } else {
      let iter = 0;
      let res = 1;
      let info = "";

      while (iter < n) {
        res = res * a;

        if (iter > 0) {
          info += " * ";
        }
        info += a;
        iter++;
      }

      info = info + " = " + res;
      console.log(res);
      console.log(info);
    }
  } else {
    console.error("Podałeś liczbę ze złego zakresu!");
  }
})(a, n)
