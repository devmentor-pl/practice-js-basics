function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}


Student.prototype.showInfo = function () {
    console.log(this.firstName, this.lastName);
}


const student1 = new Student('Jan', 'Kowalski');
student1.showInfo();
const student2 = new Student('Anna', 'Nowak');
student2.showInfo();
const student3 = new Student('Marek', 'Nowak');
student3.showInfo();


Student.prototype.addGrade = function (subject, grade) {

    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);

}
student1.addGrade('maths', 5);
student1.addGrade('maths', 4);
student1.addGrade('english', 3);
student1.addGrade('maths', 6);
student2.addGrade('english', 5);
student2.addGrade('maths', 3);
student2.addGrade('english', 6);
student2.addGrade('maths', 2);
student2.addGrade('maths', 2);
console.log(student1.grades);
console.log(student2.grades);


Student.prototype.getAverageGrade = function (subject) {

    if (subject !== undefined) {
        const grades = this.grades[subject];
        let sum = 0;
        grades.forEach((grade) => {
            sum += grade;
        });
        const averageSubject = sum / grades.length;
        return averageSubject;
    }

    else {
        const allGrades = Object.values(this.grades);
        
        let sumGrades = 0;

        allGrades.forEach(function (innerArray) {
            innerArray.forEach(function (value) {
                sumGrades += value;
            });
        });

        const sumElements = allGrades.flat().length;
        let average = sumGrades / sumElements;
        return average;
    }


}

const avgMath = student1.getAverageGrade('maths');
console.log(avgMath);
const avg = student1.getAverageGrade();
console.log(avg);
const avgEnglish = student2.getAverageGrade('english');
console.log(avgEnglish);
const avg3 = student3.getAverageGrade();
console.log(avg3);




