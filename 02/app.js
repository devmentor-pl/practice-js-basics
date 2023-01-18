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
