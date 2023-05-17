function solution(n) {
    const binaryN = n.toString(2).split('').filter(v=>v==='1').length;
    for (let i = n + 1; ; i++) {
        if (i.toString(2).split('').filter(v=>v==='1').length === binaryN)
            return i;
    }
}