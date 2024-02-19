function Student(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.grades = {}
}

Student.prototype.addGrade = function (subject, grade) {
  if (typeof this.grades[subject] === "undefined") {
    this.grades[subject] = []
  }
  this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function (subject) {
  if (subject) {
    const grades = this.grades[subject] || []
    const sum = grades.reduce((acc, cur) => acc + cur, 0)
    return grades.length ? (sum / grades.length).toFixed(2) : "Lack of grades"
  } else {
    const subjects = Object.keys(this.grades)
    const totalSum = subjects.reduce(
      (acc, subject) =>
        acc + this.grades[subject].reduce((acc, cur) => acc + cur, 0),
      0
    )
    const totalGrades = subjects.reduce(
      (acc, subject) => acc + this.grades[subject].length,
      0
    )
    return totalGrades ? (totalSum / totalGrades).toFixed(2) : "Lack of grades"
  }
}

const student = new Student("Tomasz", "Kowalski")
student.addGrade("math", 4)
student.addGrade("math", 3)
student.addGrade("math", 4)
student.addGrade("math", 3)
student.addGrade("english", 4)
student.addGrade("english", 4)
student.addGrade("english", 2)
student.addGrade("english", 3)
student.addGrade("physics", 6)
student.addGrade("physics", 5)
student.addGrade("physics", 4)
student.addGrade("physics", 5)

console.log(student)

const avgMath = student.getAverageGrade("math")
console.log(avgMath)

const allAvgGrades = student.getAverageGrade()
console.log(allAvgGrades)
