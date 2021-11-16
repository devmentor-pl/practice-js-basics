const a = '4.2';
const b = 19;
const number = 20;

console.log(a, b);

// Sprawdzam typ zmiennych a i b
console.log('-----Sprawdzam typ zmiennych a i b-----')

console.log('Zmienna a to typ: ' + typeof a);
console.log('Zmienna b to typ: ' + typeof b);

// Działania dla kazdego operatora arytmetycznego, kazdy wynik do osobnej zmiennej
console.log('-----Działania arytmetyczne-----')

// const result1 = a + b;
// console.log('Wynik dodawania: ' + result1);
const z = parseInt(a);
const result1 = z + b;
console.log('Poprawny wynik dodawania to : ' + result1);

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

const array = [result1, result2, result3, result4, result5, result6, result7, result8, result9,result10];
const newArray =[];

array.forEach(function(element){
    if(element>=number)
    newArray.push(element);
});

console.log('Wyniki wieksze lub rowne 20 to: ' + Object.values(newArray));