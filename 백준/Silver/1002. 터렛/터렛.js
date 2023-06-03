const [t, ...cases] = (require('fs').readFileSync('/dev/stdin') + '').trim().split(/\r?\n/);
const ans = [];

cases.forEach((item) => {
    const [x1, y1, r1, x2, y2, r2] = item.split(' ').map(v=>+v);
    const c = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const r2mr1 = Math.abs(r2 - r1);
    const r2pr1 = r1 + r2;
    
    if (c === 0 && r2mr1 === 0) ans.push(-1);
    else if (r2mr1 < c) {
        if (r2pr1 > c) ans.push(2);
        else if (r2pr1 < c) ans.push(0);
        else ans.push(1);
    }
    else {
        if (r2mr1 > c) ans.push(0);
        else ans.push(1);
    }
})

console.log(ans.join('\n'))