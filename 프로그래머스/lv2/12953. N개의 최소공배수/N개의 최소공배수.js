function solution(arr) {
    arr.sort((a, b) => b - a);
    const mx = arr[0];
    for (let i = 1; ; i++) {
        const v = mx * i;
        if (arr.every(e=>v%e===0)) return v
    }
}