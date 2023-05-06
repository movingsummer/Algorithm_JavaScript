function solution(k, m, score) {
    score.sort((a, b) => b - a);
    return score.slice(0, score.length - (score.length % m) + 1).map((v, i) => i % m === m - 1 ? v * m : 0).reduce((sum, cur) => sum + cur, 0)
}