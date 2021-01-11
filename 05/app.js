function Student(a, b) {
    this.firstName = a;
    this.surname = b; 
    this.grade = {};
}

Student.prototype.addGrade = function(sub, gradeVal) {
    console.log(sub, gradeVal);
    
}

const student1 = new Student('Jan', 'Ko');
student1.addGrade('JS', 5);
const student2 = new Student('A','K');

console.log(student1, student2);