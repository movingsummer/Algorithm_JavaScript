const checkUCPC = (startIdx) => {
  let targetIdx = 0;
  for (let i = startIdx; i < stack.length; i++) {
    const target = UCPC[targetIdx];
    if (stack[i] === target) targetIdx++;
    if (targetIdx > 3) {
      flag = true;
      return true;
    }
  }

  return false;
}
const str = (require('fs').readFileSync('/dev/stdin') + '').trim();
const UCPC = 'UCPC'.split('');
const stack = [];
str.split('').forEach((v) => {
  if (v === 'U') stack.push(v);
  if (v === 'C') stack.push(v);
  if (v === 'P') stack.push(v);
});

let flag = false;

for (let i = 0; i < stack.length; i++) {
  if (stack[i] === 'U' && checkUCPC(i)) break; 
}

if (flag) console.log('I love UCPC');
else console.log('I hate UCPC');