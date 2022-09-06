const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a,b,c);




function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}




/*function getSum (num1,num2,num3) {
    const intNum1 = parseInt (num1);
    const intNum2 = parseInt (num2);
    const intNum3 = parseInt (num3);
    console.log (num1,num2,num3);
    console.log(intNum1,intNum2,intNum3);
    const arr=[intNum1,intNum2,intNum3];
    console.log(arr);
    arr.sort(function(a,b){
        return a-b;
    })
    console.log(arr);
    return arr[1]+arr[2];
}
const sum = getSum (a,b , c);
console.log(sum);*/




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
console.log(checkEven);

    




function showInfo(a,even) {
    switch(even) {
      case false:
        console.log(a + ' jest nieparzysta ')
        break;
      case true:
        console.log(a + ' jest parzysta ')
        break;
      default:
        console.log(a + ' nie jest liczba ')
        break;  
    }
  }
  
  const checkBoolean = showInfo(sum, checkEven);
  
  