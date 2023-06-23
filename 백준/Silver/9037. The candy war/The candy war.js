const [strT, ...input] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const ans = [];
let t = +strT;
let line = 0;

while (t--) {
  const n = +input[line++];
  let candies = input[line++].split(' ').map((v) => +v);
  let cnt = 0;
  candies = candies.map((v) => (v % 2 ? v + 1 : v));

  while (!candies.every((v) => v === candies[0])) {
    const cpyCandies = Array.from(candies);

    for (let i = 0; i < n; i++) {
      candies[i] = ~~(cpyCandies[i] / 2);
      candies[i] += ~~(cpyCandies[(i + n - 1) % n] / 2);
    }
    candies = candies.map((v) => (v % 2 ? v + 1 : v));
    cnt++;
  }

  ans.push(cnt);
}

console.log(ans.join('\n'));