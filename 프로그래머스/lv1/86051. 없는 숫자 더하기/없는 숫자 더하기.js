function solution(numbers) {
    return 45 - numbers.reduce((s, v) => s + v);
}