const [tStr, ...input] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
let t = +tStr;
let line = 0;
const ans = [];

while (t--) {
  const n = +input[line++] - 1;
  const calledNum = [];
  for (let i = 0; i < n + 1; i++) calledNum.push(+input[line++] - 1);
  const order = [];
  let idx = 0;
  for (let i = 0; i < n + 1; i++) {
    order.push(calledNum[idx]);
    idx = calledNum[idx];
  }

  let intendedNum = order.indexOf(n) + 1;
  ans.push(intendedNum);
}

console.log(ans.join('\n'));