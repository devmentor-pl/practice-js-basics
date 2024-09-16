/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbe!');

for (let i = 1; i <= 9; i++) {
    console.log(x + "*" + i + "=" + x * i);
}

/* rozwiązanie z pętlą while  */

let a = 3;
let n = 2;
let i = 1;
let result = 1;
let description = "";

while (i <= n) {
    result = result * a;
    description += a;
    if (1 > 0 && i < n) {
        description += '*';
    }

    i++;
}
description = description + " " + "=" + " " + result;

console.log(result);
console.log(description);