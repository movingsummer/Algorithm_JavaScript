const input = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, m] = input[0].split(' ').map((v) => +v);
const board = input.slice(1);
const WB = ['W', 'B'];
let answer = Infinity;

const f = (x, y) => {
  let ret = [];
  const rem = (x + y) % 2;

  for (let k = 0; k < 2; k++) {
    let ans = 0;
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if ((i + j) % 2 === rem && board[i][j] !== WB[k]) ans++;
        if ((i + j) % 2 !== rem && board[i][j] === WB[k]) ans++;
      }
    }
    ret.push(ans);
  }
  return Math.min(...ret);
};

for (let i = 0; i <= n - 8; i++)
  for (let j = 0; j <= m - 8; j++) answer = Math.min(answer, f(i, j));

console.log(answer);