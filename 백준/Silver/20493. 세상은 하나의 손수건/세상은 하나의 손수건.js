const [nt, ...oper] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, t] = nt.split(' ').map((v) => +v);
let [x, y] = [0, 0];
const [dx, dy] = [
  [1, 0, -1, 0],
  [0, 1, 0, -1],
];
let [curTime, curDir] = [0, 0];
oper.forEach((item) => {
  const [timing, dir] = item.split(' ');
  x += (timing - curTime) * dx[curDir];
  y += (timing - curTime) * dy[curDir];
  curTime = +timing;
  curDir = (curDir + 4 + (dir === 'left' ? 1 : -1)) % 4;
});
x += (+t - curTime) * dx[curDir];
y += (+t - curTime) * dy[curDir];
console.log(x, y);