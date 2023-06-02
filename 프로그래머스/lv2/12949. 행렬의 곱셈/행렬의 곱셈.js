function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((col, i) => row.reduce((tot, v, j) => tot + v * arr2[j][i], 0)))
}