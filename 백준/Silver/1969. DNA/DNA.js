const [nm, ...DNAs] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, m] = nm.split(' ').map((v) => +v);
const ans1 = [];
let ans2 = 0;
for (let i = 0; i < m; i++) {
  const ac_counting = new Map();
  for (let j = 0; j < n; j++)
    ac_counting.set(DNAs[j][i], ac_counting.get(DNAs[j][i]) + 1 || 1);

  const hamDNA = Array.from(ac_counting).sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
  );

  ans1.push(hamDNA[0][0]);
  ans2 += n - hamDNA[0][1];
}

console.log(ans1.join('') + '\n' + ans2);