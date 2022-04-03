function createArray(min,max){
    const randomArray = [];

    function createRandomNum(pMin, pMax){
        return Math.round((Math.random() * (pMax - pMin)) + pMin);
    }


    for (let i = 0; i < 20; i++) {
        randomArray.push(createRandomNum(min,max));
    }
    console.log("createdArray: ",randomArray);
    return randomArray;
}


function getLargest(array){
    const sortedAndSliced = array.sort((a,b)=>a-b).slice(10);
    console.log("sortedAndSliced: ",sortedAndSliced);
    return sortedAndSliced;
}


function getAvg(array){
    const average = (array.reduce((a,b) => a+b))/(array.length);
    console.log("average: ",average);
    return average;
}

const arr = createArray(1, 100);
const largest = getLargest(arr);
getAvg(largest);

const newArr = createArray(10, 200);
const newLargest = getLargest(newArr);
getAvg(newLargest);