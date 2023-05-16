function solution(n) {
    return n ? solution(~~((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3] : ''
}
