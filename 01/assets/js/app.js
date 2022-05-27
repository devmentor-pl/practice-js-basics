const x = '4.2'
const y = 9

const value1 = x + y
const value2 = x - y
const value3 = x * y
const value4 = x / y
const value5 = x % y

const numbers = [value1, value2, value3, value4, value5];

numbers.forEach(function(item, index) {
 if (item > 20) {
   console.log("Bigger than 20 is index nr " + index + " of array and it's value is " + item)
 }
 else {
 console.log("Less than 20 is index nr " + index + " of array and it's value is " + item) }
   });




