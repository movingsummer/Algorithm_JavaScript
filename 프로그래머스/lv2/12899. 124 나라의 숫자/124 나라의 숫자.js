function solution(n) {
    const map = {0:"1",1:"2",2:"4"};
    const ret = [];
    
    while (n > 0) {
        n -= 1;
        ret.push(map[n % 3]);
        n = ~~(n / 3);
    }
    
    return ret.reverse().join('')
}


