function solution(sizes) {
    const arr1 = [];
    const arr2 = [];
    sizes.forEach(v=>{
        v.sort((a, b) => a - b);
        arr1.push(v[0]);
        arr2.push(v[1]);
        })
    
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);
    return arr1[0] * arr2[0]
}