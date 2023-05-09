function solution(id_list, report, k) {
    report = Array.from(new Set(report));
    const reported = new Map();
    const reporting = new Map();
    
    report.forEach(item => {
        const [name1, name2] = item.split(' ');
        reported.set(name2, (reported.get(name2) || 0) + 1)
        reporting.set(name1, (reporting.get(name1) || []).concat([name2]));
    })
    
    return id_list.map(id=>(reporting.get(id) || []).filter(v=>(reported.get(v) || 0) >= k).length)
}