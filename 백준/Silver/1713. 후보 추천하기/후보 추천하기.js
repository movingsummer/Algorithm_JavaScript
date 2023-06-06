const [[n], [totalRec], recs] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
const picFrame = [];
const recNums = new Map();
const isInFrame = new Array(101).fill(0);

for (let i = 1; i <= 100; i++) recNums.set(i, 0);
for (let i = 0; i < recs.length; i++) {
  const studentNum = recs[i];
  if (!isInFrame[studentNum]) {
    if (picFrame.length === n) {
      const delNum = picFrame.pop()[0];
      isInFrame[delNum] = 0;
      recNums.set(delNum, 0);
    }
    picFrame.push([studentNum, i]);
    isInFrame[studentNum] = 1;
  }
  recNums.set(studentNum, recNums.get(studentNum) + 1);
  picFrame.sort((a, b) => {
    if (recNums.get(a[0]) === recNums.get(b[0])) return b[1] - a[1];
    else return recNums.get(b[0]) - recNums.get(a[0]);
  });
}

console.log(
  picFrame
    .map((v) => v[0])
    .sort((a, b) => a - b)
    .join(' ')
);