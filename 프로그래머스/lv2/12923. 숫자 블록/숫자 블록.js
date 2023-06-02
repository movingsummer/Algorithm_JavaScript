function solution(begin, end) {
    const ans = [];
    
    a: for (let i = begin; i <= end; i++) {
        if (i === 1) {
            ans.push(0);
        }
        else {
            let tmp = 0;
            for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                    if (~~(i / j) > 10000000) {tmp = j; continue;}
                ans.push(~~(i / j));
                continue a;
            }
        }
        
        ans.push(tmp ? tmp : 1);
        }
    }
    
    return ans;
}