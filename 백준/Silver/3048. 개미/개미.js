const [n1n2, group1, group2, tStr] = (
  require('fs').readFileSync('/dev/stdin') + ''
)
  .trim()
  .split(/\r?\n/);
const [n1, n2] = n1n2.split(' ').map((v) => +v);
const t = +tStr;
const ans = group1
  .split('')
  .map((v) => [v, 1])
  .reverse()
  .concat(group2.split('').map((v) => [v, 2]));

for (let i = 0; i < t; i++) {
  for (let idx = 0; idx < n1 + n2 - 1; idx++) {
    if (ans[idx][1] < ans[idx + 1][1]) {
      const tmp = ans[idx];
      ans[idx] = ans[idx + 1];
      ans[idx + 1] = tmp;
      idx++;
    }
  }
}

console.log(ans.map((v) => v[0]).join(''));