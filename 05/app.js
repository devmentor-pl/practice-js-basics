function Student(name, lastname){
    this.name = name;
    this.lastname = lastname;
    this.grades ={};
}

Student.prototype.addGrade = function(subject, grade){
    if(typeof this.grades[subject] === "undefined"){
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject){
    function countAvg(gradesArray){
        return (gradesArray.reduce((a,b)=>a+b) / gradesArray.length).toFixed(2);
    }

    let avg;
    if(typeof subject !== "undefined" && this.grades[subject]){
        avg = countAvg(this.grades[subject]);
        console.log(`Average from ${subject} is: ${avg}.`)
    } else if (typeof subject === "undefined"){
        const allGradesArray = [];
        for (const key in this.grades) {
            (this.grades[key]).forEach(element => allGradesArray.push(element));
        }
        avg = countAvg(allGradesArray);
        console.log(`Average from all subjects is: ${avg}.`)
    } else{
        console.log("Insert name of a subject or leave that parameter empty")
    }
    return avg;
}

const student = new Student("John", "Smith");
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('spanish', 3);
student.getAverageGrade("maths");
student.getAverageGrade();
console.log(student); 