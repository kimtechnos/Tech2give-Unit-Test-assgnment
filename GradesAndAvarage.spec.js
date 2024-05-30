import { getGrade, calculateGradesAndAverage, mathSciencesGrading, humanityGrading, languagesComputerGrading } from './GradesAndAvarage.js';

describe('getGrade', () => {
  test('should return the correct grade for humanityGrading', () => {
    expect(getGrade(89, humanityGrading)).toEqual("A");
    expect(getGrade(70, humanityGrading)).toEqual("B");
    expect(getGrade(60, humanityGrading)).toEqual("C");
    expect(getGrade(40, humanityGrading)).toEqual("sup");
  });

  test('should return the correct grade for mathSciencesGrading', () => {
    expect(getGrade(85, mathSciencesGrading)).toEqual("A");
    expect(getGrade(65, mathSciencesGrading)).toEqual("B");
    expect(getGrade(55, mathSciencesGrading)).toEqual("C");
    expect(getGrade(45, mathSciencesGrading)).toEqual("pass");
    expect(getGrade(35, mathSciencesGrading)).toEqual("sup");
  });

  test('should return the correct grade for languagesComputerGrading', () => {
    expect(getGrade(90, languagesComputerGrading)).toEqual("A");
    expect(getGrade(70, languagesComputerGrading)).toEqual("B");
    expect(getGrade(60, languagesComputerGrading)).toEqual("C");
    expect(getGrade(50, languagesComputerGrading)).toEqual("pass");
    expect(getGrade(30, languagesComputerGrading)).toEqual("sup");
  });
});

describe('calculateGradesAndAverage', () => {
  test('should correctly calculate grades and average points', () => {
    const studentScore = { name: "Francis kimani", math: 80, eng: 65, kis: 48, phy: 67, che: 56, re: 89, comp: 82 };
    const expectedOutput = { name: "Francis kimani", math: "A", eng: "B", kis: "pass", phy: "B", che: "C", re: "A", comp: "A", avgPts: 69 };

    const result = calculateGradesAndAverage(studentScore);

    expect(result).toEqual(expectedOutput);
  });


});
