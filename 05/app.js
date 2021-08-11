function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}
const student1 = new Student('Jarek', 'Kaczynski');
const student2 = new Student('Donald', 'Tusk');

console.log(student1)
console.log(student2)


Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = []
    }
    this.grades[subject].push(grade);
}

student1.addGrade('W-F', 1);
student1.addGrade('W-F', 2);
student1.addGrade('W-F', 1);
student1.addGrade('WOS', 2);
student1.addGrade('WOS', 4);
student1.addGrade('WOS', 1);
student1.addGrade('WOS', 3);
student2.addGrade('W-F', 3);
student2.addGrade('W-F', 4);
student2.addGrade('W-F', 2);
student2.addGrade('WOS', 5);
student2.addGrade('WOS', 2);
student2.addGrade('WOS', 1);
student2.addGrade('WOS', 4);

Student.prototype.getAverageGrade = function(subject){
    const sum = this.grades.reduce(((a, b) => a+b), 0);
    return sum / subject.length
}

