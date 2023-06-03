const [t, ...rem] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const ans = [];
let tc = t;
let line = 0;

while (tc--) {
  const [x1, y1, x2, y2] = rem[line].split(' ').map((v) => +v);
  const n = +rem[line + 1];
  const planets = rem.slice(line + 2, line + 2 + n);
  let cnt = 0;
  line += 2 + n;

  planets.forEach((item) => {
    const [cx, cy, r] = item.split(' ').map((v) => +v);
    const d1 = Math.sqrt((cx - x2) ** 2 + (cy - y2) ** 2); // 출발점, 해당 원 거리
    const d2 = Math.sqrt((x1 - cx) ** 2 + (y1 - cy) ** 2); // 도착점. 해당 원 거리
    if (!(d1 < r && d2 < r)) {
      if (d1 < r) cnt++;
      if (d2 < r) cnt++;
    }
  });

  ans.push(cnt);
}

console.log(ans.join('\n'));