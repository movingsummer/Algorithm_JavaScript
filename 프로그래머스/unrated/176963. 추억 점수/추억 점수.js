function solution(name, yearning, photo) {
    const score = new Map();
    var answer = [];
    name.forEach((n, i) => {
        score.set(n, yearning[i]);
    })
    
    photo.forEach(item => {
        answer.push(item.reduce((sum, cur) => sum + (score.get(cur) ?? 0), 0));    
    })
    return answer;
}