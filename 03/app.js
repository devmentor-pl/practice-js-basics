const min = 1;
const max = 100;

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

function getSum() {
    
    let num1 = parseInt(a); // Liczba całkowita
    let num2 = parseInt(b);
    let num3 = parseInt(c);

    const nums = [num1, num2, num3]; // tablica z 3 elementami 
    nums.sort((a, b) => b - a); // sortowanie od największej - omówione w tablicach

    const numMax1 = nums[0]; // 1 największa
    const numMax2 = nums[1]; // 2 największa 
    const sum = numMax1 + numMax2; // suma 2 największych 
     return { numMax1, numMax2, sum, sorted: nums }; // zwracamy, później przypisuje do const
        
}


const isEven = function(num) {
    if (typeof num !== 'number') {
        return null;
    }
    return num % 2 === 0; // sprawdzam czy wynik jest z resztą (podzielny przez 2 tj. liczba parzysta)
};


/*

const result = getSum(a, b, c);
const max1 = result.numMax1; // result - dostęp do właściwości obiektu 
const max2 = result.numMax2; 
const sum = result.sum;
const sorted = result.sorted;

const evenCheck = isEven(sum);

function showInfo(){
console.log('Wylosowane liczby:', a, b, c);
console.log('Liczby w kolejności od największej:', sorted.join(', '));
console.log('Pierwsza największa to:', max1);
console.log('Druga największa to:', max2);
console.log('Suma dwóch największych z listy 3:', sum);
console.log('Czy suma a+b jest parzysta?', isEven(sum));
}

showInfo();

*/

function showInfo(arg, check) {
    switch (check) {
        case null:
            console.log(`Podany argument ${arg} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${arg} jest parzysty`); // sprawdzamy czy jest parzysty
            break;
        case false:
            console.log(`Podany argument ${arg} jest nieparzysty`); // sprawdzamy czy jest nieparzysty
            break;
        default:
            console.log('Nieprawidłowa wartość drugiego parametru');
    }
}

// parametry - one powinn być na górze??? jak przenoszę to pojawia się błąd inEven(sum)

const result = getSum(a, b, c);
const max1 = result.numMax1;
const max2 = result.numMax2;
const sum = result.sum;
const sorted = result.sorted;
const evenCheck = isEven(sum);

console.log('Wylosowane liczby:', a, b, c);
console.log('Liczby w kolejności od największej:', sorted.join(', '));
console.log('Pierwsza największa to:', max1);
console.log('Druga największa to:', max2);
console.log('Suma dwóch największych z listy 3:', sum);

showInfo(sum, evenCheck);

