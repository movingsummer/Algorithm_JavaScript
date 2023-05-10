function solution(arr)
{
    const ans = [];
    let pre = -1;
    arr.forEach((v, idx) => {
        v !== pre && ans.push(v);
        pre = v;
    })
    return ans;
}