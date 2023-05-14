function solution(N, stages) {
    stages.sort((a, b) => b - a);
    const clear = new Array(N + 2).fill(0);
    let cnt = 0;
    let pre = stages[0];
    
    for (let i = 0; i < stages.length; i++) {
        const num = stages[i];
        if (num !== pre) {
            for (let i = pre; i > num; i--)
                clear[i] = cnt;
        }
        
        cnt++;
        pre = num;
    }

    for (let i = pre; i > 0; i--)
        clear[i] = cnt;
    
    
    console.log(clear)
    const ans = [];
    for (let i = 1; i < clear.length - 1; i++)
        ans.push([i, (clear[i] / clear[i + 1] || 0)]);
    
    return ans.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]).map(v=>v[0]);
}