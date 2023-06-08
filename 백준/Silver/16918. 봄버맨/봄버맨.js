const [dx, dy] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];
const OOB = (x, y) => x < 0 || y < 0 || x >= r || y >= c;
const boom = (x, y) => {
  for (let dir = 0; dir < 4; dir++) {
    const [nx, ny] = [x + dx[dir], y + dy[dir]];
    if (!OOB(nx, ny)) {
      board[nx][ny] = '.';
    }
  }
};
const traverse = (func) => {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      func(i, j);
    }
  }

  return;
};

const [rcn, ...b] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [r, c, n] = rcn.split(' ').map((v) => +v);
const board = b.map((v) => v.split(''));
const timer = Array.from(Array(r), () => new Array(c).fill(0));

traverse((i, j) => {
  if (board[i][j] === 'O') timer[i][j] = 2;
  return;
});

for (let time = 1; time < n; time++) {
  if (time % 2) {
    traverse((i, j) => {
      if (board[i][j] === '.') {
        board[i][j] = 'O';
        timer[i][j] = 3;
      } else {
        timer[i][j] -= 1;
      }
    });
  } else {
    traverse((i, j) => {
      if (timer[i][j] === 1) {
        board[i][j] = '.';
        boom(i, j);
      } else {
        timer[i][j] -= 1;
      }
    });
  }
}

console.log(board.map((v) => v.join('')).join('\n'));