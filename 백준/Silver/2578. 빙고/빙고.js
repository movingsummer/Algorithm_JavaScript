const input = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const bingoBoard = input.slice(0, 5).map((v) => v.split(' ').map((v2) => +v2));
const bingoCoor = new Map();

const rowScore = Array.from(Array(5), () => 0);
const colScore = Array.from(Array(5), () => 0);
const diagScore = Array.from(Array(2), () => 0);

let cnt = 0;

for (let i = 0; i < 5; i++) {
  const row = input[i].split(' ');
  for (let j = 0; j < 5; j++) {
    const v = +row[j];
    bingoCoor.set(v, [i, j]);
  }
}

a: for (let i = 5; i < 10; i++) {
  const row = input[i].split(' ');
  for (let j = 0; j < 5; j++) {
    const v = +row[j];
    const [bi, bj] = bingoCoor.get(v);
    rowScore[bi] += 1;
    colScore[bj] += 1;
    if (bi === bj) {
      diagScore[0] += 1;
      if (diagScore[0] === 5) cnt++;
    }
    if (bi + bj === 4) {
      diagScore[1] += 1;
      if (diagScore[1] === 5) cnt++;
    }

    cnt += (rowScore[bi] === 5) + (colScore[bj] === 5);

    if (cnt >= 3) {
      console.log((i - 5) * 5 + (j + 1));
      break a;
    }
  }
}