const a = '4.2'; //'4';    //1;   //'4';   //8;     //9;      //'4.2';
const b = 9;     //'2';    //2;   // 8;    //'4';   //'4.2';  //9;

console.log(a, b);

console.log(typeof (a), typeof (b));

/* Dodawanie */
const result1 = parseFloat(a) + (parseFloat(b));
console.log('Dodawanie: ' + result1);
console.log(typeof (result1));

/* Odejmowanie */
const result2 = a - b;
console.log('Odejmowanie: ' + result2);
console.log(typeof (result2));

/* Mnożenie */
const result3 = a * b;
console.log('Mnożenie: ' + result3);
console.log(typeof (result3));

/* Dzielenie */
const result4 = a / b;
console.log('Dzielenie: ' + result4);
console.log(typeof (result4));

/* Konkatenacja */
const result5 = a + b;
console.log('Konkatenacja: ' + result5);
console.log(typeof (result5));

/* Reszta z dzielenia */
const result6_1 = parseFloat(a) % 2;
const result6_2 = parseFloat(b) % 2;
console.log('Reszta z dzielenia: ' + result6_1, result6_2);
console.log(typeof (result6_1, result6_2));

/* Inkrementacja */
let result7_1_1 = parseFloat(a);
result7_1_1 = result7_1_1++;

let result7_1_2 = parseFloat(a);
result7_1_2 = ++result7_1_2;

let result7_2_1 = parseFloat(b);
result7_2_1 = result7_2_1++;

let result7_2_2 = parseFloat(b);
result7_2_2 = ++result7_2_2;

console.log('Inkrementacja: ' + result7_1_1, result7_1_2, result7_2_1, result7_2_2);

/* Dekrementacja */
let result8_1_1 = parseFloat(a);
result8_1_1 = result8_1_1--;

let result8_1_2 = parseFloat(a);
result8_1_2 = --result8_1_2;

let result8_2_1 = parseFloat(b);
result8_2_1 = result8_2_1--;

let result8_2_2 = parseFloat(b);
result8_2_2 = --result8_2_2;

console.log('Dekrementacja: ' + result8_1_1, result8_1_2, result8_2_1, result8_2_2);



/* Sprawdzenie wyników */

checkResult(result1);
checkResult(result2);
checkResult(result3);
checkResult(result4);
checkResult(result5);
checkResult(result6_1);
checkResult(result6_2);
checkResult(result7_1_1);
checkResult(result7_1_2);
checkResult(result7_2_1);
checkResult(result7_2_2);
checkResult(result8_1_1);
checkResult(result8_1_2);
checkResult(result8_2_1);
checkResult(result8_2_2);


function checkResult(result) {
    if (result > 20) {
        console.log(result + ' jest większe od 20');
    } else if (result < 20) {
        console.log(result + ' jest mniejsze od 20');
    } else {
        console.log(result + ' jest równe 20');
    }
}