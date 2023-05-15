function solution(price, money, count) {
    return Math.max(price * (count * (count + 1) / 2) - money, 0)
}