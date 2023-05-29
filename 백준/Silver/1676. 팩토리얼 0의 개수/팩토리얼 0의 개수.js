const n = BigInt(require('fs').readFileSync('/dev/stdin') + '');
let facN = 1n;
for (let i = n; i > 1n; i--) facN *= i;
let cnt = 0;
const ret = (facN + '').split('');
for (let i = ret.length - 1; i >= 0; i--) {
  if (ret[i] !== '0') break;
  cnt++;
}
console.log(cnt);