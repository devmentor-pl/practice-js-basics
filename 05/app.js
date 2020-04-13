const studentsNr = prompt('podaj liczbę uczniów');
const studentsList = [];



   function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
   // this.showFullName = function() {
    //console.log(this.firstName, this.lastName);
    //}
   }

   for( let i = 0; i<studentsNr; i++)
   {
       const firstName = prompt('podaj imię ucznia');
       const lastName = prompt('podaj nazwisko ucznia');
   
       Student.prototype.showFullName = function() {
        console.log(this.firstName, this.lastName);
    } }

 
   
