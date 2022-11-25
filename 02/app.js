/* rozwiązanie z pętlą for */
const x = Number(prompt('Podaj liczbę!'));

if (x >= 1 && x <= 9) {
	for (let i = 1; i <= 9; i++) {
		const result = x * i;
		console.log(`${x} x ${i} = ${result}`);
	}
} else {
	console.log('Podaj liczbę z przedziału od 1 do 9');
}

/* rozwiązanie z pętlą while  */
const a = Number(prompt('Podaj podstawę potęgi!'));
const n = Number(prompt('Podaj potęgę!'));

if (a > 0 && n >= 0) {
	let counter = 0;
	let result = 1;
	let info = '';

	while (counter < n) {
		result *= a;
		if (counter > 0) {
			info += ' * ';
		}
		info += a;
		counter++;
	}

	console.log(`${info} = ${result}`);
} else {
	console.error('Podałeś błędne dane!');
}
