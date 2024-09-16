const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
};

const getSum = (a, b, c) => {
    const numbers = [parseInt(a),parseInt(b),parseInt(c)];
    const max1 = Math.max(...numbers);
    const remaning = [a,b,c].filter(number => number !== max1);
    const max2 = Math.max(...remaning);
    const result = max1 + max2;
    return result;
};

const isEven = (result) => {
    if (typeof result !== "number"){
        return null;
    }return result % 2 === 0;
}

const showInfo = (value,result) =>{
    switch(result){
        case null:
            console.log(`Podany argument [${value}] nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument [${value}] jest liczbą parzystą`);
            break;
        case false:
            console.log(`Podany argument [${value}] jest liczbą nieparzystą`)
            break;
        default:
            console.log(`Nieznana Liczba`);
    }
}

const sum = getSum(a,b,c);
const evenResult = isEven(sum);

showInfo(sum,evenResult);