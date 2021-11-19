
function Studen(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}

Studen.prototype.addGrade = function(subjectItem,grade){
    if (typeof this.grades[subjectItem] === 'undefined') {
        this.grades[subjectItem] = [];
        this.grades[subjectItem].push(grade);
    }
    else {
        this.grades[subjectItem].push(grade);
    }
}

Studen.prototype.avgSubject = function(subjectName){
    let array = 0;
    array = this.grades[subjectName].reduce(function(total,value){
        return total+value
    })
    console.log(array);
}

const student1 = new Studen('Marcel','Szopa');
student1.addGrade('maths',6);
student1.addGrade('maths',6);
student1.addGrade('english',4);
student1.addGrade('polish',3);
student1.addGrade('polish',1);

student1.avgSubject('maths');
console.log(student1);
