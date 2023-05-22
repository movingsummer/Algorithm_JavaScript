const [n, m] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(' ')
  .map((v) => +v);
const GCD = (n, m) => {
  let nm;
  for (nm = m * n; m; tmp = m, m = n % m, n = tmp) {}
  return [n, ~~(nm / n)];
};

console.log(GCD(n, m).join('\n'));