function solution(num) {
    let ans = 0;
    while (num !== 1) {
        num = num % 2 ? num * 3 + 1 : num / 2
        ans++;
        if (ans >= 500) return -1;
    }
    
    return ans;
}