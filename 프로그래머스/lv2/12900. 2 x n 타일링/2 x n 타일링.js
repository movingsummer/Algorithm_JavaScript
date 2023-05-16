function solution(n) {
    const d = new Array(n + 1);
    const mod = 1000000007;
    d[1] = 1;
    d[2] = 2;
    for (let i = 3; i <= n; i++)
        d[i] = d[i - 1] % mod + d[i - 2] % mod;
    
    return d[n] % mod;
}