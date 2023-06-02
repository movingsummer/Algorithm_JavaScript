function solution(arr) {
    return arr.reduce((ans, v) => ans * v / gcd(ans, v), 1)
}

const gcd = (a, b) => a % b ? gcd(b, a % b) : b;