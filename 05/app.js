function Student(firstNameValue, lastNameValue) {
    this.firstName = firstNameValue;
    this.lastName = lastNameValue;
    this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
    //console.log(this.firstName, this.lastName);  
    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);

}


Student.prototype.getAverageGrade = function (subject) {

    if (typeof subject === 'undefined') {
        // trzeba napisać srendia dla wszystkich
        // można wyukorzystać for in

        let sumSubjects = 0;
        let i = 0;
        for (const key in this.grades) {

            const array = this.grades[key];

            const result = array.reduce((a, b) => a + b);
            const avarage = result / array.length;
            console.log(avarage)
            sumSubjects += avarage;
            i++;

        }
    } else {


        const grades = this.grades[subject];

        // const sum = grades.reduce(function(acc, grade) {
        //     return acc + grade;
        // }, 0);

        let sum = 0;
        grades.forEach(function (num) {
            sum += num;
        });

        //console.log(grades, sum);

        console.log(sum / grades.length);


    }

    return 0;
}
const student0 = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    grades: {
        maths: [1, 3, 5],
    }
};

const student1 = new Student('Kasia', 'Kowalska');
student1.addGrade('maths', 4);

const student2 = new Student('Andrzej', 'Nowak');
// console.log(student0, student1, student2);

student2.addGrade('maths', 2);
student2.addGrade('maths', 2);
student2.addGrade('polish', 2);
student2.addGrade('polish', 2);
student2.addGrade('polish', 2);

student1.getAverageGrade('maths');
student1.getAverageGrade('polish');


console.log(student1, student2);