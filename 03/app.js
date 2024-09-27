const min = 1;
const max = 100;


const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

const arr = [];



function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

// dodaję numery do tablicy
// sortuję od największych liczb

arr.push(a, b, c);
arr.sort(function(a, b){
    return b - a;
});

// funkcja getSum dodaje 2 największe liczby (z początku posortowanych)

function getSum(el){
    parseInt(el);
    let result = (arr[0] + arr[1]);
    return result;
}

const sum = getSum(a,b,c);

// funkcja isEven

function isEven(input){
    if(isNaN(input)){
        return null
    }else if(input%2===0){
         return true
    }else if(input%2==1){
        return false
    }
}

const even = isEven(sum);

// funkcja showInfo

function showInfo(param, param2){
    switch (param2){
        case null:
            console.log('Podany argument ' + param + ' nie jest liczbą.' );
            break;
        case true:
            console.log('Podany argument ' + param + ' jest parzysty.');
            break;
        case false:
            console.log('Podany argument ' + param + ' jest nieparzysty.');
            break;
    }
}


console.log(arr);
console.log(arr[0],arr[1]);


console.log(sum);
console.log(even);

showInfo(sum, even);

