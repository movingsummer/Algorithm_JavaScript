const [str1, str2] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(' ');
let ans = Infinity;

for (let i = 0; i <= str2.length - str1.length; i++) {
  let cnt = 0;
  for (let j = 0; j < str1.length; j++) {
    if (str1[j] !== str2[i + j]) cnt++;
  }

  ans = Math.min(cnt, ans);
}

console.log(ans);