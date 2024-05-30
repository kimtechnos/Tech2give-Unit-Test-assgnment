const mathSciencesGrading = [
  { min: 70, max: 100, grade: "A" },
  { min: 60, max: 69, grade: "B" },
  { min: 50, max: 59, grade: "C" },
  { min: 40, max: 49, grade: "pass" },
  { min: 0, max: 39, grade: "sup" },
];

const humanityGrading = [
  { min: 80, max: 100, grade: "A" },
  { min: 70, max: 79, grade: "B" },
  { min: 60, max: 69, grade: "C" },
  { min: 50, max: 59, grade: "pass" },
  { min: 0, max: 49, grade: "sup" },
];

const languagesComputerGrading = [
  { min: 75, max: 100, grade: "A" },
  { min: 65, max: 74, grade: "B" },
  { min: 55, max: 64, grade: "C" },
  { min: 45, max: 54, grade: "pass" },
  { min: 0, max: 44, grade: "sup" },
];

function getGrade(score, gradingTable) {
  for (let range of gradingTable) {
    if (score >= range.min && score <= range.max) {
      return range.grade;
    }
  }
  return "Invalid";
}

function calculateGradesAndAverage(student) {
  const result = { name: student.name };

  result.math = getGrade(student.math, mathSciencesGrading);

  result.eng = getGrade(student.eng, languagesComputerGrading);

  result.kis = getGrade(student.kis, languagesComputerGrading);

  result.phy = getGrade(student.phy, mathSciencesGrading);

  result.che = getGrade(student.che, mathSciencesGrading);

  result.re = getGrade(student.re, humanityGrading);

  result.comp = getGrade(student.comp, languagesComputerGrading);

  const totalPoints =
    student.math +
    student.eng +
    student.kis +
    student.phy +
    student.che +
    student.re +
    student.comp;
  result.avgPts = Math.floor(totalPoints / 7);

  return result;
}


 module.exports = {getGrade, calculateGradesAndAverage, mathSciencesGrading, humanityGrading, languagesComputerGrading };
//  console.log("Student Grades:", studentGrades);
