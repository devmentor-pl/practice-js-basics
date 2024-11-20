function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}

const student = new Student('Jan', 'Nowak');
console.log(student);

Student.prototype.addGrade  = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
     this.grades[subject] = []; 
    }
    this.grades[subject].push(grade);
 };

student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject !== "undefined") {
        const subjGrades = this.grades[subject];
        if(subjGrades.length !== 0);
            const subjAvg = subjGrades.reduce((a, b) => a + b, 0) / subjGrades.length;
            return subjAvg;
    } else {
        const totalGrades = Object.values(this.grades).flat(1);
        if(totalGrades.length !== 0);
            const totalAvg = totalGrades.reduce((a, b) => a + b, 0) / totalGrades.length;
            return totalAvg.toFixed(2);
    }
  };

const avgMath = student.getAverageGrade('maths'); // 5
const avgSubjects = student.getAverageGrade(); // 4.33

console.log(avgMath);
console.log(avgSubjects);