function solution(s) {
    let judge = true;
    for (const v of s) {
        if (Number.isNaN(+v)) {
            judge = false;
            break;
        }
    }
    return (s.length === 4 || s.length === 6) && judge
}