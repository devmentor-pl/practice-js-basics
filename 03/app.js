const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);







function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


// - Funkcja pierwsza o nazwie `getSum`:
//     - 3 parametry, których wartość w ciele funkcji mają zostać przekonwertowane na liczby całkowite
//     - z podanych 3 liczb mają być wybrane 2 największe
//     - wartości 2 największych liczb mają zostać zsumowane i zwrócone przez funkcję

let numbers = [];
let sum;

function compare(a, b) {
    return a - b;
}

function getSum() {

    // a = Math.round(a);
    // b = Math.round(b);
    // c = Math.round(c);

    numbers.push(a);
    numbers.push(b);
    numbers.push(c);
    numbers = numbers.sort(compare);
    sum = numbers[1] + numbers[2];
    console.log(numbers)
    console.log(sum)
    return sum;
}

getSum(a, b, c)

// - Funkcja druga o nazwie `isEven`:
//     - ma mieć formę wyrażenia funkcyjnego
//     - ma przyjmować przez parametr tylko liczbę
//         - jeśli parametrem jest inny typ wartości niż `number` to zwróć `null`
//         - jeśli jest to liczba to zwróć:
//             - `true` jeśli jest parzysta
//             - `false` jeśli jest nieparzysta

function isEven(number) {
    if (typeof number !== 'number') {
        return null;
    } else {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isEven(a))

// - Funkcja trzecia `showInfo`:
//     - ma przyjmowac 2 parametry
//         - pierwszy to dowolna wartość
//         - drugi to jedna z wartości: `null`, `true`, `false`
//     - wykorzystując strukturę `switch` wyświetl w konsoli informacje:
//         - jeśli drugi parametr to
//             - `null` => Podany argument [tutaj jej wartość] nie jest liczbą
//             - `true` => Podany argument [tutaj jej wartość] jest parzysty
//             - `false` => Podany argument [tutaj jej wartość] jest nieparzysty

let first = 'a';
let second = true;

function showInfo (first, second) {
	switch (second) {
		case null:
			console.log('Podany argument ' + first + ' nie jest liczbą');
			break;
		case true:
			console.log('Podany argument ' + first + ' jest parzysty');
			break;
		case false:
			console.log('Podany argument ' + first + 'jest nieparzysty');
			break;
		default:
			break;
	}
}

showInfo(first, second)

