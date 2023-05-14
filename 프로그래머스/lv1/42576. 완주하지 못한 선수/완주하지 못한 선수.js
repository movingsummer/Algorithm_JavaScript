function solution(participant, completion) {
    const map = new Map();
    completion.forEach(v => {
        map.set(v, map.get(v) + 1 || 1);
    })
    
    for (const name of participant) {
        if (!(map.get(name))) return name;
        map.set(name, map.get(name) - 1);
    }
}