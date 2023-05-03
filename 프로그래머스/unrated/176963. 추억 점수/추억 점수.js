function solution(name, yearning, photo) {
    const score = {};
    for (let i = 0; i < name.length; i++) score[name[i]] = yearning[i];
    return photo.map(v => v.reduce((sum, cur) => sum + (score[cur] ?? 0), 0));
}