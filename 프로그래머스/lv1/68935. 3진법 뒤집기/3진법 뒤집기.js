function solution(n) {
    return [...n.toString(3)].reduce((sum, v, i) => sum + v * (3 ** i), 0)
}