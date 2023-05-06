function solution(k, score) {
    const arr = new Array(k).fill(5000);
    const ans = [];
    
    score.forEach((sc, i) => {
        if (k > i) arr[i] = sc;
        else {
            if (sc > arr[0]) arr[0] = sc;
        }
        arr.sort((a, b) => a - b);
        ans.push(arr[0]);
    })
    
    return ans;
}