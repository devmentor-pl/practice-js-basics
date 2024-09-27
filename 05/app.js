const Student=function(name,surname){
    this.name=name;
    this.surname=surname;
    this.grades={

    }
}


const michal=new Student("michal", "kolek")
console.log(michal);

Student.prototype.addRaiting=function(subject, grade){
if(!this.grades[subject]){
    this.grades[subject]=[]
}
this.grades[subject].push(grade)
}

michal.addRaiting("math",4)
michal.addRaiting("eng",1)
michal.addRaiting("eng",3)

Student.prototype.getAverageGrade=function(subject){
    if(typeof subject !== "undefined"){
         const arr=this.grades[subject].reduce((prev,curr)=>prev+curr,0)/this.grades[subject].length
return  arr
    }else{
        console.log(this.grades)
        const arr2=Object.values(this.grades).flat(1);
        return (averageAll=arr2.reduce((prev,curr)=>prev+curr),0)/ arr2.length
    }
   
}

console.log(michal.getAverageGrade("math"))
console.log(michal.getAverageGrade())