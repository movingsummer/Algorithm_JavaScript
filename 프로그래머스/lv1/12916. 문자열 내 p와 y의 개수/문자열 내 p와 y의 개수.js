function solution(s){
    return !([...s.toLowerCase()].reduce((tot, cur) => cur === 'p' ? [tot[0] + 1, tot[1]] : cur === 'y' ? [tot[0], tot[1] - 1] : tot, [0, 0]).reduce((sum, cur) => sum + cur));
}