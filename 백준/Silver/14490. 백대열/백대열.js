const [n, m] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(':')
  .map((v) => +v);
const GCD = (a, b) => {
  while (b) {
    const tmp = a;
    a = b;
    b = tmp % b;
  }

  return a;
};

const GCDNum = GCD(n, m);
console.log(n / GCDNum + ':' + m / GCDNum);