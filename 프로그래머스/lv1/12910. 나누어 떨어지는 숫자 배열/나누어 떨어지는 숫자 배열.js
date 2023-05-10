function solution(arr, divisor) {
    const ret = arr.filter(v=>!(v%divisor)).sort((a, b) => a - b);
    return ret.length ? ret : [-1]
}