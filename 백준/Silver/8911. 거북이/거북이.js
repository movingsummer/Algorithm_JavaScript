const ans = [];
const [dx, dy] = [
  [0, 1, 0, -1],
  [1, 0, -1, 0],
];
const fb = { F: 1, B: -1 };
const [t, ...tc] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
tc.forEach((controls) => {
  let dir = 0;
  let curX = (curY = mnX = mnY = mxX = mxY = 0);
  controls.split('').forEach((operation) => {
    if (operation === 'R') dir = (dir + 1) % 4;
    else if (operation === 'L') dir = (dir + 3) % 4;
    else {
      const co = fb[operation];
      curX += co * dx[dir];
      curY += co * dy[dir];
    }

    if (mnX > curX) mnX = curX;
    if (mxX < curX) mxX = curX;
    if (mnY > curY) mnY = curY;
    if (mxY < curY) mxY = curY;
  });

  ans.push(Math.abs((mxX - mnX) * (mxY - mnY)));
});

console.log(ans.join('\n'));