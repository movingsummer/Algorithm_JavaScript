function solution(numbers) {
    const nums = [1,2,3,4,5,6,7,8,9];
    return nums.filter(v=>!numbers.includes(v)).reduce((s, t) => s + t);
}