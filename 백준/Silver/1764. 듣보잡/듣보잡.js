const [nm, ...names] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [n, m] = nm.split(' ').map((v) => +v);
const isThereName = new Set();
const ans = [];
for (let line_i = 0; line_i < n; line_i++) isThereName.add(names[line_i]);

for (let line_i = n; line_i < n + m; line_i++)
  if (isThereName.has(names[line_i])) ans.push(names[line_i]);

console.log(`${ans.length}
${ans.sort().join('\n')}`);