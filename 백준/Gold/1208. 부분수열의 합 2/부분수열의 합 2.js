let func1 = (k, sum) => {
  if (k === part1.length) {
    sumSet.has(sum) ? sumSet.set(sum, sumSet.get(sum) + 1) : sumSet.set(sum, 1);
    return;
  }

  func1(k + 1, sum);
  func1(k + 1, sum + part1[k]);
};

let func2 = (k, sum) => {
  if (k === part2.length) {
    if (sumSet.has(s - sum)) ans += sumSet.get(s - sum);
    return;
  }

  func2(k + 1, sum);
  func2(k + 1, sum + part2[k]);
};

const [[n, s], arr] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v) => +v));

let ans = 0;
const part1 = arr.slice(0, Math.floor(n / 2));
const part2 = arr.slice(Math.floor(n / 2));
const sumSet = new Map();
func1(0, 0);
func2(0, 0);
if (s === 0) ans--;
console.log(ans);