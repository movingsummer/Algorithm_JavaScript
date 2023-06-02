function solution(arr1, arr2) {
    const m = arr2[0].length;
    return arr1.map((v1, i) => Array.from(Array(m), (_, j) => v1.reduce((tot, v2, k) => tot + v2 * arr2[k][j], 0)));
}