const [dy, dx] = [
  [0, -1, 0, 1],
  [1, 0, -1, 0],
];

const MakeDC = (x, y, dir, g, targetG) => {
  if (g === targetG) return;

  const [nextX, nextY, nextDir] = Go(x, y, dir);
  MakeDC(nextX, nextY, nextDir, g + 1, targetG);
}; // dir을 배열의 형식으로 받을 것!

const Go = (x, y, dirArr) => {
  const predirArr = Array.from(dirArr);
  dirArr.reverse();
  dirArr = dirArr.map((v) => (v + 1) % 4);
  let [nx, ny] = [x, y];

  dirArr.forEach((dir) => {
    nx += dx[dir];
    ny += dy[dir];
    board[ny][nx] = 1;
  });

  return [nx, ny, predirArr.concat(dirArr)];
};

const dragonCurve = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .slice(1);
const board = Array.from({ length: 101 }, () => new Array(101).fill(0));
let ans = 0;

dragonCurve.forEach((item) => {
  const [fromX, fromY, dir, g] = item.split(' ').map((v) => +v);
  board[fromY][fromX] = 1;
  board[fromY + dy[dir]][fromX + dx[dir]] = 1;
  MakeDC(fromX + dx[dir], fromY + dy[dir], [dir], 0, g);
});

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    if (
      (board[i][j] &
        board[i - 1][j] &
        board[i][j - 1] &
        board[i - 1][j - 1]) ===
      1
    )
      ans++;
  }
}

console.log(ans);