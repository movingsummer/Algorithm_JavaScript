const [coors, ...moving] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const coorsArray = coors.split(' ');
const dirs = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1],
};
let [ky, kx] = [+coorsArray[0][1] - 1, coorsArray[0][0].charCodeAt(0) - 65];
let [sy, sx] = [+coorsArray[1][1] - 1, coorsArray[1][0].charCodeAt(0) - 65];

moving.forEach((move) => {
  const [dx, dy] = dirs[move];
  if (kx + dx < 8 && ky + dy < 8 && kx + dx >= 0 && ky + dy >= 0) {
    kx += dx;
    ky += dy;
  }

  if (kx === sx && ky === sy) {
    if (sx + dx < 8 && sy + dy < 8 && sx + dx >= 0 && sy + dy >= 0) {
      sx += dx;
      sy += dy;
    } else {
      kx -= dx;
      ky -= dy;
    }
  }
});

console.log(String.fromCharCode(kx + 65) + (ky + 1));
console.log(String.fromCharCode(sx + 65) + (sy + 1));