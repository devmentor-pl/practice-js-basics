/* rozwiązanie z pętlą for */
const x = prompt('podaj liczbę z przedziału 1-9 wariacie:');
let result = 0;
console.log(`mnozymy liczbę ${x} przez liczby 1-9:`);
if (x > 0 && x <= 9) {
	for (let i = 1; i <= 9; i++) {
		result = x * i;
		console.log(`${x} x ${i} = ${result}`);
	}
} else {
	console.log('liczba nie jest z przedziału 1-9!');
}

/* rozwiązanie z pętlą while  */

const a = prompt('podaj liczbę:');
const n = prompt('podaj n:');
let i = 0;
let pow = 1;
let powPrint = '';

while (i < n) {
	pow *= a;

	if (i > 0) {
		powPrint += ' * ';
	}
	powPrint += a;
	i++;
}
console.log(`podnosimy liczbę ${a} do potęgi ${n}:`);
console.log(`${powPrint} = ${pow}`);
