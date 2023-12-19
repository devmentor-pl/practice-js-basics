function Student(firstName, lastName) {
    this.firsNAme = firstName;
    this.lastNam = lastName;
    this.grades = {};
}
Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.grades[subject] === "undefined") {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject === "undefined") {
        const grades = [];
        for (const key in this.grades) {
            const arr = this.grades[key];
            arr.forEach(function (item) {
                grades.push(item);
            });
        }
        if (grades.length === 0) {
            return 0;
        }
        const sum = grades.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
        return sum / grades.length;
    }
    if (typeof this.grades[subject] === "undefined") {
        return 0;
    }
    const grades = this.grades[subject];
    const sum = grades.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    return sum / grades.length;
};

const student = new Student("David", "Kovalsky");
student.addGrade("math", 2);
student.addGrade("js", 3);
student.addGrade("css", 3);
student.addGrade("english", 4);
student.addGrade("html",3);
student.addGrade("marketing",4);
student.addGrade("linux",4);
student.addGrade("video edit",4);
student.addGrade("security blue team",4);

console.log(student.getAverageGrade()); //first rule of programming... if its works...
//dont touch this! ;-)