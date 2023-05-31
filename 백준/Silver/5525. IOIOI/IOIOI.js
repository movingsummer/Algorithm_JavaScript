let [n, m, str] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
[n, m] = [+n, +m];

let [cnt, ans] = [0, 0];

for (let i = 1; i < m - 1; i++) {
  if (str[i - 1] === 'I' && str[i] === 'O' && str[i + 1] === 'I') {
    cnt++;
    i++;
    if (n === cnt) {
      ans++;
      cnt--;
    }
  } else {
    cnt = 0;
  }
}

console.log(ans);