const input = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const n = +input[0];
const m = ~~(n / 2);
const s = input.slice(1).map((v) => v.split(' ').map((v2) => +v2));
const link = [];
const arr = Array.from(Array(n), (_, i) => i);
let ans = Infinity;

const f = (k, a) => {
  if (k === m) {
    let tot = 0;
    let tot2 = 0;
    const tmpArr = arr.filter((v) => !link.includes(v));
    for (let i = 0; i < m; i++) {
      for (let j = i + 1; j < m; j++) {
        tot += s[link[i]][link[j]] + s[link[j]][link[i]];
        tot2 += s[tmpArr[i]][tmpArr[j]] + s[tmpArr[j]][tmpArr[i]];
      }
    }

    const tmp = Math.abs(tot - tot2);
    if (tmp < ans) ans = tmp;
    return;
  }

  for (let i = a; i < n; i++) {
    link.push(i);
    f(k + 1, i + 1);
    link.pop();
  }
};

f(0, 0);
console.log(ans);