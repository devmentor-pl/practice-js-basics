function createArr(a,b) {
    let arr=[];
    function randomNumber(min, max) {
        return Math.round((Math.random() * (max - min)) + min);
    }
    for(let i=1; i<=20; i++){
        arr.push(randomNumber(a,b));
    }
    return arr;
}

const arr= createArr(5,20);

// ---------------------------------
function findHighestElements(arr){
    const sorting= arr.sort(function(a,b){
        return b-a;
    });
    return sorting.slice(0,10);
}

const largest= findHighestElements(arr);

// ---------------------------------
function calcAverage(array){
    let sum=0;;
    const length=array.length;
    array.forEach(function(x){
        sum+=x;
    });
    const average=sum/length;
    return average;
}
// ---------------------------------
const newArray= createArr(10,200);
const largestTen= findHighestElements(newArray);
const average= calcAverage(largestTen);
