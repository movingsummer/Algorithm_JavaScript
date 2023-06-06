const [n, k] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(' ')
  .map((v) => +v);
const LlData = new Array(n + 1);
const LlNext = new Array(n + 1);
const ans = [];
let curIdx = 0;
for (let i = 1; i <= n; i++) {
  LlData[i] = i;
  LlNext[i] = i + 1;
}
LlNext[n] = 1;
LlNext[0] = 1;
while (ans.length !== n) {
  let preIdx;
  for (let i = 0; i < k; i++) {
    preIdx = curIdx;
    curIdx = LlNext[curIdx];
  }

  ans.push(LlData[curIdx]);
  LlNext[preIdx] = LlNext[curIdx];
}

console.log('<' + ans.join(', ') + '>');