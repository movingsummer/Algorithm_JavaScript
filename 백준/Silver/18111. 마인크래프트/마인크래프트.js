const input = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, m, b] = input[0].split(' ').map((v) => +v);
const board = input.slice(1).map((v) => v.split(' ').map((v2) => +v2));
const totalHeight = board.reduce(
  (tot, v) => tot + v.reduce((tot2, v2) => tot2 + v2, 0),
  0
);

let ans = Infinity;
let ans2 = 0;

for (let i = 0; i <= 256; i++) {
  const h = i;
  if (b + totalHeight < n * m * h) break;
  let sec = 0;

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (board[j][k] > h) sec += 2 * (board[j][k] - h);
      else if (board[j][k] < h) sec += h - board[j][k];
    }
  }

  if (ans >= sec) {
    ans = sec;
    ans2 = h;
  }
}

console.log(`${ans} ${ans2}`);