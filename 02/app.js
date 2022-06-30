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
let n = 0;

while (a <= 9 && a >= 1 && n <= 9 && n >= 0) {
	let result = a ** n;
	let str = a;
	for (let i = 1; i <= n; i++) {
		str = str + "*" + a;
	}
	str = str + "=" + result;
	if (n === 0) {
		str = `Potęgowanie przez 0 zawsze da wynik ${result}`;
	}
	if (result > 0) {
		console.log(str);
		break;
	}
}
