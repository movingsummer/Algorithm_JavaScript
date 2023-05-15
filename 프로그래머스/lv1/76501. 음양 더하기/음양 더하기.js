function solution(absolutes, signs) {
    return absolutes.reduce((ret, v, i) => ret + v * (signs[i] ? 1 : -1), 0)
}