const d = new Array(31).fill(1n);
let num = 1n;
for (let i = 2n; i <= 30n; i++) {
  num *= i;
  d[i] = num;
}

const [t, ...rem] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
console.log(
  rem.reduce((ans, e) => {
    const [r, n] = e.split(' ').map((v) => BigInt(v));
    const com = d[n] / (d[n - r] * d[r]);
    return ans + `${com.toString(10)}\n`;
  }, '')
);