/*** 
 As a teacher, I would like to be able to be see which of my students are passing or failing, 
  so I can have a better understanding on how my students are preforming.

 *  Complete the Teacher Gradebook by using the module pattern. Use the studentGrades data that I have imported for you.

 *  1) Create the first method TeacherGradeBook.getFailingStudents which returns an array of objects of all the students that have failing the course.
 *  //TeacherGradeBook.getFailingStudents() --> [{FirstName:'Billy',lastName:'Joel',grades:[20,30,40,50]},{FirstName:'Luke',lastName:'Skywalker', grades:[0,0,0,100]}]
 *
 *  2)Create second method TeachersGradeBook.getPassingStudents() which will return an array of objects of all the students that have passed.
 *   i.e TeachersGradeBook.getPassingStudents() --> [{FirstName:'jane',lastName:'doe',grades:[100,100,100,100]},{FirstName:'James',lastName:'Bond', grades:[90,90,90,90]}]
 *
 *  3)Create third method is used to debug and will return a list of all the students.Useful for debugging purposes
 *   TeachersGradeBook.debug() --> list of all students
 *
 *
 *
 *
 */

// npm run test test/12-Module-Pattern/Module-Pattern-test.js

const { studentGrades } = require("../12-Module-Pattern/students");

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

module.exports = {
  TeacherGradeBook
};
