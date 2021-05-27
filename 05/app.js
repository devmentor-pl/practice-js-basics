function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

Student.prototype.getAverage = function(subject) {
    if(typeof subject !== 'undefined') {
        for(const key in this.grades) {
            let sum = 0;
            const gradeArr = this.grades[subject];
            console.log(gradeArr);
            for(let i = 0; i < gradeArr.length; i++) {
                sum += gradeArr[i];
            }
            return sum / gradeArr.length;
        }
    } else {
        const allGrades = [];
        let sum = 0;
        for(const item in this.grades) {
            const gradesArr = this.grades[item];
            gradesArr.forEach(function(grade) {
                console.log(grade);
                allGrades.push(grade);
                sum += grade;
            });
        }
        console.log(allGrades);
        return sum / allGrades.length;
    }
}


const student1 = new Student('Jan', 'Nowak');
const student2 = new Student('Anna', 'Kowal');

student1.addGrade('maths', 4);
student1.addGrade('maths', 5);
student1.addGrade('biology', 4);
student2.addGrade('physics', 5);
student2.addGrade('english', 4);
student2.addGrade('english', 3);
student2.addGrade('english', 5);
student2.addGrade('spanish', 3);
student2.addGrade('spanish', 2);
student2.addGrade('spanish', 5);
student2.addGrade('spanish', 5);
student2.addGrade('spanish', 4);

// console.log(student1, student2);
console.log(student1);
console.log(student2);

console.log(student2.getAverage());



