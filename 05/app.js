class Student {
  constructor (name, surname) {
    this.firstName = name,
    this.surName = surname,
    this.grades = {}
  }

  addGrade(subject, grade) {
    const lowerCaseSubject = subject.toLowerCase();
    if (!this.grades[lowerCaseSubject]) {
      const subjects = [
        "biology",
        "chemistry",
        "safety education",
        "early school education",
        "physics",
        "geography",
        "history",
        "computer science",
        "english",
        "german",
        "polish",
        "maths",
        "music",
        "visual arts",
        "nature studies",
        "technology",
        "social studies",
        "physical education",
      ];

      for (const element of subjects) {
        if (element === lowerCaseSubject) {
          this.grades[lowerCaseSubject] = [];
          break;
        }
      }

      if (!this.grades[lowerCaseSubject]) {
        return console.log("You've provided invalid data.");
      }
    }

    if (typeof(grade) === 'number') {
      this.grades[lowerCaseSubject].push(grade);
    } else {
      return console.log("You've provided invalid data.");
    }
  }

  getAverageGrade(subject) {
    if (!this.grades[subject] && subject !== undefined) {
      return console.log("You've provided invalid data.");
    }

    if (!subject) {
      const gradesNumber = Object.values(this.grades).reduce(function (a, b) {
        if (typeof (a) === 'number' && typeof(b) === 'number') {
          return a + b;
        } else if (typeof (a) === 'number') {
          return a + b.length;
        } else if (typeof (b) === 'number') {
          return a.length + b;
        } else {
        return a.length + b.length;
        }
      });
      const sum = Object.values(this.grades).reduce(function (a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number' ) {
          return a + b;
        } else if (typeof (a) === 'number') {
          return a + b.reduce(function (a, b) {
            return a + b;
          })
        } else if (typeof (b) === 'number') {
          return a.reduce(function (a, b) {
            return a + b;
          }) + b;
        } else {
          return (
            a.reduce(function (a, b) {
              return a + b;
            }) +
            b.reduce(function (a, b) {
              return a + b;
            })
          );
        }
      });
      const average = (sum / gradesNumber).toFixed(2);
      return console.log("General average: " + average);
    } else {
      const lowerCaseSubject = subject.toLowerCase();
      const sum = this.grades[lowerCaseSubject].reduce(function (a, b) {
        return a + b;
      });
      const average = (sum / this.grades[lowerCaseSubject].length).toFixed(2);
      return console.log(`Average of ${lowerCaseSubject} is: ${average}`);
    }
  }
}

const student = new Student('Jan', 'Kowalski');

student.addGrade('maths', 4);
student.addGrade('maths', 3);
student.addGrade('maths', 6);
student.addGrade('English', 4);
student.addGrade('english', 6);
student.addGrade('Polish', 5);

const avgMath = student.getAverageGrade('maths');
const avg = student.getAverageGrade();
