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
let n = 2;

while (a <= 9 && a >= 1 && n <= 9 && n >= 1) {
	let result = a ** n;
	let str = a;
	for (let i = 1; i < n; i++) {
		str = str + "*" + a;
	}
	str = str + "=" + result;
	if (result > 0) {
		console.log(str);
		break;
	}
}
