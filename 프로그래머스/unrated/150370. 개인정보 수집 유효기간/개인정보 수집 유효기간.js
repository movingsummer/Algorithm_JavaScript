function solution(today, terms, privacies) {
    const answer = [];
    const d = new Map();
    terms.forEach(item => {
        const [word, num] = item.split(' ')
        d.set(word, Number(num));}
        )
    
    let [year, month, day] = today.split('.').map(v=>+v);
    const todayD = 28 * 12 * year + 28 * month + day;
    
    privacies.forEach((item, i) => {
        const [date, delta] = item.split(' ');
        let [cYear, cMonth, cDay] = date.split('.').map(v=>+v);
        const tot = 28 * 12 * cYear + 28 * cMonth + cDay + 28 * d.get(delta);
        if (tot <= todayD) answer.push(i + 1);
    })
    return answer;
}