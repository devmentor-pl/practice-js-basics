function Student(studentFirstName, studentLastName) {
  this.firstName = studentFirstName;
  this.lastName = studentLastName;
  this.grades = {
    maths: [4, 6],
    english: [3],
  };
}

const student1 = new Student("Jerzy", "Lis");

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
    this.grades[subject].push(grade);
    console.log(this.grades[subject]);
  } else if (subject === "english") {
    this.grades[subject].push(grade);
    console.log(this.grades[subject]);
  } else if (subject === "maths") {
    this.grades[subject].push(grade);
    console.log(this.grades[subject]);
  }
};

Student.prototype.getAverageGrade = function (subject) {
  let sum = 0;
  const arraySubject = this.grades[subject];

  console.log(arraySubject);

  if (subject === "english") {
    this.grades[subject].forEach(function (num) {
      sum = sum + num;
      result = sum / arraySubject.length;
    });
  } else if (subject === "maths") {
    this.grades.maths.forEach(function (num) {
      sum = sum + num;
      result = sum / arraySubject.length;
    });
  } else if (subject !== "undefined") {
    const totalArray = this.grades;

    totalArray.forEach(function (num) {
      sum = sum + num;
      result = sum / totalArray.length;
    });
  }
  console.log(result);
};

student1.addGrade("maths", 1);
student1.addGrade("english", 5);
student1.getAverageGrade(0);
