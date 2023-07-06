const [lookingStr, numOfRings, ...strs] = (
  require('fs').readFileSync('/dev/stdin') + ''
)
  .trim()
  .split(/\r?\n/);
console.log(
  strs.reduce(
    (tot, cur) =>
      tot + (cur + cur.slice(0, cur.length - 1)).includes(lookingStr),
    0
  )
);
