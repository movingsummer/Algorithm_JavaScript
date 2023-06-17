const [str, idx] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);

console.log(str[idx - 1]);