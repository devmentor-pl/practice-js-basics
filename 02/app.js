/* rozwiązanie z pętlą for  */

// const x = 4;

// for (let i = 1; i <= 9; i++) {
// console.log(x + " x " + i + " = " + x * i);
// }

const x = prompt("Podaj liczbę!");
const parsedX = parseInt(x);
console.log(parsedX);

if (parsedX >= 1 && parsedX <= 9) {
	console.log(parsedX + " is between 1 and 9");
} else {
	console.log(parsedX + " is less than 1 or more than 9");
}

/* rozwiązanie z pętlą while  */
// `3 * 3 * 3 * 3 = 81`

let result = 1;
const a = 3;
const n = 4;
let step = 1;
let pow = "";

while (step <= 4) {
	result = result * a;

	if (step === 1) {
		pow = a;
	} else {
		pow = pow + " * " + a;
	}

	step++;
}

console.log(pow + " = " + result);
