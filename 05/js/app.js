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
  if (subject === "english") {
    this.grades.english.push(grade);
    console.log(this.grades.english);
  } else if (subject === "maths") {
    this.grades.maths.push(grade);
    console.log(this.grades.maths);
  }
};

Student.prototype.getAverageGrade = function (subject) {
  let sum = 0;
  const lang = this.grades.english;
  const math = this.grades.maths;

  if (subject === "english") {
    this.grades.english.forEach(function (num) {
      sum = sum + num;
      result = sum / lang.length;
    });
  } else if (subject === "maths") {
    this.grades.maths.forEach(function (num) {
      sum = sum + num;
      result = sum / math.length;
    });
  } else if (typeof subject === "undefined") {
    const total = lang.concat(math);
    console.log(total);
    total.forEach(function (num) {
      sum = sum + num;
      result = sum / total.length;
    });
  }
  console.log(result);
};

student1.addGrade("english", 3);
student1.getAverageGrade("english");
