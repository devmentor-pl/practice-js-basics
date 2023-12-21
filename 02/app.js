/* rozwiązanie z pętlą for */

// let x;

// x = prompt(`Podaj liczbę z zakresu 0 do 10`);
// if (x >= 0 && x <= 10) {
//   for(let i=0; i<=10; i++) {
//     let res = x * i;
//     console.log(`${x} * ${i} = ${res}`)
//   }
// } else console.log('podałeś liczbę spoza zakresu');

/* rozwiązanie z pętlą while  */

let a;
let n;
let res2;
let string = "";

a = 3;
a = parseInt(a);
res2 = a;

n = prompt(`podaj liczbę z zakresu 0 do 5`);
n = Number(n);

if (n > 5) {
	alert("Podałeś za duża liczbę");
	
} else {
	string = `${a}`;
	while (n > 1) {
		string = string + ` * ${a} `;
		res2 = res2 * a;
		n = --n;
	}
	console.log(` ${string} = ${res2}`);
}







