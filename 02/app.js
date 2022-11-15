
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');
if(isNaN(Number(x))) {
    throw new Error('Podano błędną liczbę :/ ')
}
for(let i=0; i<=8; i++) {
    i++
    console.log(x, 'x', i, '=', x * i);
    i--;

};

// /* rozwiązanie z pętlą while  */


let a = prompt('Podaj podstawę:');
let n = prompt('Podaj wykładnik:');
if(isNaN(Number(a)) || (isNaN(Number(n)))) {
    throw new Error('Podano błędne liczby');
}
if(Number(n) === 0) {
    console.log('Liczba podniesiona do potęgi 0 wynosi 1') 
} else {
    let j = 1;
    let someNumber = 0;
    while (j < n) {
        j++;
        someNumber = someNumber * a;
    }
    console.log(Number(n));
}

// coś tu nie gra... 


//rozwiązanie z stack
// function exponentiate (base, power) {
//     let count = 0
//     let result = 1;
//     if (power === 0){
//       return 1
//     }
  
//     // while loop 
//     while (count < power){  
  
//       result *= base
//       count += 1
//     }
//     return result 
//   }
  
//   console.log(exponentiate(3, 3))

