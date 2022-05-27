const a = prompt('Podaj liczbę');
const n = 9;
let sum = 0;

for (let i=1; i <= n; i++) {
  sum = a * i;
  console.log('Tabliczka mnozenia:' + sum)
}


let expo = 1;
let b = prompt('Wpisz wartość')
let c = 3

let i = 1
 while(i <= b) {
   i++;
   expo = expo * c
   
 }

console.log('Wynik potegowania to' + expo)