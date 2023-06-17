const [document, searchingWord] = (require('fs').readFileSync('/dev/stdin') + '')
  .trim()
  .split(/\r?\n/);

let ans = 0;
const wordLen = searchingWord.length;
for (let i = 0; i < document.length; i++) {
  if (document.slice(i, i + wordLen) === searchingWord) {
    ans++;
    i += wordLen - 1;
  }
}

console.log(ans);