const exp = (require('fs').readFileSync('/dev/stdin') + '').trim();
let mode = 1;
let numStack = [];
let ans = 0;

exp.split('').forEach((c) => {
  if (c === '-') {
    ans += mode * Number(numStack.join(''));
    numStack = [];
    mode = -1;
  } else if (c === '+') {
    ans += mode * Number(numStack.join(''));
    numStack = [];
  } else {
    numStack.push(c);
  }
});

ans += mode * Number(numStack.join(''));
console.log(ans);