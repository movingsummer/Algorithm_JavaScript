function solution(dartResult) {
    const nums = '1234567890'.split('');
    const stages = [];
    for (let i = 0; i < 2; i++) {
        let idx = dartResult.split('').findIndex((v, idx) => {
            return idx > 1 ? nums.includes(v) : false
        });
        stages.push(dartResult.slice(0, idx));
        dartResult = dartResult.slice(idx)
    }
    stages.push(dartResult);
    
    const option = [1, 1, 1, 1];
    const bonus = {'S': 1, 'D': 2, 'T': 3};
    
    return stages.map((stage, i) => {
        stage = stage.split('');
        console.log(stage)
        
            if (stage[stage.length - 1] === '*') {
                option[i] *= 2 
                option[i + 1] *= 2;
                stage.pop();
            }
            else if (stage[stage.length - 1] === '#') {
                option[i + 1] *= -1;
                stage.pop();
            }
        
        const [b, score] = [bonus[stage.pop()], +stage.join('')]
        return score ** b
    }).reduce((sum, cur, i) => sum + (cur * option[i + 1]), 0)
}