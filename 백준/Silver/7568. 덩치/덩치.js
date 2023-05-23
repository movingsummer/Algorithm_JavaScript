const input = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const n = +input[0];
const ans = [];
const arr = input.slice(1).map((v) => v.split(' ').map((v2) => +v2));

arr.forEach((v, i) => {
  const [w1, h1] = v;
  let tmp = 0;
  arr
    .filter((_, j) => i !== j)
    .forEach((v2) => {
      const [w2, h2] = v2;
      if (w1 < w2 && h1 < h2) tmp++;
    });
  ans.push(tmp + 1);
});

console.log(ans.join(' '));