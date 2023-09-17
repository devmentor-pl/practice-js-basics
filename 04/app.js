const arr = createArray(10,200);
const largest = getLargest(arr);
const avg = getAvg(largest);
console.log(arr);
console.log(largest);
console.log(avg);

// Utworzenie tablicy z 20 elementami z podanego zakresu:

function createArray(min,max){
    const arr=[];
    for (let i=0; arr.length<20; i++){
        const num = Math.round(Math.random() * (max - min) + min);
        if(!arr.includes(num)){
            arr.push(num);
        }
    }
    return arr;
}

// Posortowanie liczb z tablicy od wartości największej do najmniejszej; zwrócenie 10 największych liczb:

function getLargest (arr){
    arr.sort(function(a,b){
        return b-a;
    })
    return arr.slice(0,10);
}

// Obliczenie średniej arytmetycznej z liczb w przekazanej tablicy

function getAvg(arr){
    return arr.reduce(function(sum,value){
        return sum + value;
    },0)/arr.length;
}