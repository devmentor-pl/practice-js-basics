
/* rozwiązanie z pętlą for */

const input = prompt('Enter the multiplication factor: ');
const x = Number(input);

if (isNaN(x)) {
    console.error(`Provided value (${input}) is not a number`);
} else if (!Number.isInteger(x)) {
    console.error(`Provided value (${x}) is not an integer`);
} else if (x < 1 || x > 9) {
    console.error(`Provided value (${x}) is not between 1 and 9`);
} else {
    for (let i = 1; i <= 9; i++) {
        console.log(`${x} * ${i} = ${x * i}`);
    }
}

/* rozwiązanie z pętlą while  */

const baseInput = prompt('Enter the base number for exponentiation (a): ');
const a = Number(baseInput);

const exponentInput = prompt('Enter the exponent (n): ');
const n = Number(exponentInput);

if (isNaN(a) || !Number.isInteger(a)) {
  console.error(`Base must be an integer. Provided value: ${baseInput}`);
} else if (isNaN(n) || !Number.isInteger(n) || n < 1) {
  console.error(`Exponent must be an integer greater than or equal to 1. Provided value: ${exponentInput}`);
} else {
  let i = 0;
  let result = 1;
  let chain = "";

  while (i < n) {
    result *= a;

    if (i === 0) {
      chain += a;
    } else {
      chain += " * " + a;
    }

    i++;
  }

  console.log(`${chain} = ${result}`);
}