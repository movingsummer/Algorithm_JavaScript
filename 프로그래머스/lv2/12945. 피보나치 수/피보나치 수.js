function solution(n) {
    const d = new Array(n + 1).fill(0);
    const mod = 1234567;
    d[0] = 0;
    d[1] = 1;
    d[2] = 1;
    for (let i = 3; i <= n; i++)
        d[i] = d[i-1] % mod + d[i-2] % mod;
     
    return d[n] % mod
}