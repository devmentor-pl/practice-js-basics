const a = '4.2';
const b = 67;
let number = 20;

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
const newResult1 = result1 > number ? '--> wynik1 wiekszy do 20' : '--> wynik1 mniejszy od 20';
console.log(newResult1);

const result2 = a - b; //nastąpiła niejawna konwersja zmiennej a na typ number
console.log('Wynik odejmowania: ' + result2);
const newResult2 = result2 > number ? '--> wynik2 wiekszy do 20' : '--> wynik2 mniejszy od 20';
console.log(newResult2);

const result3 = a * b; //nastąpiła niejawna konwersja zmiennej a na typ number
console.log('Wynik mnozenia: ' + result3);
const newResult3 = result3 > number ? '--> wynik3 wiekszy do 20' : '--> wynik3 miejszy od 20';
console.log(newResult3);

const result4 = a / b; //nastąpiła niejawna konwersja zmiennej a na typ number
console.log('Wynik dzielenia: ' + result4);
const newResult4 = result4 > number ? '--> wynik4 wiekszy do 20' : '--> wynik4 mniejszy od 20';
console.log(newResult4);

const result5 = a % 2; //nastąpiła niejawna konwersja zmiennej a na typ number
console.log('Wynik reszta z dzielenia liczba a: ' + result5);
const newResult5 = result5 > number ? '--> wynik5 wiekszy do 20' : '--> wynik5 mniejszy od 20';
console.log(newResult5);

const result6 = b % 2;
console.log('Wynik reszta z dzielenia liczba b: ' + result6);
const newResult6 = result6 > number ? '--> wynik6 wiekszy do 20' : '--> wynik6 miejszy od 20';
console.log(newResult6);

let result7 = a;
result7++;
console.log('Inkrementacja liczba a: ' + result7);
const newResult7 = result7 > number ? '--> wynik7 wiekszy do 20' : '--> wynik7 mniejszy od 20';
console.log(newResult7);

let result8 = a;
result8--;
console.log('Dekrementacja liczba a: ' + result8);
const newResult8 = result8 > number ? '--> wynik8 wiekszy do 20' : '--> wynik8 mniejszy od 20';
console.log(newResult8);

let result9 = b;
result9++;
console.log('Inkrementacja liczba b: ' + result9);
const newResult9 = result9 > number ? '--> wynik9 wiekszy do 20' : '--> wynik9 mniejszy od 20';
console.log(newResult9);

let result10 = b;
result10--;
console.log('Dekrementacja liczba b: ' + result10);
const newResult10 = result10 > number ? '--> wynik10 wiekszy do 20' : '--> wynik10 mniejszy od 20';
console.log(newResult10);

// Instrukcja warunkowa - sprawdzenie, który z wyników jest wiekszy od 20, a który mniejszy 





//swith spr tylko 1 warunek i jak true konczy działania
// let number = 20;  
// switch (true) {
//     case (number < newResult1):
// 	console.log('zmienna newResult1 jest wieksza od 20');
//     break;

//     case (number < result2):
// 	console.log('zmienna result2 jest wieksza od 20');
//     break;

//     case (number < result3):
// 	console.log('zmienna result3 jest wieksza od 20');
//     break;
	
//     case (number < result4):
// 	console.log('zmienna result4 jest wieksza od 20');
//     break;

//     case (number < result5):
// 	console.log('zmienna result5 jest wieksza od 20');
//     break;

//     case (number < result6):
// 	console.log('zmienna result6 jest wieksza od 20');
//     break;

//     case (number < result7):
// 	console.log('zmienna result7 jest wieksza od 20');
//     break;

//     case (number < result8):
// 	console.log('zmienna result8 jest wieksza od 20');
//     break;

//     case (number < result9):
// 	console.log('zmienna result9 jest wieksza od 20');
//     break;

//     case (number < result10):
// 	console.log('zmienna result10 jest wieksza od 20');
//     break;

//     default:
// 	console.log('default');
// }