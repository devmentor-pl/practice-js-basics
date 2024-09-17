
const arr = createArray(1,200);
const largest = getLargest(arr);
const avg = getAverage(largest);

console.log(arr);
console.log(largest);
console.log(avg);

function createArray(min,max){
    
    const arr = [];
    let num;
    for (let i=0; i<20; i++){
        num =  Math.round(Math.random()*(max - min) + min);
        arr.push(num);
    }
    return arr;
}

function getLargest(arr){
	
    arr.sort(function(a,b){ return b-a;});
    const result = arr.slice(0,10);

    return result;
}

function getAverage(arr){
    
    function getSum(total, num){
        return total+=num;
    }
	
    const sum = arr.reduce(getSum,0);    
    if (arr.length>0) return sum / arr.length;

    return false;
};



