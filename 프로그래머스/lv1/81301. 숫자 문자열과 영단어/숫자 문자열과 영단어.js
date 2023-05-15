function solution(s) {
    let str = String(s);
    const enNums = ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    for (let i = 0; i < enNums.length; i++)
        str = str.split(enNums[i]).join(i) 
    
    return +str
}