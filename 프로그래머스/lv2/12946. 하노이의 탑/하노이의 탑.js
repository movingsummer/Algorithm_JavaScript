function solution(n) {
    const hanoi = (k, from, to, by) => {
        if (k === 1) return [[from, to]];
        return hanoi(k - 1, from, by, to).concat(hanoi(1, from, to, by)).concat(hanoi(k - 1, by, to, from));
    }
    
    return hanoi(n, 1, 3, 2)
}
