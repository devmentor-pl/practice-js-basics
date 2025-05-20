function createArray(min, max) {
  const result = [];
  for (let i = 0; i < 20; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // Math.floor - zaokrągla w dół, tworzy liczby całkowite
    result.push(randomNum);
  }
  return result;
}

const arr = createArray(1, 100);
console.log(arr); 

const numbers = arr;


// sort()

arr.sort(function(a, b){
    return a - b;
}

);

console.log(`Tablica sort(): ${arr}`)


// 

const sortTen = arr.slice(0, 10); 
console.log(`Tablica z 10 elementami: ${sortTen}`)


// Sposób 1 for

const arr2 = sortTen; 

console.log(`To jest tablica z 10 wartościami: ${arr2}`);

let sum1 = 0; sum2 = 0;

for(var i=0; i<arr2.length; i++){ // Tutaj musiałem zmienić na i<10 bo przy i<20 wynikiem było NaN, później jednak dodałem żeby sprawdzał ilość elementów 
    sum1 += arr2[i]; 
}

// Sposób 2 forEach()


arr2.forEach(function(element) {
    sum2 += element; 
});

console.log(`Suma for: ${sum1}` ,`Suma forEach: ${sum2}`);

const sumart = sum1 / arr2.length;

console.log(`Średnia artmetczna: ${sumart}`);