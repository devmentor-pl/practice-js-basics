/* rozwiązanie z pętlą for */
const x = parseInt(prompt("Podaj liczbę całkowitą od 1 do 9:"));

if (x >= 1 && x <= 9 && Number.isInteger(x) === true) {
	console.log("Mnożenie:");
	for (let i = 1; i < 10; i++) {
		console.log(`${i} x ${x} = ${i * x}`);
	}
} else {
	alert("Coś poszło nie tak!");
	console.log("Błędne dane");
}

/* rozwiązanie z pętlą while  */
const a = parseInt(prompt("Podaj podstawę potęgowania (liczba całkowita > 0):"));
const n = parseInt(prompt("Podaj wykładnik potęgi (liczba całkowita > 0):"));

if (a > 0 && n > 0 && Number.isInteger(a) === true && Number.isInteger(n) === true) {
	let index = 1;
	let result = 1;
	let stringResult = "";
	console.log("Potęgowanie:");
	while (index <= n) {
		result *= a;
		stringResult += a + " ";
		if (index < n) stringResult += "* ";
		if (index === n) stringResult += "= " + result;
		index++;
	}
	console.log(stringResult);
} else {
	alert("Coś poszło nie tak!");
	console.log("Błędne dane");
}
