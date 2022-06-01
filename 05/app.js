
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
};

Student.prototype.addGrade = function (sub, grade) {
    if (typeof this.grades[sub] === 'undefined') {
        this.grades[sub] = [];
    }
    this.grades[sub].push(grade)
}

Student.prototype.getAverageGrade = function (sub) {
    if (typeof sub === 'undefined') {
        const grades = [];
        for (const key in this.grades) {
            const arr = this.grades[key];
            arr.forEach(function (item) {
                grades.push(item);
            });
        }
        const sum = grades.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
        return sum / grades.length;
    };

    if (typeof this.grades[sub] === 'undefined') {
        return 0;
    }
    const grades = this.grades[sub];
    const sum = grades.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    return sum / grades.length;
};

const student = new Student('asia', 'markiewicz');
student.addGrade('math', 5);
student.addGrade('math', 4);
student.addGrade('english', 3);
console.log("średnia ocen z Matematyki: ", student.getAverageGrade('math'));
console.log("średnia wszystkich ocen: ", student.getAverageGrade());





