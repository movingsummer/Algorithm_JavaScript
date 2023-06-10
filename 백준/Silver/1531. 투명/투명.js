const [[n, m], ...papers] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
const picture = Array.from(Array(100), () => new Array(100).fill(0));

papers.forEach((coors) => {
  const [fromX, fromY, toX, toY] = coors.map((v) => v - 1);
  for (let i = fromY; i <= toY; i++) {
    for (let j = fromX; j <= toX; j++) picture[i][j]++;
  }
});

console.log(
  picture.reduce((tot, item) => tot + item.filter((v) => v > m).length, 0)
);
