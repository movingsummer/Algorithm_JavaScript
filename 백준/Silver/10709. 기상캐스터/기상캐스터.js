const [hw, ...JCity] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [h, w] = hw.split(' ').map((v) => +v);
const JCityMap = JCity.map((v) => v.split('').map((v) => (v === '.' ? -1 : 0)));

for (let i = 0; i < h; i++) {
  for (let j = 1; j < w; j++) {
    if (JCityMap[i][j - 1] !== -1 && JCityMap[i][j] !== 0)
      JCityMap[i][j] = JCityMap[i][j - 1] + 1;
  }
}

console.log(JCityMap.map((v) => v.join(' ')).join('\n'));
