
function createArray(min,max){
const arr=[]
for(let i=0;i<20;i++){
arr.push(Math.round((Math.random(min)*max)))
}
return arr
}
console.log(createArray(1,100));

function largest(arr){
    const arr1=  arr.sort(function(a,b){
        return b-a
    })
    const arr2= arr1.slice(10)
  return arr2
}

console.log(largest(createArray(1,100)))

function getAvg(array ){
const arr=array.reduce((prev,curr)=>prev+curr)
return  arr/array.length

}

console.log(getAvg(createArray(1,100)))