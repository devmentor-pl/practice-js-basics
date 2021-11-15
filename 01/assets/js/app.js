const a = '4.2';
const b = 9;

console.log(a, b);

// Sprawdzam typ zmiennych a i b
console.log('-----Sprawdzam typ zmiennych a i b-----')

console.log('Zmienna a to typ: ' + typeof a);
console.log('Zmienna b to typ: ' + typeof b);

// Działania dla kazdego operatora arytmetycznego, kazdy wynik do osobnej zmiennej
console.log('-----Działania arytmetyczne-----')

const result1 = a + b;
console.log('Wynik dodawania: ' + result1);
if(result1 !== 13){
    const z = parseInt(a);
    const newResult1 = z + b;
    console.log('Poprawny wynik dodawania to : ' + newResult1);
}

const result2 = a - b; //nastąpiła niejawna konwersja zmiennej a na typ number
console.log('Wynik odejmowania: ' + result2);

const result3 = a * b; //nastąpiła niejawna konwersja zmiennej a na typ number
console.log('Wynik mnozenia: ' + result3);

const result4 = a / b; //nastąpiła niejawna konwersja zmiennej a na typ number
console.log('Wynik dzielenia: ' + result4);

const result5 = a % 2; //nastąpiła niejawna konwersja zmiennej a na typ number
console.log('Wynik reszta z dzielenia liczba a: ' + result5);

const result6 = b % 2;
console.log('Wynik reszta z dzielenia liczba b: ' + result6);

let result7 = a;
result7++;
console.log('Inkrementacja liczba a: ' + result7);

let result8 = a;
result8--;
console.log('Dekrementacja liczba a: ' + result8);

let result9 = b;
result9++;
console.log('Inkrementacja liczba b: ' + result9);

let result10 = b;
result10--;
console.log('Dekrementacja liczba b: ' + result10);

// Sprawdzenie, który z wyników jest wiekszy od 20, a który mniejszy 


