function solution(N, stages) {
    const people = new Array(N + 2).fill(0);
    const rate = Array.from(Array(N), (v, i) => [i + 1, 0]);
    stages.forEach(v=>people[v]++)
    let ac = 0;
    for (let i = 0; i < N; i++) {
        const num = rate[i][0];
        rate[i][1] = (stages.length - ac) / (stages.length - ac - people[num]) 
        ac += people[num];
    }
    
    return rate.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]).map(v=>v[0])
}