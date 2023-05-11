function solution(arr) {
    if (arr.length === 1) return [-1];
    let mnIdx = 0;
    for (const i in arr) {
        if (arr[i] < arr[mnIdx])
            mnIdx = i;
    }
    
    return arr.filter((v, i) => i !== +mnIdx)
}