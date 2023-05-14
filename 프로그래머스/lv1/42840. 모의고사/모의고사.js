function solution(answers) {
    const len = answers.length;
    const g = ['12345'.repeat(Math.ceil(len / 5)),'21232425'.repeat(Math.ceil(len / 8)),'3311224455'.repeat(Math.ceil(len / 10))];
    const s = [0, 0, 0];
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < 3; j++)
        s[j] += (answers[i] === +g[j][i]);
    }
    
    const mx = Math.max(...s);
    return s.reduce((arr, v, i) => {
        if (v === mx) return arr.concat(i + 1);
        return arr;
    }, [])
}