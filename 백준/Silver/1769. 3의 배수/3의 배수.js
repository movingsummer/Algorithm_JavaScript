const solution = (X, cnt) => {
  if (X.length === 1) {
    if (Number(X) % 3) console.log(String(cnt) + '\n' + 'NO');
    else console.log(String(cnt) + '\n' + 'YES');
    return;
  }
  solution(String(X.split('').reduce((tot, v) => tot + +v, 0)), cnt + 1);
};
const X = (require('fs').readFileSync('/dev/stdin') + '').trim();
solution(X, 0);