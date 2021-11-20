const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);



function getSum(number1, number2, number3){
    //-------------1 rozwiązanie na piechotę-------------
    const array = [number1,number2,number3];
    let newArray = array.map(numberParseInt); // lub sort() i wtedy wybieramy 2 największe
    // console.log(newArray);

    let max1=0;
    let max2=0;
    for(let i=0; i<newArray.length; i++){
        if(max1<newArray[i]){
            max1 = newArray[i];
        }
    }

    for(j=0;j<newArray.length;j++){
        if(newArray[j]> max2 && newArray[j]<max1){
            max2 = newArray[j]
        }
    }
    return result = max1 + max2;

    // -------------2 rozwiązanie metody z tablicą-------------
    // console.log(newArray);
    // const z = Math.min.apply(null, newArray);
    // console.log(z);
    // newArray.splice(newArray.indexOf(z),1);
    // console.log(newArray);
    // const result = newArray.reduce(function(prevValue,currentValue){
    //     return prevValue + currentValue;
    // })
    // return result;
}

const check = function isEven(numb){
    if(typeof numb !== 'number'){
    return null;
    }
    if(numb % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function showInfo(value1, value2){
    switch (value2){
        case null:
            console.log('Podany argument ' + value1 + ' nie jest liczbą');
            break;
        case true:
            console.log('Podany argument ' + value1 + ' jest parzysty');
            break;
        case false:
            console.log('Podany argument ' + value1 + ' nie jest parzysty');
            break;
        default:
             alert('Wystąpił błąd!');
             break;
    }
}

function randomNumber(min, max) {
    return (Math.random() * (max - min) + min);
}

function numberParseInt(element){
    return parseInt(element);
}

const sum = getSum(a,b,c);
// console.log(sum);
const even = check(sum);
// console.log(even);
showInfo(sum,even);