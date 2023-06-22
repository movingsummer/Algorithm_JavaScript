const solution = () => {
  for (let i = 0; i < n; i++) {
    let [com, num] = commands[i].split(' ');
    num = +num;

    if (com === 'MOVE') {
      const [nx, ny] = [x + num * dx[dir], y + num * dy[dir]];
      if (OOB(nx, ny)) return -1;
      [x, y] = [nx, ny];
    } else {
      if (num === 1) dir = (dir + 1) % 4;
      else dir = (dir + 3) % 4;
    }
  }

  return [x, y].join(' ');
};

const OOB = (x, y) => x < 0 || x >= m || y < 0 || y >= m;

const [dx, dy] = [
  [1, 0, -1, 0],
  [0, -1, 0, 1],
];
const [mn, ...commands] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);

const [m, n] = mn.split(' ').map(Number);
let x = (y = 0);
let dir = 0;

console.log(solution());