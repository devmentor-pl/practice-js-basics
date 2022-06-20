const arr = createArray(10, 200)
const largest = sortLargest(arr)
const avg = average(largest)

console.log(arr, largest, avg)

//1 
function createArray(min, max){
    const arr = []
    
    for(let i=0; i<20; i++){
       const num = Math.round((Math.random() *(max-min)) + min)
       arr.push(num)
    } 
    return arr
    

}

console.log(createArray(1,100))


//2

function sortLargest(arr) {
    arr.sort(function (a, b) {
            return b - a
        });
        
    return arr.slice(0,10) 
  
}

  
console.log(sortLargest(createArray(1,20)))

// 3 

function average(arr) {

    if(arr.length === 0){
        return 0;
    }
    const sum = arr.reduce(function(acc, curr){
        return acc + curr
    }, 0) // drugi parametr 0, bo przy pierwszym dodawaniu zwróci błąd

    return sum / arr.length

}





