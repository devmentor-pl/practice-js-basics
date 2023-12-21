function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grades = {};
}

Student.prototype.addGrade = function (subjectName, grade) {
	if (typeof this.grades[subjectName] === "undefined") {
		this.grades[subjectName] = [];
	}
	this.grades[subjectName].push(grade);
};

Student.prototype.getAverageGrade = function (subject) {
	if (typeof subject === "undefined") {
		// Średnia ze wszystkich ocen;
		let array = [];
		for (const key in this.grades) {
			let allGrades = this.grades[key];
			allGrades.forEach((el) => array.push(el));
		}
    const length = array.length;
    const sum = array.reduce(function (acc, curr) {
			return acc + curr;
		}, 0);
		let avgAllGrades = sum / length;  
		console.log(avgAllGrades);

	} else if (typeof this.grades[subject] === "undefined") {
		console.log(`There is no such subject`);

	} else {
    // średnia z wybranego przedmiotu
		let arr = this.grades[subject];
		let length = arr.length;
		const sum = arr.reduce(function (acc, curr) {
			return acc + curr;
		}, 0);
		let avg = sum / length;
		return console.log(`Średnia ocen z ${subject} to ${avg}`);
	}
};

const student1 = new Student("Tomasz", "Pawłowski");
const student2 = new Student("Anna", "Nowak");

student1.addGrade("math", 3);
student1.addGrade("math", 3);
student1.addGrade("english", 4);
student1.addGrade("phisics", 4);
student1.addGrade("math", 5);

console.log(student1);
// console.log(student2);

student2.getAverageGrade('electronics')
student1.getAverageGrade('math')

student1.getAverageGrade();
