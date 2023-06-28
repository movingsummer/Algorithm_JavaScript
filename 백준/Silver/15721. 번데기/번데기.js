const [a, t, calling] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => +v);
const gameWord = [0, 1, 0, 1, 0, 1];
let callingCnt = 0;
let curNum = 0;
let idx = 0;
let inning = 1;
let cnt = 0;

while (t !== callingCnt) {
  if (idx < 4) {
    if (gameWord[idx] === calling) callingCnt++;
    curNum = (curNum + 1) % a;
    idx++;
  } else {
    if (idx === 4) {
      if (0 === calling) callingCnt++;
      curNum = (curNum + 1) % a;
      cnt++;
      if (cnt === inning + 1) {
        idx++;
        cnt = 0;
      }
    } else {
      if (1 === calling) callingCnt++;
      curNum = (curNum + 1) % a;
      cnt++;
      if (cnt === inning + 1) {
        idx = 0;
        cnt = 0;
        inning++;
      }
    }
  }
}

console.log((curNum + a - 1) % a);