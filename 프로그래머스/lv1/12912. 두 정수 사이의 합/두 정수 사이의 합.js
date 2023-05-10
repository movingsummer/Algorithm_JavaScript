function solution(a, b) {
    const [mn, mx] = [a, b].sort((a, b) => a - b);
    let sum = 0;
    for (let i = mn; i <= mx; i++)
        sum += i;
    return sum
}