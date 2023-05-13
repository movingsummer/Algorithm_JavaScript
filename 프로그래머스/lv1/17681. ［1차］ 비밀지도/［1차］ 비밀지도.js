function solution(n, arr1, arr2) {
    const toBinary = (n, k) => {
        const ret = [];
        while (n > 0) {
            ret.push(n % 2);
            n = ~~(n / 2);
        }
       
        return new Array(k - ret.length).fill(0).concat(ret.reverse()).map(v=> v ? '#' : ' ').join('');
    }
    
    const tmp1 = arr1.map(v=>toBinary(v, n));
    const tmp2 = arr2.map(v=>toBinary(v, n));
    
    return tmp1.map((item, i) => [...item].map((v, j) => {
        if (v === '#' || tmp2[i][j] === '#') return '#';
        else return ' ';
    }).join(''))
}