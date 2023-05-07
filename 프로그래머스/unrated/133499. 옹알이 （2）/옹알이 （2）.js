function solution(babbling) {
    const babble = ['aya', 'ye', 'woo', 'ma']
    return babbling.reduce((ret, cur) => {
        for (const c of babble) 
            if (cur.includes(c.repeat(2))) return ret;
        
        for (const c of babble)
            cur = cur.split(c).join(' ').trim()
        
        if (cur) return ret;
        
        return ret + 1;
    }, 0)
}