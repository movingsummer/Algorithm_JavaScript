const [[n], menuNum] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));

let mx = -1;
const menuBoard = new Array(n + 1).fill(0);
let cnt = 0;

menuNum.forEach((v) => {
  menuBoard[v]++;
  if (menuBoard[v] === 1) cnt++;
  if (menuBoard[v] === 2) cnt--;

  mx = Math.max(mx, cnt);
});

console.log(mx);