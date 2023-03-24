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
    if (subject !== undefined) {
        const grades = this.grades[subject];
        const sum = grades.reduce(function(acc, grades) {
            return acc + grades;
        })
        const avg = sum / this.grades[subject].length;
        return avg;
    } else {
        const newArr = Object.values(this.grades);
        console.log(newArr);
        const newArr2 = newArr.flat();
        console.log(newArr2);
        const sum = newArr2.reduce(function(acc, grades) {
            return acc + grades;
        })
        console.log(sum);
        const avg = sum / newArr2.length;
        return avg;
    }

}

const student1 = new Student('Sebastian', 'Wapiński');
console.log(student1);

student1.addGrade('math', 3)
student1.addGrade('math', 5)
student1.addGrade('biology', 5)
student1.addGrade('math', 4)
student1.addGrade('biology', 5)
student1.addGrade('chemistry', 6)
student1.addGrade('chemistry', 2)
student1.addGrade('chemistry', 4)
student1.addGrade('wf', 5)

console.log(student1);
const avgMath = student1.getAverageGrade('math');
console.log(avgMath);
const avg = student1.getAverageGrade();
console.log(avg);

const student = new Student('Jan', 'Kowalski');
console.log(student);
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath2 = student.getAverageGrade('maths'); // 5
console.log(avgMath2);
const avg2 = student.getAverageGrade(); // 4.33
console.log(avg2);




