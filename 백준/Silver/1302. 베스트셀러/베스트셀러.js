const [n, ...books] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const sVolume = new Map();
books.forEach((bookName) => {
  const volume = sVolume.get(bookName);
  sVolume.set(bookName, volume + 1 || 0);
});

console.log(
  Array.from(sVolume).sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
  )[0][0]
);