function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};

}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    
    this.grades[subject].push(grade);
}

const student1 = new Student('Alice', 'Smith');

student1.addGrade('Math', 90);
student1.addGrade('History', 85);

console.log(student1.grades);