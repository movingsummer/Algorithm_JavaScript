function solution(number, limit, power) {
    const divisor = n => {
        let cnt = 0;
        for (let i = 1; i * i <= n; i++) {
            if (!(n % i)) cnt += 2; 
            i * i === n && cnt--;
        }
    return cnt > limit ? power : cnt;
    }
    
    return Array.from(Array(number), (v, i) => divisor(i + 1)).reduce((sum, cur) => sum + cur, 0)
}