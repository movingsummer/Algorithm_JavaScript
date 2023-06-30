const [n, k, a, b] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(' ')
  .map((v) => +v);
let day = 1;
let idx = 0;
const pot = new Array(n).fill(k);

a: while (true) {
  for (let i = idx; i < idx + a; i++) pot[i] += b;
  for (let i = 0; i < n; i++) {
    pot[i]--;
    if (pot[i] === 0) break a;
  }
  idx = (idx + a) % n;
  day++;
}

console.log(day);