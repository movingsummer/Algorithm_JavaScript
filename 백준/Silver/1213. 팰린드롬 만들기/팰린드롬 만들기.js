const solution = () => {
  let ans = [];
  let oddIdx = -1;

  eName.split('').forEach((c) => {
    numOfAl[c.charCodeAt(0) - 65]++;
  });

  for (let i = 0; i < 26; i++) {
    if (numOfAl[i] % 2) {
      if (oddIdx === -1) oddIdx = i;
      else return "I'm Sorry Hansoo";
    }

    for (let j = 0; j < ~~(numOfAl[i] / 2); j++)
      ans.push(String.fromCharCode(i + 65));
  }

  const ansR = Array.from(ans).reverse();
  if (oddIdx !== -1) {
    ans.push(String.fromCharCode(oddIdx + 65));
  }
  return ans.concat(ansR).join('');
};

const eName = (require('fs').readFileSync('/dev/stdin') + '').trim();
const numOfAl = new Array(26).fill(0);
console.log(solution());