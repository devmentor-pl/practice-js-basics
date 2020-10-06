function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {};
    
   
    }
    Student.prototype.addGrade = function(subject, grade) {
        if(typeof this.grades[subject] === 'undefined') {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
        return this.grades;
    }
    Student.prototype.getAverageGrade = function(item) {
        let sum = 0;
    
    if(typeof item === 'undefined') {
        let num = 0;
        for(const key in this.grades) {
            
            for(let i=0; i < this.grades[key].length; i++) {
                    sum += this.grades[key][i];
                    num += 1;
            }
        }
    
        return sum / num;
    
        } else if(typeof this.grades[item] !== 'undefined') {
        for( let i = 0; i <  this.grades[item].length; i++ ){
                sum += parseInt(  this.grades[item][i], 10 );
            }
            return sum/this.grades[item].length;
        }
    
        return sum
    }
    
    



const student1 = new Student('Grzegorz', 'Blaszczyk');
student1.addGrade('maths', 4);
student1.addGrade('maths', 6);
student1.addGrade('english', 3);
const avgMath = student1.getAverageGrade('maths');
const undef = student1.getAverageGrade();
console.log(undef);
console.log(avgMath);
console.log(student1);



