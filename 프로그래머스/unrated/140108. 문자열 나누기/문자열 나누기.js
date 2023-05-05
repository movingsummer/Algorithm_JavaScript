function solution(s) {
    let str = s;
    let ans = 0;
    
    while (str.length) {
        const x = str[0];
        let cnt = notCnt = 0;
        for (let i = 0; i < str.length; i++) {
            const word = str[i];
            if (word === x) cnt++;
            else notCnt++;
            
            if (cnt === notCnt) {
                str = str.slice(i + 1);
                ans++;
                break;
            }
            
            if (i === str.length - 1) {
                str = ''
                ans++;
                break;
            }
        }
    }
    
    return ans;
}