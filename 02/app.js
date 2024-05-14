
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');

if(x>=1 && x<= 9) {
    for(let i=1; i<=9; i++){
        console.log(`${i} x ${x} = ${i*x}`);
    } 
} else console.log('Podałeś złą liczbę :(')


/* rozwiązanie z pętlą while  */

const a = prompt('Podaj liczbę, którą chcesz podnieść do potęgi');
const n = prompt('Podaj do której potęgi chcesz podnieść liczbę');
let number =1;
let result = '';

if(a>=1 && a<=9 && n>=1 && n<=9){
    while(number<=n){
        result+= a;
        if(number<n)
        {
            result+= ' * ';
        }
        number++;   
    }
    console.log(result + ' = ' + a**n);
}else console.log('Podałano liczby spoza zakresu');



