const solution = () => {
  const wheel = new Array(n).fill(0);
  const overCheck = new Array(26).fill(0);
  let curIdx = 0;

  for (let i = 0; i < rotations.length; i++) {
    const item = rotations[i];
    const [numOfC, c] = item.split(' ');
    curIdx = (curIdx + +numOfC) % n;

    if (
      (wheel[curIdx] && wheel[curIdx] !== c) ||
      (wheel[curIdx] === 0 && overCheck[c.charCodeAt(0) - 65])
    )
      return '!';
    else {
      wheel[curIdx] = c;
      overCheck[c.charCodeAt(0) - 65] = 1;
    }
  }

  return wheel
    .slice(0, curIdx + 1)
    .reverse()
    .concat(wheel.slice(curIdx + 1).reverse())
    .map((v) => (v ? v : '?'))
    .join('');
};

const [nk, ...rotations] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);

const [n, k] = nk.split(' ').map((v) => +v);

console.log(solution());