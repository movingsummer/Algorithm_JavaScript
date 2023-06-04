let [numOfSwitch, switches, numOfStudent, ...students] = (
  require('fs').readFileSync('/dev/stdin') + ''
)
  .trim()
  .split(/\r?\n/);
numOfSwitch = +numOfSwitch;
switches = switches.split(' ').map((v) => +v);
students.forEach((e) => {
  const [sex, takenNum] = e.split(' ').map((v) => +v);
  if (sex === 1) {
    for (let i = takenNum; i <= numOfSwitch; i += takenNum) {
      switches[i - 1] = !switches[i - 1];
    }
  } else {
    if (takenNum === 1 || takenNum === numOfSwitch)
      switches[takenNum - 1] = !switches[takenNum - 1];
    else {
      let pre = (nxt = takenNum);
      while (
        pre - 1 >= 1 &&
        nxt + 1 <= numOfSwitch &&
        switches[pre - 2] == switches[nxt]
      ) {
        pre--;
        nxt++;
      }

      for (let i = pre; i <= nxt; i++) switches[i - 1] = !switches[i - 1];
    }
  }
});

const ans = [];
while (switches.length) {
  ans.push(
    switches
      .splice(0, 20)
      .map((v) => (v ? 1 : 0))
      .join(' ')
  );
}

console.log(ans.join('\n'));