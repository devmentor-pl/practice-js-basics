const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a,b,c) {
    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);
    let firstMax = 0;
    let secondMax = 0;
    if(a>=b || a>=c){
        firstMax = a;
        console.log('Przypisuje pierwszy max do ' + a);
    }
    if(b>=a || b>=c) {
        if(firstMax == 0){
            firstMax = b;
            console.log('Przypisuje pierwszy max do ' + b);
        } else {
            secondMax = b;
            console.log('Przypisuje drugi max do ' + b);
        }
    }
    if(c>=a || c>=b){
        secondMax = c;
        console.log('Przypisuje drugi max do ' +c);
    }
    console.log(`${firstMax} ${secondMax} Suma dwóch największych liczb to: ${firstMax + secondMax}`);
    // W pierwszym podpunkcie jest napisane, że ma być zwrócona wartość 2 największych liczb, a później jest mowa o użyciu funkcji w celu zwrócenia sumy z trzech, zakomentowałem zwrócenie dwóch które wyświetlam powyżej w konsoli, a funkcja będzie zwracać sume trzech liczb jak w linii 41
    // return firstMax + secondMax;
    console.log('Suma wszystkich zmiennych to:');
    return a+b+c;
}

const isEven = function(a) {
    if(typeof a != 'number' ) return null;
    if(a % 2 == 0) return true;
    else return false; 
} 

function showInfo(a,b) {
    switch(b) {
        case null:
            console.log(`Podany argument ${a} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${a} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${a} jest nieparzysty`);
            break;       
    }
}

const sum = getSum(a,b,c);
console.log(sum);
const even = isEven(sum);
console.log(even);

showInfo(sum, even);

