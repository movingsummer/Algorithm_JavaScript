const [hw, ...JCity] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
const [h, w] = hw.split(' ').map((v) => +v);
const JCityMap = JCity.map((v) => v.split(''));

for (let i = 0; i < h; i++) {
  let cnt = -1;
  for (let j = 0; j < w; j++) {
    if (JCityMap[i][j] === '.') {
      if (cnt === -1) JCityMap[i][j] = -1;
      else JCityMap[i][j] = cnt++;
    } else {
      cnt = 0;
      JCityMap[i][j] = cnt++;
    }
  }
}

console.log(JCityMap.map((v) => v.join(' ')).join('\n'));