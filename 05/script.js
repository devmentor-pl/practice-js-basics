Student.prototype.setGrade = setGrade;
Student.prototype.getAverageGrade = getAvgGrade;

const student1 = new Student('Marek', 'Nowak');
student1.setGrade('maths', 1);
student1.setGrade('maths', 5);
student1.setGrade('eng', 2);
console.log(student1);

console.log(student1.getAverageGrade('maths'));
console.log(student1.getAverageGrade());

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
}

function getAvgGrade(subject) {
    let avg;
    if(typeof(subject) === 'undefined') {
        avg = getAverageOfAll(this.grades);
    }
    else {
        avg = getAvgFromArray(this.grades[subject]);
    }
    return avg;
};

function setGrade(subject, grade) {
    if(this.grades[subject] === undefined) { this.grades[subject] = []};
    this.grades[subject].push(grade); 
};

function getAverageOfAll(allGrades) {
    if(typeof(allGrades) !== 'object') { return null; };
    const mainGrades = [];
    for(const subjectGrades in allGrades) {
        mainGrades.push(getAvgFromArray(allGrades[subjectGrades]));
    }
    return getAvgFromArray(mainGrades);
}

function getAvgFromArray(subjectGrades) {
    if(!Array.isArray(subjectGrades)) { return null; }
    const sum = subjectGrades.reduce(function(last, current) { return last + current; })
    return sum / subjectGrades.length;
}