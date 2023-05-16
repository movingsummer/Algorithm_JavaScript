function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((s, v, i) => s + (v * B[i]), 0)
}
