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

let ans = -1;
const [nm, ...b] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, m] = nm.split(' ').map((v) => +v);
const board = b.map((v) => v.split(''));
let red, blue, dest;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 'R') {
      red = [i, j];
      board[i][j] = '.';
    }
    if (board[i][j] === 'B') {
      blue = [i, j];
      board[i][j] = '.';
    }
    if (board[i][j] === 'O') dest = [i, j];
  }
}

const [dx, dy] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];
const q = new Queue();
const vis = Array.from(Array(n), () =>
  Array.from(Array(m), () => Array.from(Array(n), () => new Array(m).fill(0)))
);
q.push([red[0], red[1], blue[0], blue[1], 0]);
vis[red[0]][red[1]][blue[0]][blue[1]] = 1;

a: while (q.length) {
  const [rx, ry, bx, by, num] = q.pop();
  if (num >= 10) break;
  for (let dir = 0; dir < 4; dir++) {
    let [n_rx, n_ry, n_bx, n_by] = [rx, ry, bx, by];

    while (board[n_bx + dx[dir]][n_by + dy[dir]] === '.') {
      n_bx += dx[dir];
      n_by += dy[dir];
    }

    if (n_bx + dx[dir] === dest[0] && n_by + dy[dir] === dest[1]) continue;

    while (board[n_rx + dx[dir]][n_ry + dy[dir]] === '.') {
      n_rx += dx[dir];
      n_ry += dy[dir];
    }

    if (n_rx + dx[dir] === dest[0] && n_ry + dy[dir] === dest[1]) {
      ans = num + 1;
      break a;
    }

    if (n_rx === n_bx && n_ry === n_by) {
      if (dir === 0) rx > bx ? n_bx-- : n_rx--;
      else if (dir === 1) ry > by ? n_by-- : n_ry--;
      else if (dir === 2) rx < bx ? n_bx++ : n_rx++;
      else ry < by ? n_by++ : n_ry++;
    }

    if (vis[n_rx][n_ry][n_bx][n_by]) continue;
    q.push([n_rx, n_ry, n_bx, n_by, num + 1]);
    vis[n_rx][n_ry][n_bx][n_by] = 1;
  }
}

console.log(ans);