function solution(x) {
    return !(x % (x + '').split('').reduce((s, v) => s + +v, 0))
}