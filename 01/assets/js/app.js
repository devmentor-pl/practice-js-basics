const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof a);
console.log(typeof b);

console.log('PRZERWA');

const changedA = parseFloat(a);  //podchwytliwe męczyłem się z parseInt :D
console.log(changedA);

console.log('PRZERWA');

const addition = changedA + b;    
const subtraction = changedA - b;
const multiplication = changedA * b;
const division = changedA / b;
const modulo = changedA % b;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulo);

// Nie do końca zrozumiałem to polecenie, mam nadzieję że jest w porządku. Jak coś to poprawię :D

if (addition > 20) {
    console.log ('Dodawanie to wynik powyżej 20');
}

else if (subtraction > 20) {
    console.log ('Odejmowanie to wynik powyżej 20');
}

else if (multiplication > 20) {
    console.log ('Mnożenie to wynik powyżej 20');
}

else if (division > 20) {
    console.log ('Dzielenie to wynik powyżej 20');
}

else if (modulo > 20) {
    console.log ('Modulo to wynik powyżej 20');
}

else {
    console.log('Wyniki są poniżej 20');
}


