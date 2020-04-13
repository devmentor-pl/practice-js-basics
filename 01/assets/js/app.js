const a = '4.2';
const b = 9;

console.log(typeof a, typeof b);


const konk = a + b;
console.log(typeof konk, konk);

const aFloat = parseFloat(a);
console.log(typeof aFloat);

const sum = aFloat + b;
const diff = b - aFloat;
const prod = aFloat * b;
const quot = aFloat / b;
const divisionRest = aFloat % b; 

console.log(sum, diff, prod, quot, divisionRest);

//na zmiennej const nie można przeprowadzić inkrementacji i dekrementacji, ponieważ zmiennej tej nie można zmienić w trakcie pisania kodu
// możliwe jest to na zmiennej let

const sumCheck = (sum < 20) ? true : false
const diffCheck = (diff < 20) ? true : false
const prodCheck = (prod < 20) ? true : false
const quotCheck = (quot < 20) ? true : false
const divisionRestCheck = (divisionRest < 20) ? true : false

console.log(sumCheck, diffCheck, prodCheck, quotCheck, divisionRestCheck);

// zaokrąglę a do 4 aby większość wyników działań była liczbami całkowitymi
//oraz dokonam zmiany zmiennej na let, aby można było przeprowadzić inkrementację oraz dekrementację

let aInt = parseInt(a);
let bInt = parseInt(b);
console.log(typeof aInt, aInt);

const sumInt = aInt + b;
const diffInt = aInt - b;
const prodInt = aInt * b;
const quotInt = b / aInt;
const divisionRestInt = b % aInt;
aInkResult = aInt++;
aDekResult = aInt--;
bInkResult = bInt++;
bDekResult = bInt--;

console.log(sumInt, diffInt, prodInt, quotInt, divisionRestInt, aInkResult, aDekResult, bInkResult, bDekResult);

const sumIntCheck= (sumInt < 20) ? true : false
const diffIntCheck = (diffInt < 20) ? true : false
const prodIntCheck= (prodInt < 20) ? true : false
const quotIntCheck = (quotInt < 20) ? true : false
const divisionRestIntCheck= (divisionRestInt < 20) ? true : false
aInkResultCheck = (aInkResult < 20) ? true : false
aDekResultCheck= (aDekResult < 20) ? true : false
bInkResultCheck = (bInkResult < 20) ? true : false
bDekResultCheck= (bDekResult < 20) ? true : false

console.log(sumIntCheck, diffIntCheck, prodIntCheck, quotIntCheck, divisionRestIntCheck, aInkResultCheck, 
            aDekResultCheck, bInkResultCheck, bDekResultCheck);
