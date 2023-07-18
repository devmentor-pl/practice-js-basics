function Student(firstName, lastname) {
  this.firstName = firstName;
  this.lastName = lastname;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grades) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }
  return `${this.grades[subject]} ${this.grades[subject].push(grades)}`;
};

Student.prototype.getAverageGrade = function (subject) {
  if (typeof subject === 'undefined') {
    const arr = [];
    const grades = this.grades;
    for(let key in grades) {
      arr.push(...grades[key]);
    }
    let total = 0;
    arr.forEach(function (num) { total += num});
    const average = total / arr.length;
    return average;
  } else {
    const subjectGrades = this.grades[subject];
    let sum = 0;
    subjectGrades.forEach(function (num) {
      sum += num;
    });
    const avgSubject = sum / subjectGrades.length;
    return avgSubject;
  }
};
const student1 = new Student("Adam", "Kowalski");

student1.addGrade("math", 3);
student1.addGrade("english", 4);
student1.addGrade("english", 6);
student1.addGrade("math", 6);
student1.addGrade("math", 2);
student1.addGrade("english", 5);
student1.addGrade('polish', 6);
student1.addGrade('polish', 6);
student1.addGrade('polish', 3);

// const avgSubject = student1.getAverageGrade('polish');
// const avg = student1.getAverageGrade();

// console.log(avgSubject);
// console.log(avg);
