const [nm, ...strings] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, m] = nm.split(' ').map((v) => +v);
const stringSet = new Set();
let ans = 0;

for (let i = 0; i < n; i++) stringSet.add(strings[i]);

for (let i = n; i < n + m; i++) ans += stringSet.has(strings[i]);

console.log(ans);