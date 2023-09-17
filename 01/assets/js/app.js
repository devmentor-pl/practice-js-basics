const a = "4.2";
const b = 9;

console.log(a, b);

// Sprawdź, jakiego typu są to zmienne.

console.log(typeof a);
console.log(typeof b);

//Wykonaj działania dla każdego operatora arytmetycznego

console.log("konkatenacja");

const concat = a + b;
console.log(concat);

console.log("dodawanie");

let newNum = a;

newNum = parseFloat(newNum);

const sum = newNum + b;
console.log(sum);

if (sum > 20) {
  console.log("wynik jest większy od 20");
} else {
  console.log("wynik jest mniejszy od 20");
}

console.log("odejmowanie");

const substract = newNum - b;
console.log(substract);

if (substract > 20) {
  console.log("wynik jest większy od 20");
} else {
  console.log("wynik jest mniejszy od 20");
}

console.log("mnozenie");

const multiply = newNum * b;
console.log(multiply);

const multiplyFixed = multiply.toFixed(2);
console.log(multiplyFixed);

if (multiply > 20) {
  console.log("wynik jest większy od 20");
} else {
  console.log("wynik jest mniejszy od 20");
}

console.log("dzielenie");

const divide = newNum / b;
console.log(divide);
const divideFixed = divide.toFixed(2);
console.log(divideFixed);

if (divide > 20) {
  console.log("wynik jest większy od 20");
} else {
  console.log("wynik jest mniejszy od 20");
}

console.log("reszta z dzielenia");
const modulo1 = newNum % 2;
const modulo2 = b % 2;

console.log(modulo1);
console.log(modulo2);

if (modulo1 > 20) {
  console.log("wynik jest większy od 20");
} else {
  console.log("wynik jest mniejszy od 20");
}

console.log("inkrementacja");

const increment1 = newNum++;
console.log(increment1);

let increment2 = b;
increment2 = increment2++;
console.log(increment2);

console.log("decrementacja");

const decrement1 = --newNum;
console.log(decrement1);

let decrement2 = b;
increment2 = --increment2;
console.log(decrement2);
