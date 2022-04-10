



function Student(addFirstName, addLastName) {
    this.firstName = addFirstName;
    this.lastName = addLastName;
    this.subjectsGrades = {};


}


Student.prototype.addGrade = function (subject, grade) {
    if (typeof this.subjectsGrades[subject] === 'undefined') {
        this.subjectsGrades[subject] = [];
    }
    this.subjectsGrades[subject].push(grade);
}


Student.prototype.getAverageGrade = function (subject) {

    if (typeof subject === 'undefined') {
        const grades = [];
        for (const key in this.subjectsGrades) {
            const arr = this.subjectsGrades[key];

            arr.forEach(function (item) {
                grades.push(item);
            });
        }

        const sum = grades.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);

        return sum / grades.length; 
    }


    if (typeof this.subjectsGrades[subject] === 'undefined') {
        return 0;
    }
    const grades = this.subjectsGrades[subject];
    const sum = grades.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);

    return sum / grades.length;
}





const student1 = new Student('Dawid', 'Drąg');


console.log(student1);


const student2 = new Student('Jan', 'Drąg');
student2.addGrade('english', 6);
student2.addGrade('english', 5);
student2.addGrade('polish', 5);
student2.addGrade('polish', 5);



console.log(student2);
console.log(student2.getAverageGrade());