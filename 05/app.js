
   function Student(initFirstName, initLastName)
   {
      this.firstName= initFirstName;
      this.lastName= initLastName;
      this.grades = {};

   }

   Student.prototype.addGrades = function(subject, grade)
   {
      console.log('addGrades', subject, grade);

      if(this.grades[subject])
      {
         this.grades[subject].push(grade);
      }
      else{
         this.grades= Object.assign(
            {}, 
            this.grades, 
            {[subject]: [grade]})
      }
      

   }

   Student.prototype.getAverage = function(subject)
   {
      if(typeof subject !== 'undefined')
      {
         const arr = this.grades[subject];
         const sum = arr.reduce((a, b)=> a+b)
         const sumAvg = sum/arr.length;
         console.log(sumAvg)
         return sumAvg
         
      }  
   
      else
      { 
         let sumAll = 0;
         let i = 0;
         for(const key in this.grades)
         {
            const arr = this.grades[key]

            const sum = arr.reduce((a, b)=> a+b)
            const avg = sum/arr.length;
            console.log(avg, key)
            sumAll+= avg
            i++
         }
         const sumAvg = sumAll/i
         console.log(sumAvg)
         return sumAvg
      }
   
   }
   const st = new Student('Krzystzof', 'Kononowicz')
   st.addGrades('maths', 1);
   st.addGrades('maths', 2);
   st.addGrades('maths', 1);
   st.addGrades('maths', 2);
   st.addGrades('maths', 3);
   st.addGrades('maths', 2);
   
   st.addGrades('polish', 2);
   st.addGrades('polish', 1);
   st.addGrades('polish', 1);
   st.addGrades('polish', 3);
   st.addGrades('polish', 2);
   st.addGrades('polish', 2);

   st.addGrades('religion', 6);
   st.addGrades('religion', 5);
   st.addGrades('religion', 5);
   st.addGrades('religion', 6);
   st.addGrades('religion', 6);
   st.addGrades('religion', 6);
const avg = st.getAverage()

   console.log(avg);
