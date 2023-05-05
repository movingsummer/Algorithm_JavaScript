function solution(s) {
    const location = {};
    const ans = [];
    s.split('').forEach((word, i) => {
         ans.push(i - location[word] || -1)
        location[word] = i;
    })
    
    return ans
}