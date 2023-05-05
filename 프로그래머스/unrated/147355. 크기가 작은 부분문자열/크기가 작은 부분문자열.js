function solution(t, p) {
    const num = +p;
    const len = p.length;
    let ans = 0;
    
    for (let i = 0; i < t.length - len + 1; i++) {
        const tmp = Number(t.slice(i, i + len));
        num >= tmp && ans++; 
    }
    
    return ans;
}