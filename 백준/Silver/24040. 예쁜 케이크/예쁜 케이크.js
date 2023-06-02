const arr = ['NIE', 'TAK'];
const [t, ...nums] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
console.log(
  nums.reduce((ans, v) => {
    v = BigInt(v);
    let flag = 0;
    if (v % 3n === 2n) flag = 1;
    else if (v % 9n === 0n) flag = 1;
    return ans + arr[flag] + '\n';
  }, '')
);