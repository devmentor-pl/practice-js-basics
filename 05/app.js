function Student (initFirstName, initLastName){
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.showFullName =function(){
    console.log(this.firstName, this.lastName);
};

Student.prototype.addGrade = function(subject, grade){
    if(typeof this.grades[subject] === 'undefined'){
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAvgGrade = function(subject){
    if(typeof subject === 'undefined'){
        return 0
    }
        const grades = this.grades[subject];
        const sum = grades.reduce(function(total,item){
            return total + item;
        })
    return sum
    }





const student1 = new Student('Jan', 'Kowalski');
student1.addGrade('maths', 4)
student1.addGrade('maths', 6)
student1.addGrade('maths', 5)
student1.addGrade('english', 5)
student1.addGrade('english', 4)

console.log(student1);
console.log(student1.getAvgGrade('maths'));
