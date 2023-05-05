function solution(t, p) {
    let ans = 0;
    for (let i = 0; i < t.length - p.length + 1; i++)
        +p >= +t.slice(i, i + p.length) && ans++; 
    return ans;
}