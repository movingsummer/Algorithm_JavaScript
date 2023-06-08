const [n, Movings] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [dx, dy] = [
  [0, -1, 0, 1],
  [-1, 0, 1, 0],
]; // +1은 시계방향
const maze = Array.from(Array(103), () => new Array(103).fill(0));
maze[51][51] = 1;
let [hx, hy] = [51, 51];
let dir = 0;
let [maxHx, minHx, maxHy, minHy] = [51, 51, 51, 51];
Movings.split('').forEach((action) => {
  if (action === 'F') {
    hx += dx[dir];
    hy += dy[dir];
    if (maxHx < hx) maxHx = hx;
    if (minHx > hx) minHx = hx;
    if (maxHy < hy) maxHy = hy;
    if (minHy > hy) minHy = hy;
    maze[hx][hy] = 1;
  } else if (action === 'R') dir = (dir + 1) % 4;
  else dir = (dir + 3) % 4;
});

let ans = '';

for (let i = maxHy; i >= minHy; i--) {
  for (let j = minHx; j <= maxHx; j++) {
    if (maze[j][i]) ans += '.';
    else ans += '#';
  }
  ans += '\n';
}
console.log(ans);