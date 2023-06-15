const str = (require('fs').readFileSync('/dev/stdin') + '').trim();
const ans = [];

for (let i = 0; i < str.length; i++) {
  const c = str[i];
  if (c === '<') {
    const tag = [];
    while (str[i] !== '>') {
      tag.push(str[i++]);
    }
    tag.push('>');
    ans.push(tag.join(''));
  } else {
    let revStr = [];
    while (i < str.length && str[i + 1] !== '<' && str[i + 1] !== ' ') {
      revStr.push(str[i++]);
    }
    revStr.push(str[i]);
    revStr = revStr.reverse();
    if (str[i + 1] === ' ') {
      revStr.push(' ');
      i++;
    }
    ans.push(revStr.join(''));
  }
}

console.log(ans.join(''));