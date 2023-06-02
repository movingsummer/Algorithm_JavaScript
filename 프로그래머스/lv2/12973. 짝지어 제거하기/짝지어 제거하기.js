function solution(s)
{
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        stack.push(c);
        while (stack.length > 1 && stack[stack.length - 2] === stack[stack.length - 1]) {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length ? 0 : 1
}