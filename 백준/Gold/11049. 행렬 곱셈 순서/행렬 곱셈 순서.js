const [[n], ...mat] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
const d = Array.from(Array(n), () => new Array(n).fill(0));
for (let i = 0; i < n - 1; i++) {
  const [x, y] = mat[i];
  const z = mat[i + 1][1];
  d[i][i + 1] = x * y * z;
}

for (let di = 2; di < n; di++) {
  for (let i = 0; i < n - di; i++) {
    let tmp = 0;
    let mn = Infinity;
    while (i + 1 + tmp <= i + di) {
      const sum1 = d[i][i + tmp];
      const sum2 = d[i + 1 + tmp][i + di];
      const [x, y, z] = [mat[i][0], mat[i + 1 + tmp][0], mat[i + di][1]];
      const nsum = sum1 + sum2 + x * y * z;
      if (mn > nsum) {
        mn = nsum;
      }
      tmp++;
    }

    d[i][i + di] = mn;
  }
}

console.log(d[0][n - 1]);