const d = ['D', 'C', 'B', 'A', 'E'];
const ans = [];

(require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .forEach((v) => {
    ans.push(d[v.split(' ').reduce((tot, v) => tot + +v, 0)]);
  });

console.log(ans.join('\n'));