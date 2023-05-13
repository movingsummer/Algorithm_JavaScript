function solution(d, budget) {
    let sum = 0;
    for (const i in d.sort((a, b) => a- b)) {
        sum += d[i];
        if (sum > budget) return +i;
    }
    
    return d.length;
}