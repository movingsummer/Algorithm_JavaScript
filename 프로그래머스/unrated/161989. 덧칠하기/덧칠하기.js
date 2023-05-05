function solution(n, m, section) {
    const arr = new Array(n + 1).fill(0);
    let ans = 0;
    
    for (i of section) {
        if (arr[i]) continue;
        for (let j = i; j < i + m && j <= n; j++)
            arr[j] = 1;
        ans++;
    }
    
    return ans;
}