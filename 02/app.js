// /* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę do przemnożenia!');

for (let i = 0; i < 10; i++) {
	console.log(`${x} x ${i} = ${x * i}`);
}

// /* rozwiązanie z pętlą while  */
const a = parseInt(prompt('Podaj liczbę którą chcesz spotęgować!'));
let n = parseInt(prompt('Podaj stopień potęgi!'));
let z = 1;
while (n > 0) {
	z *= a;
	n--;
}
console.log('wynik potęgi wynosi:', z);
