const arr = createArray(10, 200); 
console.log(arr);

const largest = getLargest(arr);
console.log(largest);

const avg = getAvg(largest);
console.log(avg);

function createArray(minNumber, maxNumber) {
    const array = [];
    for(let i = 1; i <= 20; i++) {
      
      let number = Math.round(Math.random() * maxNumber);
      
      array.push(number);
      
    }
    return array;
    }


  

   function getLargest(unorderedArray){
    
    unorderedArray.sort(function(a,b){
      return b - a;
    });

    const orderedArray = unorderedArray.slice(0, 10);
return orderedArray;

   }

   function getAvg(arrayAvg) {
    initialValue = 0;
       let avgResult = arrayAvg.reduce(
        (acc, currentValue) => (acc + currentValue ) 
       )
      avgResult = avgResult / arrayAvg.length;
      
      
       return avgResult;
   }

   
    
    
    