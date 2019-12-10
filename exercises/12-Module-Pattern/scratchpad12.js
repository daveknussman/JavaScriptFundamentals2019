// do this in quokka 
const studentGrades = [
  {
    firstName: "Jane",
    lastName: "Doe",
    grades: [50, 60, 70, 20, 10, 20]
  },
  {
    firstName: "John",
    lastName: "Doe",
    grades: [100, 100, 100, 100, 100, 90]
  },
  {
    firstName: "Michael",
    lastName: "Jackson",
    grades: [50, 40, 20, 20, 30, 20]
  },
  {
    firstName: "Bill",
    lastName: "Clinton",
    grades: [70, 60, 70, 80, 100, 70]
  },
  {
    firstName: "Joe",
    lastName: "Miller",
    grades: [70, 60, 70, 80, 100, 70]
  },
  {
    firstName: "Billy",
    lastName: "Jean",
    grades: [70, 90, 90, 80, 100, 80]
  }
];

const TeacherGradeBook = (() => {
  const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
  const newStudentGrades = studentGrades.slice();
  
  newStudentGrades.forEach(element => {
      // let objGrades = element;
      // console.log(objGrades);
      // objGrades.average = Math.round(arrAvg(objGrades.grades));
      // console.log(objGrades.average);
      element.average = Math.round(arrAvg(element.grades));
  });

  const getFailingStudents = (failCutoff) => {
      if (!failCutoff) failCutoff = 65;
      return newStudentGrades.filter(element => element.average < failCutoff);  
  };
  const getPassingStudents = (passCutoff) => {
      if (!passCutoff) passCutoff = 65;
      return newStudentGrades.filter(element => element.average >= passCutoff);
   };
  const debug = () => {
    return newStudentGrades;

  };

  return {
    getFailingStudents,
    getPassingStudents,
    debug
  };
})();

//   console.log(TeacherGradeBook.getFailingStudents(65));
//   console.log(TeacherGradeBook.getPassingStudents(65));
//   console.log(TeacherGradeBook.debug());