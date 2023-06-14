const n = (require('fs').readFileSync('/dev/stdin') + '').trim();

const solution = (n) => {
  let cnt = 0;
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += +n[i];
    cnt += n[i] === '0';
  }

  if (cnt === 0 || sum % 3 !== 0) return -1;

  return n
    .split('')
    .sort((a, b) => b.localeCompare(a))
    .join('');
};

console.log(solution(n));