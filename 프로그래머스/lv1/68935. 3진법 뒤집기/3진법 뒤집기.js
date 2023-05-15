function solution(n) {
    const t = [];
    while (n > 0) {
        t.push(n % 3);
        n = ~~(n / 3);
    }
    
    return t.reverse().reduce((sum, v, i) => sum + v * (3 ** i), 0)
}