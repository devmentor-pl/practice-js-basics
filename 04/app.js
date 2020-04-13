const n = [];

while(n.length < 20)
{
    const num = Math.round(Math.random() * 200);
    if(n.includes(num) && num>9 && num<201) 
    {} 
    else if (num>9 && num<201)
    {
        n.push(num); 
    }
       
}
console.log(n);

n.sort(function(a, b)
{
    return a - b;
}) 
const newArray = n.slice(10, 20);

console.log(newArray);

const sum = newArray.reduce(
    (accumulator, currentValue)=> accumulator + currentValue);
console.log(sum);

const getAverage = sum/newArray.length;
console.log(getAverage);