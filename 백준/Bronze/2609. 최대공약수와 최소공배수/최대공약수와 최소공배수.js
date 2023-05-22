const [n, m] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(' ')
  .map((v) => +v);
const GCD = (n, m) => {
  if (m === 0) return n;
  return GCD(m, n % m);
};

const ret = GCD(n, m);
console.log(ret);
console.log(~~(n * m) / ret);