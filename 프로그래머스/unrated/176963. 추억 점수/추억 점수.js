function solution(name, yearning, photo) {
    return photo.map(v => v.reduce((sum, cur) => sum + (yearning[name.indexOf(cur)] ?? 0), 0));
}