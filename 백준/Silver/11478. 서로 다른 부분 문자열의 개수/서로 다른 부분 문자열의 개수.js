const str = (require('fs').readFileSync('/dev/stdin') + '').trim();
const subStrings = new Set();

for (let subLen = 1; subLen <= str.length; subLen++) {
  for (let sIdx = 0; sIdx <= str.length - subLen; sIdx++)
    subStrings.add(str.slice(sIdx, sIdx + subLen));
}

console.log(subStrings.size);