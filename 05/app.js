function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject) {
    if (typeof this.grades[subject] !== 'undefined') {

        const avg = arr => arr.reduce((a, b) => a + b) / arr.length;
        const getAvg = avg(this.grades[subject]);
        console.log(this.grades)
        console.log(`Average for ${this.grades.subject} is ${getAvg}`)
    } else {
        this.grades[subject] = [];
    }
}


const student = new Student('Jan', 'Kowalski');

student.addGrade('english', 4)
student.addGrade('english', 3)
student.addGrade('math', 6);
student.addGrade('math', 4);
student.addGrade('physics', 2);

student.getAverageGrade('math');
student.getAverageGrade('english');

console.log(student.grades.english)
console.log(student);