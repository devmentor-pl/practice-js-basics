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

    if (typeof grades === 'undefined') {
        return 0;


    } else if (typeof subject === 'undefined') {
        // trzeba napisać srendia dla wszystkich
        // można wyukorzystać for in

        let sumSubjects = 0;

        for (const key in this.grades) {

            const array = this.grades[key];

            const result = array.reduce((a, b) => a + b);
            const avarage = result / array.length;

            sumSubjects += avarage;
            console.log(avarage)
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

        const avgSubject = sum / grades.length;
        console.log(`średnia z ${subject} wynosi ${avgSubject}`)


    }

    return 0;
}


const student2 = new Student('Andrzej', 'Nowak');
// console.log(student0, student1, student2);

student2.addGrade('maths', 4);
student2.addGrade('maths', 2);


student2.addGrade('polish', 5);
student2.addGrade('polish', 5);
student2.addGrade('polish', 5);

student2.getAverageGrade('maths');
student2.getAverageGrade('polish');