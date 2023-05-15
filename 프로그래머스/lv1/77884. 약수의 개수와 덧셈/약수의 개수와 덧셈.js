function solution(left, right) {
    const divisor = n => {
        let cnt = 0;
        for (let i = 1; i * i <= n; i++) {
            cnt += 2 * !(n % i)
            if (i * i === n)
                cnt--;
        }
       
        return cnt % 2 ? -1 : 1;
    }
    
    return Array.from(Array(right - left + 1), (_, i) => i + left).reduce((ret, v) => ret + v * divisor(v), 0)
}