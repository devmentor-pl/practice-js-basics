function Student(studentFirstName, studentLastName) {
  this.firstName = studentFirstName;
  this.lastName = studentLastName;
  this.grades = {
    maths: [4, 4],
    english: [3, 6],
  };
}

const student1 = new Student("Jerzy", "Lis");

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }
  this.grades[subject].push(grade);
  console.log(this.grades[subject]);
};

Student.prototype.getAverageGrade = function (subject) {
  let sum = 0;
  let result = 0;
  let totalArray = [];

  if (typeof subject === "undefined") {
    for (const key in this.grades) {
      const value = this.grades[key];
      value.forEach(function (grade) {
        totalArray.push(grade);
      });
    }
  } else {
    totalArray = this.grades[subject];
  }

  totalArray.forEach(function (number) {
    sum = sum + number;
    result = sum / totalArray.length;
  });

  return result;
};

student1.addGrade("maths", 4);
student1.addGrade("english", 5);
student1.addGrade("french", 4);
const avarageGrade = student1.getAverageGrade();
console.log(avarageGrade);
const avarageGradeForSubject = student1.getAverageGrade("maths");
console.log(avarageGradeForSubject);
