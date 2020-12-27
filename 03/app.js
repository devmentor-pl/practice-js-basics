const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);



function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}


//?dev?  Z czego wynika ta różnica w wyniki, tzn. co tak naprawdę kryje się pod +(zmienna)?
const pointNumber = ".01  dasd";
console.log(parseFloat(pointNumber));   // 0.01 
console.log(+pointNumber);             // NaN - bezpieczna konwencja +(pointNumber) bo pomija wartości zawierające znaki inne niż number

const nuberI= 2.332;

console.log(parseInt(nuberI));

const pElList = document.querySelectorAll('p')
console.log(pElList);
const pElList1 = [...pElList];
const pELforEach = pElList1.forEach(function(el, index,){
    const plElList3 = el+"->"+index;
    return plElList3;
});

console.log(pELforEach);
    