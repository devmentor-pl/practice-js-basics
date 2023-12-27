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

Student.prototype.calculateAverage = function(grades) {
    if (grades && grades.length > 0) {
        let sum = 0;
        grades.forEach(function(grade){
            sum += grade;
        });
        return sum / grades.length;
    } else {
        return 'Break ocen.';
    }
};

Student.prototype.getAverageGrade = function(subject) {
    if (subject) {
        const subjectGrades = this.grades[subject];
        return this.calculateAverage(subjectGrades);
    } else {
        const allGrades = Object.values(this.grades).flat();
        return this.calculateAverage(allGrades);
    }
};

const student = new Student('Jan', 'Kowalski');
student.addGrade('math', 4);
student.addGrade('math', 6);
student.addGrade('english', 3);
student.addGrade('chemistry', 4);
const avgMath = student.getAverageGrade('math'); // 5
const avg = student.getAverageGrade(); // 4.33
console.log(student);

