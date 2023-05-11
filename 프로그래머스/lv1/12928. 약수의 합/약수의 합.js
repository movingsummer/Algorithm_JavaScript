function solution(n, a=1, b=0) {
    return n < a ? b : solution(n, a+1, b+=n%a ? 0 : a);
}