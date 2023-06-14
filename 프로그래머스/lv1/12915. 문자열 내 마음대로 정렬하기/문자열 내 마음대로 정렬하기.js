function solution(strings, n) {
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    
    return strings.sort().map(v=>v.replace(v[0], ""))
}