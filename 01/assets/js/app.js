const a = '4.2';
const b = 9;
const aNum = parseFloat(a);
const bNum = parseFloat(b);

console.log(a, b);

/*sprawdzenie jakiego typu są zmienne*/

console.log(typeof a);
console.log(typeof b);

/*działania dla każdego operatora arytmetycznego*/
/*dodawanie*/
const sum = a + b;
console.log(sum);

const sum2 = aNum + bNum;
console.log(sum2);

if (sum2 > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}

/*konkatenacja*/
const concatenation = a + b;
console.log(concatenation);

/*odejmowanie*/
 const substraction = a - b;
 console.log(substraction);

if (substraction > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}

 /*mnożenie*/
 const multiplication = a * b;
 console.log(multiplication);

if (multiplication > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}

 /*dzielenie*/
 const division = a / b;
 console.log(division);

if (division > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}

 /*reszta z dzielenia*/
 const modulo = b % a;
 console.log(modulo);

if (modulo > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}

 /*inkrementacja i dekrementacja - deklaruję nową zmienną, bo nie mogę zastosować inkrementacji i dekrementacji do zmiennej typu const*/
 let c = aNum;
 const res1 = c++;
 console.log(res1);

if (res1 > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}

 const res2 = ++c;
 console.log(res2);

if (res2 > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}

 const res3 = c--;
 console.log(res3);

if (res3 > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}

 const res4 = --c;
 console.log(res4);

 if (res4 > 20) {
    console.log('Wynik działania jest większy od 20');
}
else {
    console.log('Wynik działania jest mniejszy od 20');
}







