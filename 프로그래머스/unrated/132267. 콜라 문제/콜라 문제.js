function solution(a, b, n) {
    if (n < a) return 0;
    if (n === a) return b;
    return solution(a, b, n % a + ~~(n / a) * b) + ~~(n / a) * b
}