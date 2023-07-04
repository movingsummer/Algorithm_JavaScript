const compareAge = (fir, sec) => {
  const [day1, mon1, year1] = fir.map((v) => +v);
  const [day2, mon2, year2] = sec.map((v) => +v);

  if (year1 === year2) {
    if (mon1 === mon2) return day1 - day2;
    else return mon1 - mon2;
  } else return year1 - year2;
};

const [n, ...studentsList] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const sortedList = studentsList
  .map((v) => v.split(' '))
  .sort((a, b) => compareAge(a.slice(1), b.slice(1)));

const ans = sortedList[sortedList.length - 1][0] + '\n' + sortedList[0][0];
console.log(ans);