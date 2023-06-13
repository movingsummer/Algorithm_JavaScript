const [[n, l], ...trafficLights] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(' ').map((v2) => +v2));
let curTime = 0;
let pre = 0;
let additonalTime = 0;

trafficLights.forEach((item) => {
  const [disFromStart, redCycle, greenCycle] = item;
  const cycleSum = redCycle + greenCycle;
  curTime += disFromStart - pre;
  pre = disFromStart;
  const d = redCycle - (curTime % cycleSum);

  if (d > 0) {
    curTime += d;
    additonalTime += d;
  }
});

console.log(additonalTime + l);