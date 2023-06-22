const [nk, ...nameCall] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, k] = nk.split(' ').map((v) => +v);
const linkedList = new Array(n).fill(0);
const order = [-1];

nameCall.forEach((v, i) => {
  linkedList[i] = +v;
});

let idx = 0;
for (let i = 0; i < n; i++) {
  order.push(linkedList[idx]);
  idx = linkedList[idx];
}

console.log(order.indexOf(k));