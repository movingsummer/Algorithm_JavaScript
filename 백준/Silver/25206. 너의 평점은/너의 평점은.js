const lectures = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const lecGPA = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};
let sumOfGrade = 0;
let sumOfGPA = lectures.reduce((sum, val) => {
  const [lecName, GPA, grade] = val.split(' ');
  if (grade !== 'P') {
    sumOfGrade += Number(GPA);
    return sum + lecGPA[grade] * Number(GPA);
  }

  return sum;
}, 0);

console.log((sumOfGPA / (sumOfGrade || 1)).toFixed(6));