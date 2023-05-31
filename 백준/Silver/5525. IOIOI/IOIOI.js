let [n, m, str] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
[n, m] = [+n, +m];
let ans = 0;
let d = [];
let cnt = 0;
let mode = 0; // 0이면 보통, 1이면 탐색중

for (let i = 0; i < str.length; i++) {
  const c = str[i];

  if (mode === 1) {
    if (c !== str[i - 1]) {
      cnt++;
      if (cnt >= 3) {
        if (cnt % 2) d.push(~~((cnt - 3) / 2) + 1);
      }
    } else {
      if (c === 'O') {
        cnt = 0;
        mode = 0;
      } else if (c === 'I') {
        cnt = 1;
      }
      ans += d.filter((v) => v >= n).length;
      d = [];
    }
  } else if (mode === 0) {
    if (c === 'I') {
      mode = 1;
      cnt = 1;
    }
  }
}

ans += d.filter((v) => v >= n).length;
console.log(ans);