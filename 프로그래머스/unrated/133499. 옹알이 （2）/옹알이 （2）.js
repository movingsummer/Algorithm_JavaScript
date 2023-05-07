function solution(babbling) {
    let ans = 0;
    babbling.forEach(word => {
        const stack = [];
        let pre = '';
        for (const c of word) {
            stack.push(c);
            if (stack.length >= 2) {
                const tmp = stack.slice(-2).join('');
                const tmp2 = stack.slice(-3).join('');
                if ((tmp === 'ye' || tmp === 'ma') && tmp !== pre) {
                    stack.pop();
                    stack.pop();
                    pre = tmp;
                    if (stack.length) break;
                }
                else if ((tmp2 === 'aya' || tmp2 === 'woo') && tmp2 !== pre) {
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    pre = tmp2;
                    if (stack.length) break;
                }
                
            }
        } 
        
        if (!stack.length) ans++;
    })
    
    return ans;
}