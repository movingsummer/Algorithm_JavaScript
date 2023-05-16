function solution(s) {
    const ret = s.split(' ').sort((a, b) => a - b);
    return `${ret[0]} ${ret[ret.length - 1]}`
}