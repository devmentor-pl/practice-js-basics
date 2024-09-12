const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof (a));
console.log(typeof (b));

const sum = parseFloat(a) + b;
console.log(sum);

const multi = parseFloat(a) * b;
console.log(multi);

const division = parseFloat(a) / b;
console.log(division);

const modulo = parseFloat(a) % b;
console.log(modulo);


function max(param) {
    if (param > 20) {
        console.log('Wynik: ' + param + ' jest większy od 20!');

    }
    else {
        console.log('Wynik: ' + param + ' jest mniejszy od 20!');
    }
}

max(sum);
max(multi);
max(division);
max(modulo);