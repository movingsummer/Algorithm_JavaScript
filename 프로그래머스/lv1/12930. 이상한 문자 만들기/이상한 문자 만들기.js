function solution(s) {
    return s.split(' ').map(word => {
        word = [...word.toLowerCase()]
        for (let i = 0; i < word.length; i += 2)
            word[i] = word[i].toUpperCase();
        return word.join('');
    }).join(' ')
}