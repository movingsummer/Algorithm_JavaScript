function solution(name, yearning, photo) {
    const score = {};
    name.forEach((v, i) => score[v] = yearning[i]);
    return photo.map(v => v.reduce((sum, cur) => sum + (score[cur] ?? 0), 0));
}