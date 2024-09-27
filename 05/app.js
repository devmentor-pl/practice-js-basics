

function Student(initFirstName, initLastName,) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {
        maths: [4, 5, 3,],
        english: [5, 4, 3],
    }

}
const student1 = new Student("Ignacy", "Chlebek");



Student.prototype.addGrades = function (subject, grade) {
    this.grades[subject].push(grade);
}

Student.prototype.getSubAvg = function (subject) {
    const sum = this.grades[subject].reduce((accumulator, currentValue) => accumulator + currentValue);
    const len = this.grades[subject].length;

    const result = sum / len;

    return result

}

Student.prototype.getAvg = function(subject, subject) {
    const sum2 = this.grades[subject].reduce((accumulator, currentValue) => accumulator + currentValue) + this.grades[subject].reduce((accumulator, currentValue) => accumulator + currentValue);
    const len2 = this.grades[subject].length + this.grades[subject].length;

    const result2 = sum2 / len2;
    return result2;
}


student1.addGrades('maths',4);
student1.getSubAvg('maths');
console.log(student1);
console.log(student1.getSubAvg('maths'));
console.log(student1.getSubAvg('maths', 'english'));


