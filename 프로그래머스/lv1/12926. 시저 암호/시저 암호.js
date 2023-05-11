function solution(s, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = lower.toUpperCase()
    const map = new Map();
    for (let i = 0; i < 26; i++) {
        map.set(lower[i], i);
        map.set(upper[i], i);
    }
    return [...s].map(v=> {
        if (v === ' ') return v;
        else if (v === v.toUpperCase())
            return upper[(map.get(v) + n) % 26]
        else
            return lower[(map.get(v) + n) % 26]}).join('')
}