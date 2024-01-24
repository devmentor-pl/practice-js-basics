function Student(initFirstName, initLastName) {
	this.initFirstName = initFirstName;
	this.initLastName = initLastName;
}

const firstStudent = new Student("Jan", "Nowak");
const secondStudent = new Student("Anna", "Lewandowska");

console.log(firstStudent, secondStudent);
