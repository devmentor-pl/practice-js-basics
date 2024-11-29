function Student(firstName, lastName){
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

Student.prototype.getAverageGrade = function(subject){

    if(typeof this.grades[subject] === 'undefined') {

        const allGrades = Object.values(this.grades).flat();
        const generalSum = allGrades.reduce((acc, element) => acc + element);
        const generalAvg = (generalSum / allGrades.length).toFixed(2);
        return generalAvg;
    }

    const sum = this.grades[subject].reduce((acc, element) => acc + element);
    const avg = sum / this.grades[subject].length;
    return avg;
}

const student = new Student('Jan', 'Kowalski');
student.addGrade('math', 4);
student.addGrade('math', 6);
student.addGrade('english', 3);

const avgMath = student.getAverageGrade('math');
console.log(avgMath);

const avg = student.getAverageGrade();
console.log(avg);

console.log(student);