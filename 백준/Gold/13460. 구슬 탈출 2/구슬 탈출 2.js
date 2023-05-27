class Queue {
  #front;
  #rear;
  #arr;

  constructor() {
    this.#front = 0;
    this.#rear = 0;
    this.#arr = [];
  }

  push(data) {
    this.#arr.push(data);
    this.#rear++;
  }

  pop() {
    return this.#arr[this.#front++];
  }

  top() {
    return this.#arr[this.#front];
  }

  get length() {
    return this.#rear - this.#front;
  }
}

const [dx, dy] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];
const OOB = (x, y) => x < 0 || x >= n || y < 0 || y >= m;
const go = (x, y, dir, ax, ay) => {
  let flag = 0;

  while (
    !OOB(x + dx[dir], y + dy[dir]) &&
    board[x + dx[dir]][y + dy[dir]] !== '#'
  ) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (board[nx][ny] === 'O') return [-1, -1];
    if (nx === ax && ny === ay) flag = 1;
    x = nx;
    y = ny;
  }

  return [x - flag * dx[dir], y - flag * dy[dir]];
};
const [nm, ...board] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, m] = nm.split(' ').map((v) => +v);
let red, blue, dest;
let ans = -1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 'R') red = [i, j];
    if (board[i][j] === 'B') blue = [i, j];
    if (board[i][j] === 'O') dest = [i, j];
  }
}

const q = new Queue();
q.push([red[0], red[1], blue[0], blue[1], 0]);

a: while (q.length) {
  const cur = q.pop();
  if (cur[4] >= 10) break;
  for (let dir = 0; dir < 4; dir++) {
    const [rx, ry] = go(cur[0], cur[1], dir, cur[2], cur[3]);
    const [bx, by] = go(cur[2], cur[3], dir, cur[0], cur[1]);
    if (rx === -1 && ry === -1) {
      if (bx === -1 && by === -1) continue;
      else {
        ans = cur[4] + 1;
        break a;
      }
    }
    if (bx === -1 && by === -1) continue;
    q.push([rx, ry, bx, by, cur[4] + 1]);
  }
}

console.log(ans);