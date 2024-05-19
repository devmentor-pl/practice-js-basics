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

function averageCounter(item){
    let sum = 0;
    let count = 0;
    item.forEach(function (num) {
        sum += num;
        count++;
    });
    return sum / count;
}

Student.prototype.getAverageGrade = function (subject) {
    if (subject) {
        return averageCounter(this.grades[subject])
    } else {
        let totalSum = 0;
        let totalCount = 0;

        for (const gradesArray of Object.values(this.grades)) {
            const subjectAverage = averageCounter(gradesArray);
            totalSum += subjectAverage * gradesArray.length;
            totalCount += gradesArray.length;
        }
        const overallAverage = totalSum / totalCount;
        return overallAverage.toFixed(2);
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