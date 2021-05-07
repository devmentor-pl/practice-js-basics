/* rozwiązanie z pętlą for */
// const x = prompt('Podaj liczbę!');
const x = 4;

for (let i = 1; i <= 9; i++) {
	console.log(`${i} x ${x} = ${i * x}`);
}

/* rozwiązanie z pętlą while  */

let a = 4,
	n = 10,
	res,
	i;

if (n >= 1) {
	res = a;
	i = 1;
	while (i < n) {
		res += ` * ${a}`;
		i++;
	}
	res += ` = ${a ** n}`;
} else {
	res = a ** n;
}

console.log(res);
