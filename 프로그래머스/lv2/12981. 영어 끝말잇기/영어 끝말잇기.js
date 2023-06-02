function solution(n, words) {
    const reg = new Set();
    for (let i = 0; i < words.length; i++) {
        const c = words[i];
        if (reg.has(c) || (i > 0 && words[i - 1].slice(-1) !== c[0])) {
            return [(i % n) + 1, ~~(i / n) + 1];
        }
        reg.add(c)
    }
    
    return [0, 0];
}