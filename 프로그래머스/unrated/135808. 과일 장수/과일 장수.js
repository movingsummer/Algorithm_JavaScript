function solution(k, m, score) {
    return score.sort((a, b) => b - a).filter((v, i) => m - 1 === (i % m)).reduce((sum, cur) => sum + cur, 0) * m
}