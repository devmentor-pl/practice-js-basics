// /* rozwiązanie z pętlą for */
// const x = prompt("Podaj liczbę!");

// if (x > 9) {
// 	console.log("Za duża liczba");
// } else {
// 	for (let i = 1; i <= 9; i++) {
// 		let result = x * i;
// 		console.log(`${x} * ${i} = ${result}`);
// 	}
// }

/* rozwiązanie z pętlą while  */

let a = 3;
let n = 4;

while (a <= 9 && a >= 1 && n <= 9 && n >= 1) {
	let result = a ** n;
	if (result > 0) {
		console.log(info);
		break;
	}
}
