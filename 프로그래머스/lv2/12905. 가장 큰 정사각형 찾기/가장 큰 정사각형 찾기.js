function solution(board)
{
    const [n, m] = [board.length, board[0].length];
    let l = Math.min(n, m);
    l--;
    const d = board.map(v1=>v1.map(v2=>v2));
    
    
        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                if (d[i][j]) {
                    d[i][j] = Math.min(d[i-1][j],d[i][j-1],d[i-1][j-1]) + 1;
                }
            }
        }
    
    
    const ret = d.reduce((mx, item) => Math.max(mx, ...item), 0)
    return ret ** 2;
}