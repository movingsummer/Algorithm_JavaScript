const OOB = (x, y) => x < 0 || x >= n || y < 0 || y >= m;
const getCross = (x, y) => {
  let size = 1;
  while (true) {
    for (let dir = 0; dir < 4; dir++) {
      let [nx, ny] = [x + size * dx[dir], y + size * dy[dir]];
      if (OOB(nx, ny) || board[nx][ny] === '.') return size - 1;
    }

    for (let dir = 0; dir < 4; dir++) {
      let [nx, ny] = [x + size * dx[dir], y + size * dy[dir]];
      checkBoard[nx][ny] = 0;
    }
    size++;
  }
};

const getAns = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (checkBoard[i][j]) return -1;
    }
  }

  return ans.length + '\n' + ans.join('\n');
};
const [nm, ...board] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, m] = nm.split(' ').map((v) => +v);
const [dx, dy] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];
const checkBoard = Array.from(Array(n), (_, i) =>
  new Array(m).fill(0).map((_, j) => (board[i][j] === '*' ? 1 : 0))
);
const ans = [];

for (let i = 1; i < n - 1; i++) {
  for (let j = 1; j < m - 1; j++) {
    if (board[i][j] === '*') {
      const crossSize = getCross(i, j);
      if (crossSize) {
        checkBoard[i][j] = 0;
        ans.push(`${i + 1} ${j + 1} ${crossSize}`);
      }
    }
  }
}

console.log(getAns());