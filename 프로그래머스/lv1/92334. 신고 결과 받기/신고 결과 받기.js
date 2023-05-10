function solution(id_list, report, k) {
    report = [...new Set(report)]
    const reported = new Map();
    report.forEach(item => {
        const [n1, n2] = item.split(' ')
        reported.set(n2, (reported.get(n2) ?? 0) + 1);
        })
    
    const ret = new Map();
    report.forEach(item => {
        const [n1, n2] = item.split(' ');
        reported.get(n2) >= k && ret.set(n1, (ret.get(n1) ?? 0) + 1);
    })
    
    return id_list.map(v=>ret.get(v) || 0);
}