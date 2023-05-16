function solution(n) {
    let ans = 0;
    const vertical = new Array(n).fill(0);
    const diag1 = new Array(2 * n - 1).fill(0);
    const diag2 = new Array(2 * n - 1).fill(0);
    
    const f = x => {
        if (x === n) {
            ans++;
            return;
        }
        
        for (let y = 0; y < n; y++) {
            if (!(vertical[y] | diag1[x + y] | diag2[x - y + n - 1])) {
                vertical[y] = diag1[x + y] = diag2[x - y + n - 1] = 1;
                f(x + 1);
                vertical[y] = diag1[x + y] = diag2[x - y + n - 1] = 0;
                
            }
        }
    }
    
    f(0);
    return ans;
}