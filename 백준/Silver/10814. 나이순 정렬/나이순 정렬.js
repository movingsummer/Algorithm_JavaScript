console.log(
  (require('fs').readFileSync('/dev/stdin') + '')
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((v) => v.split(' '))
    .sort((a, b) => +a[0] - +b[0])
    .map((v) => v.join(' '))
    .join('\n')
);