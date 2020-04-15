function array(min, max){
    const n = [];
    for( ;n.length<20;)
    {
        const num = Math.round((Math.random() * (max - min))+ min);
        if(!n.includes(num))
        {
         n.push(num);
        }
        
    }
    return n;
}

const newArray = array(10, 200);
console.log(newArray);

function sortArr(newArray){
function compare(a, b)
{
    return a-b;
}
 return newArray.sort(compare).slice(10, 20);
}
const sortArray = sortArr(newArray);

console.log(sortArray);

function getAverage(sortArray)
{
    const sum= sortArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue);

    const average = sum/sortArray.length;
    return average;
}

const averageAll = getAverage(sortArray);
console.log(averageAll);


