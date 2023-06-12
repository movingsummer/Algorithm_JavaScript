const [rc, ...landStr] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const land = landStr.map((v) => v.split(''));
const [r, c] = rc.split(' ').map((v) => +v);
let mnX = (mnY = Infinity);
let mxX = (mxY = -1);
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (land[i][j] === 'X') {
      let cnt = 0;

      if (i - 1 < 0 || landStr[i - 1][j] === '.') cnt++;
      if (i + 1 >= r || landStr[i + 1][j] === '.') cnt++;
      if (j - 1 < 0 || landStr[i][j - 1] === '.') cnt++;
      if (j + 1 >= c || landStr[i][j + 1] === '.') cnt++;

      if (cnt < 3) {
        mnX = Math.min(mnX, i);
        mnY = Math.min(mnY, j);
        mxX = Math.max(mxX, i);
        mxY = Math.max(mxY, j);
      } else {
        land[i][j] = '.';
      }
    }
  }
}

console.log(
  land
    .slice(mnX, mxX + 1)
    .map((v) => v.slice(mnY, mxY + 1).join(''))
    .join('\n')
);