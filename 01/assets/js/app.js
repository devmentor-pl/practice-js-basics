const a = '4.2';
const b = 9;

console.log(a, b);
console.log(`${a} jest typu ${typeof a}`);
console.log(`${b} jest typu ${typeof b}`);

let sum = parseFloat(a) + b;
let difference = parseFloat(a) - b;
let product = parseFloat(a) * b;
let quotient = parseFloat(a) / b;
let modulo = parseFloat(a) % b;


console.log('Suma: ' + sum);
console.log('Różnica: ' + difference);
console.log('Iloczyn: ' + product);
console.log('Iloraz: ' + quotient);
console.log('Dzielenie modulo: ' + modulo);

let c = b;

console.log('Teraz czas na operatory a++, a--, ++a, --a, operujące na nowej zmiennej o wartości: ' + c);

let postIncrementation = c++;
console.log('Zmienna c została postinkrementowana: ' + c + ' a zmienna do której ją przypisaliśmy zyskała wartość przed inkrementacją: ' + postIncrementation);

let postDecrementation = c--;
console.log('Zmienna c została postdekrementowana ' + c + ' a zmienna do której ją przypisaliśmy zyskała wartość przed inkrementacją: ' + postDecrementation);

let preIncrementation = ++c;
console.log('Zmienna c została preinkrementowana ' + c + ' a zmienna do której ją przypisaliśmy zyskała wartość po inkrementacji: ' + preIncrementation);

let preDecrementation = --c;
console.log('Zmienna c została postdekrementowana ' + c + ' a zmienna do której ją przypisaliśmy zyskała wartość po dekrementacji: ' + preDecrementation);

const threshold = 20;
function greaterSmaller(number) {
    if (number > threshold) {
        console.log('Liczba ' + number + ' jest większa od ' + threshold);
    } else if (number < threshold) {
        console.log('Liczba ' + number + ' jest mniejsza od ' + threshold);
    }
}

greaterSmaller(sum);
greaterSmaller(difference);
greaterSmaller(product);
greaterSmaller(quotient);
greaterSmaller(modulo);