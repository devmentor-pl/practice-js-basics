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

Student.prototype.getAverageGrade = function(subject) {
    if (subject) {
        const subjectGrades = this.grades[subject];
        if (subjectGrades && subjectGrades.length > 0) {
            let sum = 0;
            subjectGrades.forEach(function(grade) {
                sum += grade;
            });
            const avg = sum / subjectGrades.length;
            return avg;
        } else {
            return 'Brak ocen dla tego przedmiotu.';
        }
    } else {
        const allGrades = Object.values(this.grades).flat();
        if (allGrades.length > 0) {
            let totalSum = 0;
            let totalCount = 0;
            allGrades.forEach(function(grade) {
                totalSum += grade;
                totalCount++;
            });
            const avg = totalSum / totalCount;
            return avg;
        } else {
            return 'Brak ocen.';
        }
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

