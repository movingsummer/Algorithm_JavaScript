function solution(strings, n) {
    return strings.map(v=>v[n]+v).sort().map(v=>v.slice(1))
}