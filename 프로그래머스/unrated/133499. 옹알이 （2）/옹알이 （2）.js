function solution(babbling) {
    const pro = ['aya', 'ye', 'woo', 'ma']
    return babbling.reduce((sum, cur) => {
        for (const word of pro)
            if (cur.includes(word.repeat(2))) return sum;
        for (const word of pro)
            cur = cur.split(word).join(' ').trim()
        
        if (cur) return sum;
        return sum + 1;
    }, 0)
}