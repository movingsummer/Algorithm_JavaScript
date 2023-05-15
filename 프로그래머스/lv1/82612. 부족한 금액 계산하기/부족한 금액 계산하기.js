function solution(price, money, count) {
    let ret = 0;
    for (let i = 0; i < count; i++)
        ret += price * (i + 1)
    return ret - money >= 0 ? ret - money : 0
}