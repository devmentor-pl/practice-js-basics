
   function Student(initFirstName, initLastName, initClass) 
   {
    const studentsSubject =
    [ 
    ['maths', gradesMaths= [1, 2, 1, 2, 3, 1]], 
    ['polish', gradesPolish =[3, 4, 2, 2, 1, 1]], 
    ['english', gradesEnglish = [2, 2, 3, 2, 3, 1]], 
    ['biology', gradesBiology = [2, 3, 1, 1, 1, 1,]], 
    ['geography', gradesGeography = [3, 2, 2, 1, 3, 3]],
    ['history', gradesHistory = [3, 3, 1, 1, 2, 2]],
    ['religion', gradesReligion = [5, 6, 6, 6, 5, 5]] 
   ];


    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.class = initClass;
    this.subject = studentsSubject;

   const totalAverage= function(){
      function getAvgMaths(gradesMaths)  
      {
         const sum = gradesMaths.reduce(
            (acc, cv) => acc + cv);
        
            const averageMaths = sum/gradesMaths.length;
            return averageMaths.toFixed(2);
      }
      const avgMat = parseFloat(getAvgMaths(gradesMaths)) 
      console.log('Srednia ocen z matematyki wynosi: ' + avgMat)
  
      function getAvgPolish(gradesPolish)  
      {
         const sum = gradesPolish.reduce(
            (acc, cv) => acc + cv);
        
            const averagePolish = sum/gradesPolish.length;
            return averagePolish.toFixed(2);
      }
      const avgPol = parseFloat(getAvgPolish(gradesPolish)) 
      console.log('Srednia ocen z j. polskiego wynosi: ' + avgPol)
  
      function getAvgEnglish(gradesEnglish)  
      {
         const sum = gradesEnglish.reduce(
            (acc, cv) => acc + cv);
        
            const averageEnglish = sum/gradesEnglish.length;
            return averageEnglish.toFixed(2);
      }
      const avgEng = parseFloat(getAvgEnglish(gradesEnglish)) 
      console.log('Srednia ocen z j. angielskiego wynosi: ' + avgEng)
  
      function getAvgBiology(gradesBiology)  
      {
         const sum = gradesBiology.reduce(
            (acc, cv) => acc + cv);
        
            const averageBiology = sum/gradesBiology.length;
            return averageBiology.toFixed(2);
      }
      const avgBio = parseFloat(getAvgBiology(gradesBiology)) 
      console.log('Srednia ocen z biologii wynosi: ' + avgBio)
      
      function getAvgGeography(gradesGeography)  
      {
         const sum = gradesGeography.reduce(
            (acc, cv) => acc + cv);
        
            const averageGeography = sum/gradesGeography.length;
            return averageGeography.toFixed(2);
      }
      const avgGeo = parseFloat(getAvgGeography(gradesGeography)) 
      console.log('Srednia ocen z geografii wynosi: ' + avgGeo)
  
      function getAvgHistory(gradesHistory)  
      {
         const sum = gradesHistory.reduce(
            (acc, cv) => acc + cv);
        
            const averageHistory = sum/gradesHistory.length;
            return averageHistory.toFixed(2);
      }
      const avgHist = parseFloat(getAvgHistory(gradesHistory)) 
      console.log('Srednia ocen z historii wynosi: ' + avgHist)
  
      function getAvgReligion(gradesReligion)  
      {
         const sum = gradesReligion.reduce(
            (acc, cv) => acc + cv);
        
            const averageReligion = sum/gradesReligion.length;
            return averageReligion.toFixed(2);
      }
      const avgRel = parseFloat(getAvgReligion(gradesReligion)) 
      console.log('Srednia ocen z religii wynosi: ' + avgRel)
  
      const avgArray= [];
      avgArray.splice(0,0, avgMat, avgPol, avgEng, avgBio, avgGeo, avgHist, avgRel);
     
         const sumTotal = avgArray.reduce(
            (acc, cv) => acc + cv);
        
            const averageTotal = sumTotal/avgArray.length;
            return averageTotal.toFixed(2)
  
  }
  
  const allSubjectAvg= totalAverage();
  console.log('Średnia wszystkich ocen wynosi: ' + allSubjectAvg);

   
}
   
   Student.prototype.showFullName = function() 
   {
    console.log(this.firstName, this.lastName, this.class, this.subject);
   }

   const student1 =  new Student ('Krzysztof', 'Kononowicz', '2B');
   student1.showFullName();

   
  
   
  