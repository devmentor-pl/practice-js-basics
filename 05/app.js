function Student(initFirstName, initLastName) {
    this.firstName = initFirstName,
        this.lastName = initLastName,
        this.grades = {
            // 'geo': [], // dodane do sprawdzenia średniej z przedmiotu bez ocen;
        }
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
    if (typeof this.grades[sub] === 'undefined') { // ----------------PODDAJE SIĘ-------------
        let counter = 0;
        let sumAll = 0;
        for (const sub in this.grades) {
            let sumOfSub = 0;
            for (const note of this.grades[sub]) {
                sumOfSub += note;
                // sum += this.grades[sub][note];
                counter++;
            }
            return (sumOfSub / counter).toFixed(2);
        }

        // sumAll += sumOfSub;
        // return sumAll;
    } else {
        const avg = (this.grades[sub].reduce((total, num) => total + num) / this.grades[sub].length).toFixed(2);
        return avg;
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

const avgMath3 = student.getAverageGrade('geo');
console.log(`średnia ocen z przedmiotu to: ${avgMath2}`)

const avg = student.getAverageGrade();
console.log(`średnia ocen ze wszystkich przedmiotów to: ${avg}`);