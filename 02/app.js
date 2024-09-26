
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę od 1 do 9!');

if(x >=1 && x <= 9) {
    for(let i=1; i<=9; i++) {
        document.write(i + ' x ' + x + ' = ' + (i*x) + '<br />');
    }
} else {
    alert('Podałeś niepoprawną liczbę. Próbuj jeszcze raz!');
}

document.write('<hr />')

/* rozwiązanie z pętlą while  */

const a = prompt('Podaj liczbę a od 1 do 20!');
const n = prompt('Podaj liczbę n od 0 do 10!');

if(a >= 1 && a<= 20 && n >= 0 && n <= 10) {
    if(n == 0) {
        document.write('Dla n równe 0 wynik zawsze jest będzie 1.');
    } else {
        let i = 0;
        let result = 1;
        let text = a
        while(i<n) {            
            result = result * a;      
            if(i>0) {                
                text += ' * ' + a;
            }      
            i++;
        }        
        document.write(text + ' = ' + result)    
    }    
} else {
    alert('Podałeś błędne dane. Próbuj jeszcze raz!');
}