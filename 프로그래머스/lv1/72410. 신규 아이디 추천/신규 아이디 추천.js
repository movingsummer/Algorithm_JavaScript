function solution(new_id) {
    const idSet = 'abcdefghijklmnopqrstuvwxyz1234567890-_.';
    let cpyId = String(new_id).toLowerCase().split('').filter(v=>idSet.includes(v));
    for (let i = 0; i < cpyId.length - 1; i++) {
        if (cpyId[i] === '.' && cpyId[i + 1] === '.') {
            let cur = i + 1;
            while (cur < cpyId.length && cpyId[cur] === '.')
                cpyId[cur++] = '';
        }
    }
    
    cpyId = cpyId.join('').split('');
    if (cpyId[0] === '.') cpyId[0] = '';
    if (cpyId[cpyId.length - 1] === '.') cpyId[cpyId.length - 1] = '';
    cpyId = cpyId.join('');
    if (!cpyId) cpyId = 'a';
    if (cpyId.length > 15) {
        cpyId = cpyId.slice(0, 15);
        if (cpyId[cpyId.length - 1] === '.') cpyId = cpyId.slice(0, cpyId.length - 1);
    }
    if (cpyId.length < 3) cpyId = cpyId + cpyId[cpyId.length - 1].repeat(3 - cpyId.length);
    return cpyId;
}