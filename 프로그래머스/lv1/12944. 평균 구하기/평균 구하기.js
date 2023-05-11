function solution(arr) {
    return arr.reduce((s, v) => s + v, 0) / arr.length
}