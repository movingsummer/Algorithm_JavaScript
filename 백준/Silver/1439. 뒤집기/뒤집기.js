const str = (require('fs').readFileSync('/dev/stdin') + '').trim();
let pre = -1;
const ans = [0, 0];
for (let i = 0; i < str.length; i++) {
  if (pre !== str[i]) ans[+str[i]]++;
  pre = str[i];
}

console.log(Math.min(...ans));