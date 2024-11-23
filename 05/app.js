

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}



Student.prototype.addGrade = function(subject, grade) {
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function(subject) {
    if (typeof subject !== 'undefined') {
        const grades = this.grades[subject];
        if (!grades || grades.length === 0) {
            return 0;
        }
        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        return sum / grades.length;
    } else {
        const allGrades = Object.values(this.grades).flat();
        if (allGrades.length === 0) {
            return 0;
        }
        const sum = allGrades.reduce((acc, grade) => acc + grade, 0);
        return sum / allGrades.length;
    }
};


const student = new Student('Mariusz', 'Kokieszko');
student.addGrade('math', 4);
student.addGrade('math', 1);
student.addGrade('english', 3);
student.addGrade('english', 1);
student.addGrade('english', 4);


// console.log(Student)

const avgMath = student.getAverageGrade('math'); 
console.log(`Średnia z matematyki: ${avgMath}`);

const avg = student.getAverageGrade();
console.log(`Ogólna średnia: ${avg}`);





