const n = +(require('fs').readFileSync('/dev/stdin') + '').trim();

let ans = 0;
let num = 666;

while (true) {
  if ((num + '').includes('666')) ans++;
  if (ans === n) break;
  num++;
}

console.log(num);