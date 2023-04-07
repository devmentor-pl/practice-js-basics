
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {
        "maths": [2, 4],

    }
};

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === "undefined") {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
    
};

Student.prototype.getAverageGrade = function(subject) {
    let subAvg = 0;
    let counter = 0;
    if(typeof this.grades[subject] !== "undefined") {
        const grades = this.grades[subject];
        if(grades.length == 0) {
            return 0;
        }
        grades.forEach(function(num) {
            subAvg += num;
        })
        return (subAvg / grades.length).toFixed(2);
    }
    for(const key in this.grades) {
        const grades = this.grades[key];
        grades.forEach(function(num) {
            subAvg += num;
            counter++;
        });
    }
    return (subAvg / counter).toFixed(2);
}

const aurelia = new Student("Aurelia", "Gladisen");
aurelia.addGrade("maths", 5);
aurelia.addGrade("english", 3);
aurelia.addGrade("polish", 2);
aurelia.addGrade("deutsch", 2)
console.log(aurelia.grades["maths"]);
console.log(aurelia.grades["english"]);
console.log(aurelia.grades["polish"]);
console.log(aurelia.grades["deutsch"]);
console.log(`Matma: ${aurelia.getAverageGrade("maths")}`);
console.log(`Średnia: ${aurelia.getAverageGrade()}`);