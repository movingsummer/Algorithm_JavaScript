function solution(lottos, win_nums) {
    const win_nums_map = new Map(win_nums.map(v=>[v, true]));
    let z = 0;
    const sameNum = lottos.filter(v=>{
        if (v === 0) z++;
        return win_nums_map.get(v) || false
    }).length;
    return [7 - ((sameNum + z) || 1), 7 - (sameNum || 1)]
}