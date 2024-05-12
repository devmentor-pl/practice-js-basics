function Student(initFistName, initLastName) {
    this.firstName = initFistName;
    this.lastName = initLastName;
    this.grades = {};
};

Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
    let sum = 0;
    let count = 0;
    if (subject) {
        this.grades[subject].forEach(function (num) {
            sum += num;
            count++;
        });
        return sum / count;
    } else {
        for (let sub in this.grades) {
            if (this.grades.hasOwnProperty(sub)) {
                this.grades[sub].forEach(function (num) {
                    sum += num;
                    count++;
                });
            }
        }
        return sum / count;
    }
};

const student = new Student('Jan', 'Kowalski');
student.addGrade('math', 4);
student.addGrade('math', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('math');
const avg = student.getAverageGrade();

console.log(student);
console.log(avgMath);
console.log(avg);