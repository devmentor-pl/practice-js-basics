function createArray(min, max, count) {
    let randomArray = [];
    for (let i=0; i<count; i++){
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}


function getLargest(array) {
    array.sort((a, b) => b - a);
    console.log(array);
    let newArray = array.slice(0,10);
   return newArray;
}


function average(array){
    sum = 0;
    n = array.length;
    array.forEach(element => {
        sum += element;
    });

    return sum/n
}


const submitRange = document.getElementById('submitRange');

function buttonHandling(event){
    event.preventDefault();
    
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let count = parseInt(document.getElementById('count').value);

    const yourArray = createArray(min, max, count);
    document.getElementById('randNums').innerText = `Twoje cyfry: ${yourArray.join(', ')}`;
    const largest = getLargest(yourArray);
    document.getElementById('highest').innerText = `Największe: ${largest.join(', ')}`;
    const avg = average(largest);
    document.getElementById('average').innerText = `Średnia: ${avg}`;
}

submitRange.addEventListener('click', buttonHandling);