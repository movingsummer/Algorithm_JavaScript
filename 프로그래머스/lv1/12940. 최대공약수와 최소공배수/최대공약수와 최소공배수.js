function solution(n, m) {
    const GCD = (a, b) => {
        if (b === 0) return a;
        return GCD(b, a % b)
    }
    
    const ret = GCD(n, m);
    return [ret, n * m / ret]
}