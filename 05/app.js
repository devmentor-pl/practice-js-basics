function Student (name, surname) {
        this.name = name;
        this.surname = surname;
        this.grades = {};
}

Student.prototype.addSubject = function (subject) {
        if (typeof this.grades[subject] === 'undefined')
                return this.grades[subject] =[]
}

Student.prototype.addRating = function (num, subject) {
        
        if (typeof this.grades[subject] === 'undefined') {
        console.log(`najpierw skorzystaj z funkcji addSubject aby dodać przedmiot`)
        } else {
                this.grades[subject].push(num);
        }
}
        


Student.prototype.averageOfSubjects = function (subject) {
        let result = 0;
        let length;
        let x = 0;
        subject = this.grades[subject];
        if (subject) {
                length = subject.length
                subject.map(item => {
                const grade = parseInt(item);
                result = grade + result})

        } else {
                for(let key in this.grades) {
                        length = [this.grades[key].length].map(item => x = x + item)
                        this.grades[key].map(item => {
                                item = parseInt(item);
                                result = result + item
                        })
                }
        } 
        return result / length    
}







const student1 = new Student ('Karol', 'Nowak'); //stworzenie instancji konstruktora
student1.addSubject('maths'); // metoda dodawania przedmiotu
student1.addSubject('history');
student1.addRating('6', 'maths'); // dodawanie ocen do danego przemiotu
student1.addRating('3', 'maths');
student1.addRating('2', 'maths');
student1.addRating('4', 'history');
student1.addRating('3', 'history');
student1.addRating('6', 'biology'); // metoda nie zadziała bo nie ma wprowadzonego przedmiotu - info dla uzytkownika w consoli
student1.addSubject('biology');
student1.addRating('6', 'biology')

console.log(student1.averageOfSubjects()); // średnia ze wszystkich przedmiotów
console.log(student1.averageOfSubjects('history')); // średnia z danego przedmiotu 

console.log(student1);





