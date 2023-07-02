const [[n, m], ...cards] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
const scores = Array.from({ length: n }, () => 0);

for (let i = 0; i < n; i++) cards[i].sort((a, b) => a - b);

for (let i = 0; i < m; i++) {
  const tmp = [];
  for (let j = 0; j < n; j++) {
    tmp.push(cards[j].pop());
  }

  const mx = Math.max(...tmp);
  for (let j = 0; j < n; j++) if (tmp[j] === mx) scores[j]++;
}

const ans = [];
const mxScore = Math.max(...scores);
for (let i = 0; i < n; i++) {
  if (scores[i] === mxScore) ans.push(i + 1);
}

console.log(ans.join(' '));