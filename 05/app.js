function Student(initFirstName, initLastName) {
  this.firstName = initFirstName;
  this.lastName = initLastName;
  this.grades = {};
}

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = [];
  }

  this.grades[subject].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
  if (typeof subject !== "undefined") {
    return this.getAverage(this.grades[subject]);
  } else {
    const subjectAvg = [];
    for (const key in this.grades) {
      subjectAvg.push(this.getAverage(this.grades[key]));
    }
    return this.getAverage(subjectAvg);
  }
};

Student.prototype.getAverage = function (arr) {
  const sum = arr.reduce(function (acc, curr) {
    return acc + curr;
  });

  return sum / arr.length;
};

const student1 = new Student("Jan", "Kowalski");

student1.addGrade("maths", 5);
student1.addGrade("maths", 4);
student1.addGrade("english", 4);

console.log(student1);
