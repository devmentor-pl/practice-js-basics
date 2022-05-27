let parsedNumbers = [];
let numbersSum = 0;


const a = 5;
const b = 40;
const c = 25;


const getSum = function(a,b,c) {
  
  parsedNumbers.push(a,b,c)
  
  parsedNumbers.sort(function(a,b) {
    return b - a;
  });
  
  const highestNumbers = parsedNumbers.slice(0,2)
  
  highestNumbers.forEach(function(item) {
    numbersSum += item
    });
  
  return numbersSum
  
}

const sum = getSum(a,b,c)
console.log(sum)
  

const isEven = function(num) {
  if(typeof num != "number") {
    return null
  }
  else if (typeof num == 'number') {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  }
}

const checkEven = isEven(sum)
console.log(checkEven)



function showInfo(a,even) {
  switch(even) {
    case false:
      console.log(numbersSum + ' jest nieparzysta ')
      break;
    case true:
      console.log(numbersSum + ' jest parzysta ')
      break;
    default:
      console.log(numbersSum + ' nie jest liczba ')
      break;  
  }
}

const checkBoolean = showInfo(sum, checkEven)






  


  


























    
    
 






