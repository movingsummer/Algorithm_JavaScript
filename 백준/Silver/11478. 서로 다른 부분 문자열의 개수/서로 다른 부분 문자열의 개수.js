const str = (require('fs').readFileSync('/dev/stdin') + '').trim();
const subStrings = [];

for (let subLen = 1; subLen <= str.length; subLen++) {
  for (let sIdx = 0; sIdx <= str.length - subLen; sIdx++)
    subStrings.push(str.slice(sIdx, sIdx + subLen));
}

console.log(new Set(subStrings).size);