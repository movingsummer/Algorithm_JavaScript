const [tStr, ...input] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
let t = +tStr;
const ans = [];
let idx = 0;

while (t--) {
  const [n, m] = input[idx++].split(' ').map((v) => +v);
  const x = Number(input[idx++].split(' ').join(''));
  const y = Number(input[idx++].split(' ').join(''));
  const roulette = input[idx++].split(' ').map((v) => +v);
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    const numDigit = [];
    for (let j = 0; j < m; j++) numDigit.push(roulette[(i + j) % n]);

    const num = Number(numDigit.join(''));
    if (x <= num && num <= y) cnt++;
  }

  ans.push(cnt);
}

console.log(ans.join('\n'));