function solution(n, m) {
    let r, nm;
    for (nm = n * m; r = n % m; n = m, m = r) {}
    return [m, nm / m]
}