function solution(X, Y) {
    const x = new Array(10).fill(0);
    const y = new Array(10).fill(0);
    
    for (const i of X) x[+i]++;
    for (const i of Y) y[+i]++;
    
    const common = x.map((v, i) => Math.min(v, y[i]));
    let ret = ''
    for (let i = 9; i >= 0; i--) ret += (i + '').repeat(common[i]);
    if (!ret.length) return '-1';
    if (ret[0] === ret[ret.length - 1] && ret[0] === '0') return '0';
    return ret
}