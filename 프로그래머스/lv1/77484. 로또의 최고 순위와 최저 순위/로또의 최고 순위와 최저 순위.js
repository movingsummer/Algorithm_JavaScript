function solution(lottos, win_nums) {
    const sameNum = lottos.filter(v=>win_nums.includes(v)).length;
    const z = lottos.filter(v=>v===0).length;
    return [7 - ((sameNum + z) || 1), 7 - (sameNum || 1)]
}