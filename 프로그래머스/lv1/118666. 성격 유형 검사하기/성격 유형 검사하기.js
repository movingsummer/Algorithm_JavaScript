function solution(survey, choices) {
    const mbti = ['RT','CF','JM','AN'];
    const map = new Map();
    const score = [3, 2, 1, 0, 1, 2, 3]
    choices.forEach((choice, i) => {
        const key = choice - 1 <= 3 ? survey[i][0] : survey[i][1];
        map.set(key, (map.get(key) + score[choice - 1]) || score[choice - 1]);
    })
    
    return mbti.reduce((ret, word) => {
        const [a1,a2] = [...word];
         return ret + ((map.get(a1) || 0) >= (map.get(a2) || 0) ? a1 : a2);
  }, '');
}