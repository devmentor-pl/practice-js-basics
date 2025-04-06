const x = prompt("Please enter a numer between 1 and 9");
/* rozwiązanie z pętlą for */
console.log("-------------for loop-------------");
for (let i = 1; i <= 9; i++) {
  console.log(`${x} x ${i} = ${x * i}`);
}

/* rozwiązanie z pętlą while  */
console.log("-------------while loop-------------");
let i = 0;

let a;
let n;
while (true) {
  a = Number(prompt("Please enter the base (a number) of power"));
  if (typeof a === "number" && !isNaN(a)) {
    break;
  }
}
while (true) {
  n = Number(prompt("Please enter the factor (a number) of power"));
  if (typeof n === "number" && !isNaN(n)) {
    break;
  }
}

let str = String(a);
let result = a;
while (i < n) {
  i++;
  str += ` * ${a}`;
  result *= a;
}
console.log(`${str} = ${result}`);
