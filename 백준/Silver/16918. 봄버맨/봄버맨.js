const [rcn, ...initial] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [r, c, n] = rcn.split(' ').map((v) => +v);
const allBomb = ('O'.repeat(c) + '\n').repeat(r - 1) + 'O'.repeat(c);
const initialBomb = allBomb.split(/\r?\n/).map((v) => v.split(''));

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (initial[i][j] === 'O') {
      initialBomb[i][j] = '.';
      if (i - 1 >= 0) initialBomb[i - 1][j] = '.';
      if (i + 1 < r) initialBomb[i + 1][j] = '.';
      if (j - 1 >= 0) initialBomb[i][j - 1] = '.';
      if (j + 1 < c) initialBomb[i][j + 1] = '.';
    }
  }
}
const initialMap = initial.join('\n');
const afterBoom = initialBomb.map((v) => v.join('')).join('\n');
const afterx2Boom = allBomb.split(/\r?\n/).map((v) => v.split(''));

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (initialBomb[i][j] === 'O') {
      afterx2Boom[i][j] = '.';
      if (i - 1 >= 0) afterx2Boom[i - 1][j] = '.';
      if (i + 1 < r) afterx2Boom[i + 1][j] = '.';
      if (j - 1 >= 0) afterx2Boom[i][j - 1] = '.';
      if (j + 1 < c) afterx2Boom[i][j + 1] = '.';
    }
  }
}

const afterx2BoomMap = afterx2Boom.map((v) => v.join('')).join('\n');

if (n === 1) console.log(initialMap);
else if (n % 2 === 0) console.log(allBomb);
else if (n % 4 === 1) console.log(afterx2BoomMap);
else console.log(afterBoom);