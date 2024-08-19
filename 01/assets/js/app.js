const a = '4.2';
const b = 9;

console.log(a, b);

//Sprawdź, jakiego typu są to zmienne. Użyj `typeof`.
console.log(typeof a);
console.log(typeof b);

/* Wykonaj działania dla każdego operatora arytmetycznego, jaki znasz: 
- każdy wynik zapisz do osobnej zmiennej,
- sprawdź, czy wyniki są prawidłowe:
    - jeśli tak, nic nie rób,
    - jeśli nie, rozwiąż problem.*/

    let concatenation = a +b;
    console.log(concatenation)

    const aNumber = parseFloat(a);
    let sum = aNumber + b;
    console.log(sum)

    let substraction = aNumber - b
    console.log(substraction)

    let multiplication = aNumber * b
    console.log(multiplication)

    let division = aNumber / b;
    console.log(division)

    let modulo = b % aNumber;
    console.log(modulo)
 
//inkrementacji sie nie da bo b  jest const