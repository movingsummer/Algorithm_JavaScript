function solution(n)
{
    return [...(n + '')].reduce((sum, v) => sum + +v, 0)
}