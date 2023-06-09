const input = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);

const chessBoard = Array.from(Array(6), () => new Array(6).fill(0));
let ans = 'Valid';

let fXY = input[0].split('');
let [fX, fY] = [fXY[0].charCodeAt(0) - 65, +fXY[1] - 1];
chessBoard[fX][fY] = 1;
let [preX, preY] = [fX, fY];

for (let i = 1; i < 36; i++) {
  const xy = input[i].split('');
  const [x, y] = [xy[0].charCodeAt(0) - 65, +xy[1] - 1];
  if (
    Math.abs(x - preX) === 0 ||
    Math.abs(y - preY) === 0 ||
    Math.abs(x - preX) + Math.abs(y - preY) !== 3 ||
    chessBoard[x][y] === 1
  ) {
    ans = 'Invalid';
    break;
  }

  chessBoard[x][y] = 1;
  [preX, preY] = [x, y];
}

if (
  Math.abs(fX - preX) === 0 ||
  Math.abs(fY - preY) === 0 ||
  Math.abs(fX - preX) + Math.abs(fY - preY) !== 3
)
  ans = 'Invalid';

console.log(ans);