function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}

const student1 = new Student('Jan', 'Kowalski');

console.log(student1);

Student.prototype.addGrade = function(subject, grades) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grades);
}

student1.addGrade('maths', 3);
student1.addGrade('maths', 4);
student1.addGrade('english', 4);
student1.addGrade('polish', 5);

Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject !== 'undefined') {
        return getAverage(this.grades[subject]);
    } else {
        const subjAvg = [];
        for(const key in this.grades) {
            subjAvg.push(getAverage(this.grades[key]));
        }
        return getAverage(subjAvg);
    }
}

Student.prototype.getAverage = function(arr) {
    const sum = arr.reduce(function(a, b) {
        return a + b;
    });
    return sum / arr.length;
}