function solution(answers) {
    const len = answers.length;
    const g = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    const s = [0, 0, 0];
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < 3; j++)
        s[j] += (answers[i] === +g[j][i % g[j].length]);
    }
    
    const mx = Math.max(...s);
    return s.reduce((arr, v, i) => {
        if (v === mx) return arr.concat(i + 1);
        return arr;
    }, [])
}