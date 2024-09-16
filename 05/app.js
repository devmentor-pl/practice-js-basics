function Student(initFirstName, initLastName) {
    this.firstName = initFirstName,
        this.lastName = initLastName,
        this.grades = {}
}
const student = new Student('Andrzej', 'Nowak');

Student.prototype.showFullName = function () {
    console.log(this.firstName, this.lastName)
}
student.showFullName();

Student.prototype.addGrade = function (sub, note) {
    if (typeof this.grades[sub] === 'undefined') {
        Object.defineProperty(this.grades, sub, {
            value: [note],
            enumerable: true,
        });
    } else {
        this.grades[sub].push(note);
    }
}

Student.prototype.getAverageGrade = function (sub) {
    if (typeof sub === 'undefined') { 
        let counter = 0;
        let sum = 0;
        for (const sub in this.grades) {
            for (const note of this.grades[sub]) {
                sum += note;
                counter++;
            }
        }
        return (sum / counter).toFixed(2);

    } else {
        const avg = (this.grades[sub].reduce((total, num) => total + num) / this.grades[sub].length).toFixed(2);
        return (this.grades[sub].length === 0) ? 'No grades for the subject' : avg;
    }
}

student.addGrade('math', 4);
student.addGrade('math', 6);
student.addGrade('math', 6);
student.addGrade('english', 5);
student.addGrade('english', 3);
student.addGrade('english', 3);
console.log(student);
console.log(student);

const avgMath = student.getAverageGrade('math');
console.log(`the average grade in the subject is: ${avgMath}`)

const avgMath2 = student.getAverageGrade('english');
console.log(`the average grade in the subject is: ${avgMath2}`)

const avg = student.getAverageGrade();
console.log(`the average grade of all subjects is: ${avg}`);