// program calculates the average for items and the overall average.

// show info
console.log(
	'Based on the entered data, calculate the average for individual subjects and the overall average.'
);
// console.log('Calculate for:');

const firstName = prompt(String('Add Your Name: '));
const lastName = prompt(String('Add Your Last Name'));
const student = new Student(firstName, lastName);

// add user
function Student(initFirstName, initLastName) {
	this.firstName = initFirstName;
	this.lastName = initLastName;
	this.items = {};
}

// add item & rating to items
Student.prototype.addRating = function (item, rating) {
	if (typeof this.items[item] === 'undefined') {
		this.items[item] = [];
	}
	this.items[item].push(rating);
};

// calculate average for subject or overall
Student.prototype.getAvgItem = function (item) {
	if (typeof item === 'undefined') {
		const items = [];
		for (const rating in this.items) {
			const arr = this.items[rating];

			arr.forEach(function (rating) {
				items.push(rating);
			});
		}
		return this.avg(items);
	}

	if (typeof this.items[item] === 'undefined') {
		return 0;
	}
	const items = this.items[item];
	return this.avg(items);
};

// calculate average method
Student.prototype.avg = function (arr) {
	if (arr.length === 0) {
		return 0;
	}
	const sum = arr.reduce(function (acc, curr) {
		return acc + curr;
	}, 0);
	return sum / arr.length;
};

// show student
Student.prototype.showFullName = function () {
	console.log(`Calculate for: ${this.firstName} ${this.lastName}`);
};

const showStudent = student.showFullName();

// add items & ratings
const subjectNums = parseInt(prompt(`Enter the number of items:`));
for (let j = 1; j <= subjectNums; j++) {
	const subject = prompt(`Enter the name of item no. ${j}`);
	const itemNums = parseInt(
		prompt(`Enter the number of grades for the subject ${subject}`)
	);
	for (let i = 1; i <= itemNums; i++) {
		const item = parseInt(prompt(`Add rating no. ${i} from ${subject}:`));
		student.addRating(subject, item);
	}
}

// example data:
// student.addRating('math', 2);
// student.addRating('math', 1);
// student.addRating('math', 2);
// student.addRating('english', 4);
// student.addRating('english', 2);
// student.addRating('english', 4);
// student.addRating('it', 4);
// student.addRating('it', 3);
// student.addRating('it', 5);

// show calculate average
Student.prototype.showItemAverage = function () {
	for (const key in this.items) {
		console.log(`${key} ratings: ${this.items[key]}`);
		console.log(`${key} average: ${student.getAvgItem(key, this.items[key])}`);
	}
};

student.showItemAverage();
// console.log(showItemAverage);
console.log(`overall average: ${student.getAvgItem()}`);

/* display the object in the console for inspection
on what data operations are performed
*/

// show object
console.log(student);
