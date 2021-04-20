function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}

Student.prototype.addGrade = function (subject, grade) {
    if(typeof this.grades[subject] === "undefined") {
        this.grades[subject] = [];
    }
    
    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function (subject) {
    
    if(typeof subject !== "undefined") {
        let sum = 0;
        const grades = this.grades[subject];
        grades.forEach(function (element) {
          return sum += element;
        });

        return sum /= grades.length;

    } else {
        const allGrades = [];
        let total = 0;

        for(const key in this.grades) {
            this.grades[key].forEach(function (element) {
                allGrades.push(element);
            });
        }   

        allGrades.forEach(function (element) {
            return total += element;
        });

        return total /= allGrades.length;
    }
}

const student = new Student ("Jan", "Nowak");
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths');
const avg = student.getAverageGrade();


console.log(student);
console.log(avgMath);
console.log(avg);