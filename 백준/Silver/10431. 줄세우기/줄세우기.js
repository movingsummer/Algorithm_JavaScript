const [[t], ...cases] = (require('fs').readFileSync('/dev/stdin') + '')
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
const ans = [];

for (let i = 0; i < t; i++) {
  let stepCnt = 0;
  const [tNum, ...students] = cases[i];
  const line = new Array(20).fill(0);
  line[0] = students[0];
  let pre;

  for (let from = 1; from < 20; from++) {
    const curHeight = students[from];
    for (pre = from - 1; pre >= 0; pre--) {
      if (line[pre] > curHeight) {
        line[pre + 1] = line[pre];
        stepCnt++;
      } else break;
    }

    line[pre + 1] = curHeight;
  }

  ans.push([tNum, stepCnt].join(' '));
}

console.log(ans.join('\n'));