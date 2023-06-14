const str = (require('fs').readFileSync('/dev/stdin') + '').trim();
const suffixes = [];
for (let i = 0; i < str.length; i++) suffixes.push(str.slice(i));
console.log(suffixes.sort().join('\n'));