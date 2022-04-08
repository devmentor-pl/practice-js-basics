const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);










function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}



function getSum(param1, param2, param3) {
    const param1Int = parseInt(param1);
    const param2Int = parseInt(param2);
    const param3Int = parseInt(param3);


    const arr = [param1, param2, param3];
    let max1 = 0;
    let max2 = 0;
    let result = 0;


    arr.sort(function (a, b) {
        return b - a;
    })

    max1 = arr[0];
    max2 = arr[1];


    result = max1 + max2;
    return result;
}


const isEven = function (param) {
    if (typeof param !== 'number') {
        return null;
    }
    else if (param % 2 === 0) {
        return true;
    }
    else {
        return false;
    }


}



function showInfo(param1, param2) {
    console.log(param1, param2);
}




const sum = getSum(a, b, c);
const even = isEven(sum);

showInfo(sum, even);


