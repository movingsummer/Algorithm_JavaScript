function solution(land) {
    const [n, m] = [land.length, land[0].length];
    const d = Array.from(Array(n), () => new Array(m).fill(0));
    d[0] = Array.from(land[0]);
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let mx = - 1;
            for (let k = 0; k < m; k++) {
                if (j === k) continue;
                if (mx < d[i - 1][k]) mx = d[i - 1][k];
            }
             d[i][j] = mx + land[i][j]
        }
    }

    return Math.max(...d[n - 1])
}