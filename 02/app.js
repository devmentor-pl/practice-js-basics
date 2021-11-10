
/* rozwiązanie z pętlą for */
function multiplyCalculation () {

const x = prompt("podaj liczbe ktora chcesz pomnozyc");

if (x > 9) {
    alert('Musisz podac liczbe w przedziale 0-9');
  }
  else {
let i = 0;
for(let i=0; i<=9; i++) {
let multiplyResult = x * i;
console.log(`${x} * ${i} = ${multiplyResult}`);
}
}
}

multiplyCalculation()

/* rozwiązanie z pętlą while  */

/* function powerCalculation () {
const p = prompt ("podaj liczbe ktora chcesz podniesc do potegi");
const w = prompt ("podaj wykladnik");

if (isNaN(p) ||isNaN(w) ) {
    alert('Musisz podac liczbe');
  }
else {
    let l = 1;
    let str = ` `;
    while(l < w) {
        l++;
        str = str + `* ${p}`;
    }
console.log (`${p}${str} = ${Math.pow(p,w)}`);
}
}
 powerCalculation() */
