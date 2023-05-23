const [[n, m], arr] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));

let st = 1;
let en = 2000000000;

while (st < en) {
  const mid = ~~((st + en) / 2);
  const sum = arr.reduce((tot, v) => (v - mid > 0 ? tot + v - mid : tot), 0);
  if (sum < m) en = mid;
  else st = mid + 1;
}

console.log(st - 1);