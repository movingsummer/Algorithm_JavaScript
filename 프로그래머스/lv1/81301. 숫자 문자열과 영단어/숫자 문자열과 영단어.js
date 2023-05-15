function solution(s) {
    const enNums = new Map(['zero','one','two','three','four','five','six','seven','eight','nine'].map((v, i)=> [v, i]))

    Array.from(enNums.keys()).forEach(v=>{
        while (s.includes(v))
            s = s.replace(v, enNums.get(v))
    })
    
    return +s;
}