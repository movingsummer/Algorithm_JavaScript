const keyMap = {
  q: [0, 0],
  w: [0, 1],
  e: [0, 2],
  r: [0, 3],
  t: [0, 4],
  y: [0, 5],
  u: [0, 6],
  i: [0, 7],
  o: [0, 8],
  p: [0, 9],
  a: [1, 0],
  s: [1, 1],
  d: [1, 2],
  f: [1, 3],
  g: [1, 4],
  h: [1, 5],
  j: [1, 6],
  k: [1, 7],
  l: [1, 8],
  z: [2, 0],
  x: [2, 1],
  c: [2, 2],
  v: [2, 3],
  b: [2, 4],
  n: [2, 5],
  m: [2, 6],
};
const [sLsR, str] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
let [lCoor, rCoor] = sLsR.split(' ').map((c) => keyMap[c]);
let time = 0;
str.split('').forEach((c) => {
  const [tx, ty] = keyMap[c];

  if (ty >= 5 || (tx === 2 && ty === 4)) {
    const [x, y] = rCoor;
    time += Math.abs(ty - y) + Math.abs(tx - x) + 1;
    rCoor = [tx, ty];
  } else {
    const [x, y] = lCoor;
    time += Math.abs(ty - y) + Math.abs(tx - x) + 1;
    lCoor = [tx, ty];
  }
});

console.log(time);