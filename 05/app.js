function Student(initFirstName, initLastName) {
    this.firstName = initFirstName,
        this.lastName = initLastName,
        this.grades = {}
}
const student = new Student('Jan', 'Kowalski');

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
    if (typeof sub === 'undefined') { // ----------------MYŚLAŁAM ŻE OSZALEJĘ!!!!!-------------
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
        return (this.grades[sub].length === 0) ? 'Brak ocen z przedmiotu' : avg;
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
console.log(`średnia ocen z przedmiotu to: ${avgMath}`)

const avgMath2 = student.getAverageGrade('english');
console.log(`średnia ocen z przedmiotu to: ${avgMath2}`)

const avg = student.getAverageGrade();
console.log(`średnia ocen ze wszystkich przedmiotów to: ${avg}`);