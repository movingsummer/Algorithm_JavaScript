function solution(a, b) {
    return a.reduce((ret, v, i) => ret + v * b[i], 0)
}