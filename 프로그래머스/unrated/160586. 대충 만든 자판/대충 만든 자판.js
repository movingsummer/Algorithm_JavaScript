function solution(keymap, targets) {
    const answer = [];
    const button = new Map();
    
    keymap.forEach(key => {
        key.split('').forEach((word, i) => {
            button.set(word, Math.min(button.get(word) ?? Infinity, i + 1));
        })})
    
    targets.forEach(target => {
        let num = 0;
        target.split('').forEach(word => {
            num += button.get(word);
        })
        
        if (!num) num = -1;
        answer.push(num);
    })
    
    return answer
}