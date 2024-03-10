
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

if( x <= 9 && x >= 1){
 
  for(i=1; i<=9; i++){
  
  let result = x * i;
  console.log(x + ' x ' + i + " = " + result);
}
}
else {
 alert('Podana wartość nie mieści sie w przedziale 1-9');
}



/* rozwiązanie z pętlą while  */


const a = prompt('Podaj podstawę');
const n = prompt('Podaj wykładnik');
if( a <= 9 && a >= 1 && n >= 1 && n <= 4){
 let result = Math.pow(a, n);
i = 1;
   let number = a + ' * ';
while( i < n-1) {
 i++;
 number += a + ' * ';
}
console.log(number + a + ' = ' + result);
}
else {
  alert('Podana wartość nie mieści sie w dopuszczalnym przedziale');
}