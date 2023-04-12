// /* rozwiązanie z pętlą for */
const x = Number(prompt('Podaj liczbę!'));

if (x >= 1 && x < 10) {
	for (let i = 1; i <= 9; i++) {
		res = i * x;
		console.log(`${i} x ${x} = ${res}`);
	}
} else {
	console.log('Podałeś błędne dane!');
}

/* rozwiązanie z pętlą while  */
const a = Number(prompt('Podaj liczbę z przedziału 1-100!'));
const n = Number(prompt('Podaj potęgę od 0-10!'));

if (a > 1 && a < 100 && n > 0 && n <= 10) {
	let i = 0;
	let result = 1;
	let info = '';
	while (i < n) {
		result *= a;
		if (i > 0) {
			info += ' * ';
		}
		info += a;
		i++;
	}
	info = info + ' = ' + result;
	console.log(result);
	console.log(info);
} else {
	console.log('Podałeś błędne dane!');
}
