const [[n], ...entryLog] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
const entry = Array.from({ length: 200000 }, () => 0);
let ans = 0;

entryLog.forEach((item) => {
  const [num, action] = item;
  ans += entry[num - 1] === action;
  entry[num - 1] = action;
});

ans += entry.filter((v) => v === 1).length;
console.log(ans);