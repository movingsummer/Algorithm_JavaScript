function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    const map = new Map(reserve.map(v=>[v, 2]));
    lost.forEach(v=>{
        map.set(v, map.get(v) - 1 || 0);
    })
    lost.forEach(v=> {
        if (map.get(v)) {}
        else if (map.get(v - 1) > 1) 
            map.set(v - 1, 0);
        else if (map.get(v + 1) > 1)
            map.set(v + 1, 0);
        else n--;
    })
    
    return n;
}