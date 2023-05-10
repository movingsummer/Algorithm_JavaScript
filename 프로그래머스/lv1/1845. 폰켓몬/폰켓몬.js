function solution(nums) {
    const ret = [...new Set(nums)].length;
    const ret2 = ~~(nums.length / 2);
    return ret > ret2 ? ret2 : ret    
}