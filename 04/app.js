const getRandomArray = function(min, max){
    if(min < max && typeof min === "number" && typeof max === "number"){
        let randomArray = [];

        for(let i = 0; randomArray.length < 20; i++){
            let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            randomArray.push(randomNumber);
        };
        return randomArray;
        
    } else if(min > max){
        alert("Pierwsza wartość wejściowa musi być większa od drugiej");
    } else if (min === max){
        alert("Dane muszą mieć różną wartość");
    } else {
        alert("Nieprawidłowe dane wejściowe");
    }
};

const getTenBiggest = function(arr){ 
    const sorted = getSortedArray(arr);
    const tenBigest = sorted.slice(0, 10);
    return tenBigest;
};

const randomArray = getRandomArray(10, 200);
console.log(randomArray);
const tenBiggest = getTenBiggest(randomArray);
console.log(tenBiggest);
const average = getAverage(tenBiggest);
console.log(average);



                                                                            //notE if w jednej linii bez wąsy {}
function getSortedArray(arr){
    if(!Array.isArray(arr)) return alert("To nie jest tablica");
    const sorted = arr.sort(function(x, y){
        return y - x;
    });
    return sorted;
}

function getAverage(arr){
    let sum = arr.reduce(function(prev, curr){
        return prev + curr;
    });

    return sum / arr.length;
}
//?dev tu mi już też coś zaczęło szwankować ;/ Ale nie wiem czemu 