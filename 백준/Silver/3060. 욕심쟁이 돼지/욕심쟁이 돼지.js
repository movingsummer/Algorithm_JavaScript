const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const sumNxt = (v, pigMeal) =>
    pigMeal[pre(v)] + pigMeal[nxt(v)] + pigMeal[opp(v)];

  const pre = (v) => (v + 5) % 6;
  const nxt = (v) => (v + 1) % 6;
  const opp = (v) => (v + 3) % 6;

  const [tStr, ...ipt] = input;
  let t = +tStr;
  const ans = [];
  let line = 0;

  while (t--) {
    let day = 1;
    const n = +ipt[line++];
    let pigMeal = ipt[line++].split(' ').map((v) => +v);

    while (n >= pigMeal.reduce((tot, v) => tot + v, 0)) {
      day++;
      let newPigMeal = pigMeal.map((v, i) => sumNxt(i, pigMeal) + v);
      pigMeal = newPigMeal;
    }

    ans.push(day);
  }

  console.log(ans.join('\n'));

  process.exit();
});