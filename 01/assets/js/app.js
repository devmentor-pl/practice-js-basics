const a = '4.2';
const aNum = parseFloat(a);
const b = 9;

console.log(
    aNum,
    typeof aNum,
);

const res1 = aNum + b;

const res2 = aNum - b;

const res3 = aNum * b;

const res4 = aNum / b;

const res5 = aNum % b;

const res6 = aNum ** b;

let res7 = 3; res7++; //zwiękona wartość o 1 

let res8 = 1; res8--; //zmienjszona wartość o 1

console.log(typeof a);

console.log(typeof aNum);

console.log(typeof b);

console.log(res1, res2, res3, res4, res5, res6, res7, res8,);

let resAll = [
    res1, res2, res3, res4, res5, res6, res7, res8,
]

console.log( res1 > 20); // Pojedynczo ... res2, res3... > 20 itd. 

let res20 = resAll.map(x => x > 20); // Sprawdziłem jak połączyć w tablice - można też po kolei console.log( res1 > 20);

console.log(res20);