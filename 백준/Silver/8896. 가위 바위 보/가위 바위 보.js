const [tStr, ...input] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);
let t = +tStr;
let line = 0;
const ans = [];

while (t--) {
  const robotNum = input[line++];
  const robotRPS = [];
  for (let i = 0; i < robotNum; i++) robotRPS.push(input[line++]);

  const check = Array.from({ length: robotRPS.length }, () => 0);
  const roundNum = robotRPS[0].length;
  for (let round = 0; round < roundNum; round++) {
    let winner;
    const tmp = new Set();

    for (let i = 0; i < robotRPS.length; i++) {
      if (check[i]) continue;

      tmp.add(robotRPS[i][round]);
    }

    if (tmp.size === 2) {
      if (!tmp.has('R')) winner = 'S';
      else if (!tmp.has('P')) winner = 'R';
      else winner = 'P';
    } else continue;

    for (let i = 0; i < robotRPS.length; i++)
      if (robotRPS[i][round] !== winner) check[i] = 1;
  }

  if (check.filter((v) => v === 0).length > 1) ans.push(0);
  else ans.push(check.indexOf(0) + 1);
}

console.log(ans.join('\n'));