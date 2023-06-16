const [str1, str2] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(' ');
let ans = Infinity;

for (let i = 0; i <= str2.length - str1.length; i++) {
  let cnt = 0;
  for (let j = i; j < str1.length + i; j++) {
    if (str1[j - i] !== str2[j]) cnt++;
  }

  ans = Math.min(cnt, ans);
}

console.log(ans);