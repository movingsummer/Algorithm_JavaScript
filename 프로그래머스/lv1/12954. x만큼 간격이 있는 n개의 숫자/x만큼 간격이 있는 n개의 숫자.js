function solution(x, n) {
    return new Array(n).fill(0).map((v, i) => x * (i + 1))
}