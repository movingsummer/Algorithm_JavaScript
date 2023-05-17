function solution(n) {
    if (n === 1) return 1;
    let ans = 1;
    const divisor = [];
    if (n % 2) ans++;
    
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            divisor.push(i)
            divisor.push(n / i);
            }
        if (i * i === n) divisor.pop();
    }
    
    return ans + divisor.filter(v=>v%2).length;
}