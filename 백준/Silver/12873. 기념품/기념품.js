const n = +(require('fs').readFileSync('/dev/stdin') + '').trim();
const entry = Array.from(Array(n), (_, i) => i + 1);
let stage = 1;
let idx = 0;

while (entry.length > 1) {
  idx = (idx + stage ** 3 - 1) % entry.length;
  entry.splice(idx, 1);
  idx %= entry.length;
  stage++;
}

console.log(entry[0]);