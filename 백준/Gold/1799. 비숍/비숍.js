let func = (k, tot) => {
  if (k === 2 * n - 1) {
    ans = Math.max(ans, tot);
    return;
  }

  let [x, y] = coor[k];

  let flag = false;
  for (let i = 0; i < len[k]; i++, x--, y++) {
    if (!diag[x - y + 9] && !diag2[x + y] && board[x][y]) {
      diag[x - y + 9] = diag2[x + y] = 1;
      flag = true;
      func(k + 1, tot + 1);
      diag[x - y + 9] = diag2[x + y] = 0;
    }
  }

  if (!flag) func(k + 1, tot);
};

const input = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const n = +input[0];
const board = input.slice(1).map((v) => v.split(' ').map((v) => +v));
let ans = -1;
const diag = Array.from({ length: 2 * n - 1 }, () => 0);
const diag2 = Array.from({ length: 2 * n - 1 }, () => 0);
const len = Array.from({ length: n }, (v, i) => i + 1).concat(
  Array.from({ length: n - 1 }, (v, i) => n - i - 1)
);
const coor = Array.from({ length: n }, (v, i) => [i, 0]).concat(
  Array.from({ length: n - 1 }, (v, i) => [n - 1, i + 1])
);
func(0, 0);
console.log(ans);