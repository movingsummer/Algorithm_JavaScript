function solution(ingredient) {
    let ans = 0;
    const stack = [];
    
    ingredient.forEach(v => {
        stack.push(v);
        if (stack.length >= 4) {
            const ham = stack.slice(-4).join('');
            if (ham === '1231') {
                for (let i = 0; i < 4; i++)
                    stack.pop();
                ans++;
            }
        }})
    return ans;
}