function solution(nums) {
    let ans = 0;
    const isPrime = n => {
        for (let i = 2; i * i <= n; i++)
            if (n % i === 0) return false;
        return true;
    }
    
    const f = (k, sum, t) => {
        if (t === 3) {
            isPrime(sum) && ans++;
            return;
        }
        
        for (let i = k; i < nums.length; i++) 
            f(i + 1, sum + nums[i], t + 1);
    }
    
    f(0, 0, 0);
    return ans;
}